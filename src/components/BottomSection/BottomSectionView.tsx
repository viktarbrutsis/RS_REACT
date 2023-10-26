import { Component } from 'react';
import BottomSectionItem from './BottomSectionItem';

export class BottomSectionView extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  getInfo() {
    fetch('https://swapi.dev/api/people/')
      .then((response) => response.json())
      .then((json) => this.setState({ data: json.results }));
    //   const json = await response.json();
    //   this.setState({ data: json });
  }

  componentDidMount(): void {
    this.getInfo();
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
        {data.map((item) => (
          <BottomSectionItem key={item.name} name={item.name} eye={item.url} />
        ))}
      </div>
    );
  }
}
