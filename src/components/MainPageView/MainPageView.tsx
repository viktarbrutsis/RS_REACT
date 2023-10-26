import { Component } from 'react';
import TopSectionView from '../TopSection/TopSectionView';
import { BottomSectionView } from '../BottomSection/BottomSectionView';

class MainPageView extends Component {
  render() {
    return (
      <div className="container">
        <h1>My first React App</h1>
        <h3 className="search-title">Search</h3>
        <TopSectionView />
        <h3 className="search-result">Search result</h3>
        <BottomSectionView />
      </div>
    );
  }
}

export default MainPageView;
