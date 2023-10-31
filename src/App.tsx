import MainPageView from './components/MainPageView/MainPageView';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

function App(): JSX.Element {
  return (
    <ErrorBoundary>
      <MainPageView />
    </ErrorBoundary>
  );
}

export default App;
