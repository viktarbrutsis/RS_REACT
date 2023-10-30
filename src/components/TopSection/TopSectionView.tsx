import { createRef, Component } from 'react';

interface SearchBlockProps {
  onSearch: (searchValue: string) => void;
}

class TopSectionView extends Component<
  SearchBlockProps,
  { searchValue: string }
> {
  constructor(props: SearchBlockProps) {
    super(props);
    this.state = {
      searchValue: localStorage.getItem('search') || 'search',
    };
  }

  inputRef = createRef<HTMLInputElement>();

  getSearchValue = () => {
    console.log(this.inputRef.current?.value);
    localStorage.setItem('search', this.inputRef.current?.value || '');
    this.setState({ searchValue: localStorage.getItem('search') || '' });
    this.inputRef.current.value = '';
    this.props.onSearch(this.state.searchValue.trim());
  };

  render() {
    return (
      <div className="topsection">
        <input
          type="text"
          className="topsection-input"
          placeholder={localStorage.getItem('search')}
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
