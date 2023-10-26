import { Component } from 'react';
import PropTypes from 'prop-types';

interface MyProps {
  name: string;
  eye: string;
  gender: string;
  height: string;
  homeworld: string;
}

class BottomSectionItem extends Component {
  constructor(props: MyProps) {
    super(props);
  }
  render() {
    return (
      <div className="result-item">
        <h3 className="result-item_name">{this.props.name}</h3>
        <h3 className="result-item_eye">{this.props.eye}</h3>
        <h3 className="result-item_gender">{this.props.gender}</h3>
        <h3 className="result-item_height">{this.props.height}</h3>
        <h3 className="result-item_homeworld">{this.props.homeworld}</h3>
      </div>
    );
  }
}

BottomSectionItem.propTypes = {
  name: PropTypes.string,
  eye: PropTypes.string,
  gender: PropTypes.string,
  height: PropTypes.string,
  homeworld: PropTypes.string,
};

export default BottomSectionItem;
