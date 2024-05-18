import { Link } from "react-router-dom";

export default function Nav (props) {
  return (
    <div className="nav">
      <div className="title">Anime API</div>
      <div className="links">
      <Link to="/">
        <div>Homepage</div>
      </Link>
      <Link to="/anime">
        <div>Anime</div>
      </Link>
      <Link to="/characters">
        <div>Characters</div>
      </Link>
      </div>
    </div>
  );
}