import { createRef, Component } from 'react';

class TopSectionView extends Component {
  constructor(placeholder: string | Readonly<string>) {
    super(placeholder);
    this.state = {
      searchValue: localStorage.getItem('search') || 'search',
    };
  }

  inputRef = createRef<HTMLInputElement>();

  getSearchValue = () => {
    console.log(this.inputRef.current.value);
    localStorage.setItem('search', this.inputRef.current.value || '');
    this.setState({ searchValue: localStorage.getItem('search') });
    this.inputRef.current.value = '';
    // localStorage.getItem('search');
    // localStorage.clear();
  };

  // useEffect() {
  //   this.getSearchValue();
  // }

  render() {
    return (
      <div className="topsection">
        <input
          type="text"
          className="topsection-input"
          placeholder={this.state.searchValue}
          ref={this.inputRef}
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
