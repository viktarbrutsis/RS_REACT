import { Component } from 'react';

interface Error {
  stack?: string;
}

class ErrorBoundary extends Component<object, { hasError: boolean }> {
  constructor(props: object) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <div>Something went wrong</div>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
