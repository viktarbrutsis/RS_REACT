import { Component } from 'react';
import myGif from '../../public/spinner.gif';

class Loader extends Component {
  render() {
    return <img src={myGif}></img>;
  }
}

export default Loader;
