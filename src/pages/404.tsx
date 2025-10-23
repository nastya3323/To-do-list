import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="container bg-color">
      <div className="error">
        <h1>404</h1>
        <p>Page not found</p>
      </div>
      <Link to="/" className="error-link">To home</Link>
    </div>
  );
};
