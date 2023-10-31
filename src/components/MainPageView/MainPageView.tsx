import { useEffect, useState } from 'react';
import TopSectionView from '../TopSection/TopSectionView';
import axios from 'axios';
import Loader from '../loader/Loader';
import BottomSectionView from '../BottomSection/BottomSectionView';

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
  // const [next, setNext] = useState('');
  const [loading, setLoading] = useState(true);
  // const [local, setLocal] = useState<string>('');

  async function getSearchValue(value: string) {
    console.log(value);
    (await value) ? getSearchInfo(value) : getStartInfo();
  }

  function getSearchInfo(local: string) {
    console.log('serach got from top section and show in Main page' + local);
    const searchData = () => {
      axios
        .get(`https://swapi.dev/api/species/?search=${local}`)
        .then((response) => {
          setData(response.data.results);
          // setNext(response.data.next);
          setLoading(false);
        })
        .catch((error) => console.log(error));
    };
    searchData();
  }

  async function getStartInfo() {
    const url: string = 'https://swapi.dev/api/species/';
    let allData: MyProps[] = [];

    const fetchData = async (url: string) => {
      await axios
        .get(url)
        .then((response) => {
          allData = [...allData, ...response.data.results];
          if (response.data.next) {
            fetchData(response.data.next);
          }
          setData(allData);
          // setNext(response.data.next);
          setLoading(false);
        })
        .catch((error) => console.log(error));
    };

    fetchData(url);
  }

  return (
    <div className="container">
      <h1>My first React App</h1>
      <h3 className="search-title">Search the species in Star Wars</h3>
      <TopSectionView
        // getSearchInfo={getSearchInfo}
        getSearchValue={getSearchValue}
      />
      <h3 className="search-result">Search result</h3>
      <div className="bottomsection">
        {loading ? <Loader /> : <BottomSectionView data={data} />}
      </div>
    </div>
  );
}

export default MainPageView;
