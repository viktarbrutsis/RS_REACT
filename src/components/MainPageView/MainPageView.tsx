import { Component } from 'react';
import TopSectionView from '../TopSection/TopSectionView';

// eslint-disable-next-line react/prefer-stateless-function
class MainPageView extends Component {
  render() {
    return (
      <div className="container">
        <h1>My first React App</h1>
        <TopSectionView />
      </div>
    );
  }
}

export default MainPageView;
