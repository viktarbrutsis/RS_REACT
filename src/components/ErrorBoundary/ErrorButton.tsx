import { useState } from 'react';

function ErrorButton(): JSX.Element {
  const [error, setError] = useState<boolean>(false);

  function handler() {
    if (!error) {
      setError(true);
      throw new Error('Something went wrong!!!');
    }
  }

  return (
    <>
      <button onClick={handler}>Error</button>
    </>
  );
}

export default ErrorButton;
