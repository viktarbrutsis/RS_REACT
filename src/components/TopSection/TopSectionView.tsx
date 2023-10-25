import { Component } from 'react';

class TopSectionView extends Component {
  constructor() {
    super();
    this.state = {
      searchValue: localStorage.getItem('search') || 'search',
    };
  }

  getSearchValue = () => {
    const input = document.querySelector(
      '.topsection-input'
    ) as HTMLInputElement;
    const inputValue = input.value;
    localStorage.setItem('search', inputValue);
    localStorage.getItem('search');
    input.value = '';
    this.setState({ searchValue: localStorage.getItem('search') });
    // localStorage.clear();
  };

  render() {
    return (
      <div className="topsection">
        <input
          type="text"
          className="topsection-input"
          placeholder={this.state.searchValue}
        />
        <button
          className="button topsection-button"
          aria-label="Save"
          type="button"
          onClick={this.getSearchValue}
        >
          Search
        </button>
        {/* <div>{localStorage.getItem('search')}</div> */}
      </div>
    );
  }
}

export default TopSectionView;
