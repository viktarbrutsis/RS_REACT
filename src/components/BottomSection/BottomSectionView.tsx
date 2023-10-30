import { Component } from 'react';
import BottomSectionItem, { MyProps } from './BottomSectionItem';
import PropTypes from 'prop-types';
import Loader from '../loader/Loader';
import axios from 'axios';

interface Data {
  data: [] | MyProps[];
  next: string;
  loading: boolean;
  local?: string;
}

export class BottomSectionView extends Component<object, Data> {
  static propTypes: {
    onSearch: PropTypes.Requireable<object>;
    name: PropTypes.Requireable<string>;
    classification: PropTypes.Requireable<string>;
    average_height: PropTypes.Requireable<string>;
    language: PropTypes.Requireable<string>;
  };
  constructor(props: object) {
    super(props);
    this.state = {
      data: [],
      next: '',
      loading: true,
      local: '',
    };
  }

  componentDidMount(): void {
    const local = localStorage.getItem('search');
    if (local) {
      this.getSearchInfo(local);
    } else {
      this.getStartInfo();
    }
  }

  getSearchInfo = async (local: string) => {
    const searchData = () => {
      axios
        .get(`https://swapi.dev/api/species/?search=${local}`)
        .then((response) => {
          this.setState({
            data: response.data.results,
            next: response.data.next,
            loading: false,
          });
        })
        .catch((error) => console.log(error));
    };
    searchData();
  };

  getStartInfo = () => {
    const url: string = 'https://swapi.dev/api/species/';
    let allData: MyProps[] = [];

    const fetchData = (url: string) => {
      axios
        .get(url)
        .then((response) => {
          allData = [...allData, ...response.data.results];
          if (response.data.next) {
            fetchData(response.data.next);
          } else {
            console.log(allData);
          }
          this.setState({
            data: allData,
            next: response.data.next,
            loading: false,
          });
        })
        .catch((error) => console.log(error));
    };

    fetchData(url);
  };

  render() {
    const { data } = this.state;
    return (
      <>
        <div className="bottomsection">
          {this.state.loading ? <Loader /> : ''}
          {data.map((item) => (
            <BottomSectionItem
              key={item.name}
              name={item.name}
              classification={item.classification}
              language={item.language}
              average_height={item.average_height}
              homeworld={item.homeworld}
            />
          ))}
        </div>
      </>
    );
  }
}
