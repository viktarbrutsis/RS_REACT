import { Component } from 'react';
import MainPageView from './components/MainPageView/MainPageView';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

class App extends Component {
  render() {
    return (
      <ErrorBoundary>
        <MainPageView />
      </ErrorBoundary>
    );
  }
}

export default App;
