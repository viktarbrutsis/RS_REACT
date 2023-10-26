import { Component } from 'react';
import BottomSectionItem from './BottomSectionItem';
export class BottomSectionView extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
    };
  }

  componentDidMount(): void {
    fetch('https://swapi.dev/api/people/')
      .then((response) => response.json())
      .then((data) => this.setState({ data: data }));
  }

  render() {
    {
      console.log(this.state.data.results);
      console.log(Array.isArray(this.state.data.results));
    }
    return (
      <div className="bottomsection">
        <BottomSectionItem name="gnida" />
      </div>
    );
  }
}
