import "./footer.css";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <nav className="navbar navbar-expand-lg" data-bs-theme="dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Chronicles of Paradox
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/montyHall">
                Monty Hall Problem
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link active" to="/about">
                About Me
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Footer;
