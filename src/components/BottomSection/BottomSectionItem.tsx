import { Component } from 'react';
import PropTypes from 'prop-types';

export interface MyProps {
  [x: string]: string | null | undefined;
  key: string;
  name: string;
  classification: string;
  average_height: string;
  homeworld: string;
  language: string;
}

class BottomSectionItem extends Component<MyProps> {
  static propTypes: {
    name: PropTypes.Requireable<string>;
    classification: PropTypes.Requireable<string>;
    average_height: PropTypes.Requireable<string>;
    language: PropTypes.Requireable<string>;
    homeworld: PropTypes.Requireable<string>;
  };
  constructor(props: MyProps) {
    super(props);
  }

  render() {
    return (
      <div className="result-item">
        <h3 className="result-item_name">
          <span className="result-item_span">Hero name: </span>
          {this.props.name}
        </h3>
        <h5 className="result-item_classification">
          <span className="result-item_span">Classification: </span>
          {this.props.classification}
        </h5>
        <h5 className="result-item_height">
          <span className="result-item_span">Height: </span>
          {this.props.average_height}
        </h5>
        <h5 className="result-item_language">
          <span className="result-item_span">Language: </span>
          {this.props.language}
        </h5>
        <h5 className="result-item_homeworld">
          <span className="result-item_span">Homeworld: </span>
          <a className="result-item_link" href={this.props.homeworld}>
            {this.props.homeworld}
          </a>
        </h5>
      </div>
    );
  }
}

// BottomSectionItem.propTypes = {
//   name: PropTypes.string,
//   eye: PropTypes.string,
//   gender: PropTypes.string,
//   height: PropTypes.string,
//   homeworld: PropTypes.string,
// };

export default BottomSectionItem;
