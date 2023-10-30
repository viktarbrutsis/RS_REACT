import { Component } from 'react';

interface MyProps {
  key: string;
  name: string;
  classification: string;
  average_height: string;
  homeworld: string;
  language: string;
}

interface AllResults {
  data: MyProps[];
}

class BottomSectionView extends Component<AllResults> {
  render() {
    const { data } = this.props;
    return (
      <>
        {data.map((item, index) => (
          <div key={index} className="result-item">
            <h3 className="result-item_name">
              <span className="result-item_span">Hero name: </span>
              {item.name}
            </h3>
            <h5 className="result-item_classification">
              <span className="result-item_span">Classification: </span>
              {item.classification}
            </h5>
            <h5 className="result-item_height">
              <span className="result-item_span">Height: </span>
              {item.average_height}
            </h5>
            <h5 className="result-item_language">
              <span className="result-item_span">Language: </span>
              {item.language}
            </h5>
            <h5 className="result-item_homeworld">
              <span className="result-item_span">Homeworld: </span>
              <a className="result-item_link" href={item.homeworld}>
                {item.homeworld}
              </a>
            </h5>
          </div>
        ))}
      </>
    );
  }
}

export default BottomSectionView;
