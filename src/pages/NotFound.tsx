import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <>
      <h1>Page is not found</h1>
      <Link to="/">GO HOME</Link>
    </>
  );
}

export default NotFound;
