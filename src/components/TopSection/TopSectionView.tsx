import { useRef, useState } from 'react';
import { MyProps } from '../MainPageView/MainPageView';

// interface SearchResult {
//   onSearch: (searchValue: string) => void;
// }

interface SearchResult {
  getSearchInfo: (searchValue: string) => void;
}

function TopSectionView(props: SearchResult): JSX.Element {
  // constructor(props: SearchResult) {
  //   super(props);
  //   this.state = {
  //     searchValue: '',
  //   };
  // }

  const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  const [searchValue, setSearchValue] = useState('');

  function getSearchValue(): void {
    setSearchValue(inputRef.current?.value);
    props.getSearchInfo(searchValue);
    // await localStorage.setItem('search', this.inputRef.current?.value || '');

    // this.inputRef.current.value = '';
  }

  return (
    <div className="topsection">
      <input
        type="text"
        className="topsection-input"
        placeholder={searchValue}
        ref={inputRef}
      />
      <button
        className="button topsection-button"
        aria-label="Save"
        type="button"
        onClick={getSearchValue}
      >
        Search
      </button>
    </div>
  );
}

export default TopSectionView;
