import { createRef, Component } from 'react';

interface SearchResult {
  onSearch: (searchValue: string) => void;
}
class TopSectionView extends Component<SearchResult, { searchValue: string }> {
  constructor(props: SearchResult) {
    super(props);
    this.state = {
      searchValue: '',
    };
  }

  inputRef = createRef<HTMLInputElement>();

  getSearchValue = async () => {
    await this.setState({ searchValue: this.inputRef.current?.value || '' });
    await localStorage.setItem('search', this.inputRef.current?.value || '');
    this.props.onSearch(this.state.searchValue.trim());
    // this.inputRef.current.value = '';
  };

  render() {
    const { searchValue } = this.state;
    return (
      <div className="topsection">
        <input
          type="text"
          className="topsection-input"
          placeholder={searchValue}
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
      </div>
    );
  }
}

export default TopSectionView;
