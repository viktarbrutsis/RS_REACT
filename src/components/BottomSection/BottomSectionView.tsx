import { Component } from 'react';
import BottomSectionItem, { MyProps } from './BottomSectionItem';
import PropTypes from 'prop-types';
import Loader from '../loader/Loader';

export class BottomSectionView extends Component<
  [],
  { data: MyProps[]; loading: boolean }
> {
  static propTypes: {
    name: PropTypes.Requireable<string>;
    classification: PropTypes.Requireable<string>;
    average_height: PropTypes.Requireable<string>;
    language: PropTypes.Requireable<string>;
  };
  constructor(props: []) {
    super(props);
    this.state = {
      data: [],
      loading: true,
    };
  }

  getStartInfo() {
    fetch('https://swapi.dev/api/species/')
      .then((response) => response.json())
      .then((json) => this.setState({ data: json.results, loading: false }));
  }

  // https://swapi.dev/api/species/?search=Human

  componentDidMount(): void {
    this.getStartInfo();
  }

  // async componentDidMount() {
  //   const response = await fetch('https://swapi.dev/api/people/')
  //   const json = await response.json();
  //   this.setState({ data: json });
  // }

  render() {
    const { data } = this.state;
    console.log(data);
    return (
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
    );
  }
}
