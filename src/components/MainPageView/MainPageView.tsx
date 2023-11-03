import { useEffect, useState } from 'react';
import TopSectionView from '../TopSection/TopSectionView';
import Loader from '../loader/Loader';
import BottomSectionView from '../BottomSection/BottomSectionView';
import ErrorButton from '../ErrorBoundary/ErrorButton';
import axios from 'axios';
import Pagination from '../Pagination/Pagination';

// interface SearchInfo {
//   getSearchInfo: (searchValue: string) => void;
// }

// interface StartInfo {
//   getSearchValue: (searchValue: string) => void;
// }

export interface MyProps {
  key: string;
  name: string;
  classification: string;
  average_height: string;
  homeworld: string;
  language: string;
  data: [];
}

function MainPageView() {
  const [data, setData] = useState<MyProps[]>([]);
  const [pages, setPages] = useState(0);
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(0);
  const [local, setLocal] = useState<string>('');


  console.log('serach got from top section and show in Main page' + local);

  useEffect(
    function () {
      if (local) {
        searchData(local);
      } else {
        allData();
      }
    },
    [local]
  );

  async function searchData(value: string) {
    try {
      const res = await fetch(`https://swapi.dev/api/species/?search=${value}`);
      if (!res.ok) {
        throw new Error('Something went wrong');
      }
      const data = await res.json();
      setData(data.results);
      setLoading(false);
    } catch {
      (error: string) => console.log(error);
    }
  }

  async function allData() {
    let allData: MyProps[] = [];
    const url: string = 'https://swapi.dev/api/species/';
    const fetchData = async (url: string) => {
      await axios
        .get(url)
        .then((response) => {
          allData = [...allData, ...response.data.results];
          console.log(total);
          if (response.data.next) {
            fetchData(response.data.next);
          }
          setData(allData);
          setPages(Math.ceil(response.data.count / 10));
          setLoading(false);
          setTotal(response.data.count);
        })
        .catch((error) => console.log(error));
    };

    fetchData(url);
  }

  async function Search(value: string) {
    await setLocal(value);
  }

  return (
    <div className="container">
      <h1>My first React App</h1>
      <h3 className="search-title">Search the species in Star Wars</h3>
      <TopSectionView
        // getSearchInfo={getSearchInfo}
        // getInitialSearchValue={getInitialSearchValue}
        getSearchValue={Search}
      />
      <h3 className="search-result">Search result</h3>
      <div className="bottomsection">
        {loading ? <Loader /> : <BottomSectionView data={data} />}
      </div>
      <Pagination number={pages} arrayPagination={[]} />
      <ErrorButton />
    </div>
  );
}

export default MainPageView;
