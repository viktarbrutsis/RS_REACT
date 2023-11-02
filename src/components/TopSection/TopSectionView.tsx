import { useState } from 'react';

interface SearchResult {
  // getSearchInfo: (searchValue: string) => void;
  // getInitialSearchValue: (searchValue: string) => void;
  getSearchValue: (searchValue: string) => void;
}

function TopSectionView(props: SearchResult): JSX.Element {
  const [searchValue, setSearchValue] = useState('');

  async function search() {
    // await setSearchValue(inputRef.current.value);
    await props.getSearchValue(searchValue);
  }

  function inputHandler(event: { target: { value: string } }) {
    setSearchValue(event.target.value);
  }

  return (
    <div className="topsection">
      <input
        type="text"
        className="topsection-input"
        placeholder={searchValue}
        onChange={inputHandler}
      />
      <button
        className="button topsection-button"
        aria-label="Save"
        type="button"
        onClick={search}
      >
        Search
      </button>
      <div>{searchValue}</div>
    </div>
  );
}

export default TopSectionView;
