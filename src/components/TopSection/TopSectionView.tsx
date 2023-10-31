import { useRef, useState } from 'react';

interface SearchResult {
  // getSearchInfo: (searchValue: string) => void;
  getSearchValue: (searchValue: string) => void;
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

  const search = async (): Promise<void> => {
    setSearchValue(inputRef.current?.value);
    // props.getSearchInfo(searchValue);
    props.getSearchValue(searchValue);
  };

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
        onClick={search}
      >
        Search
      </button>
    </div>
  );
}

export default TopSectionView;
