import { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class TopSectionView extends Component {
  render() {
    return (
      <div className="topsection">
        <input type="text" className="topsection-input" placeholder="search" />
        <input
          className="button topsection-button"
          type="button"
          value="Search"
        />
      </div>
    );
  }
}

export default TopSectionView;
