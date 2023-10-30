import { Component } from 'react';
import TopSectionView from '../TopSection/TopSectionView';
import axios from 'axios';
import Loader from '../loader/Loader';
import BottomSectionView from '../BottomSection/BottomSectionView';

interface MyProps {
  key: string;
  name: string;
  classification: string;
  average_height: string;
  homeworld: string;
  language: string;
}

interface Data {
  data: MyProps[];
  next: string;
  loading: boolean;
  local?: string;
}

class MainPageView extends Component<object, Data> {
  constructor(props: Data) {
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
    console.log('From DidMount ' + local);
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
    return (
      <div className="container">
        <h1>My first React App</h1>
        <h3 className="search-title">Search the species in Star Wars</h3>
        <TopSectionView onSearch={this.getSearchInfo} />
        <h3 className="search-result">Search result</h3>
        <div className="bottomsection">
          {this.state.loading ? (
            <Loader />
          ) : (
            <BottomSectionView data={this.state.data} />
          )}
        </div>
      </div>
    );
  }
}

export default MainPageView;
