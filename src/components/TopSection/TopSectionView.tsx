import { createRef, Component } from 'react';

interface SearchResult {
  onSearch: (searchValue: string) => void;
}
class TopSectionView extends Component<
  SearchBlockProps,
  { searchValue: string }
> {
  constructor(props: SearchResult) {
    super(props);
    this.state = {
      searchValue: '',
    };
  }
  inputRef = createRef<HTMLInputElement>();
  getSearchValue = () => {
    console.log(this.inputRef.current?.value);
    localStorage.setItem('search', this.inputRef.current?.value || '');
    this.setState({ searchValue: this.inputRef.current?.value || '' });
    this.inputRef.current.value = '';
    this.props.onSearch(this.state.searchValue.trim());
  };
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
      </div>
    );
  }
}

export default TopSectionView;
