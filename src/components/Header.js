import React from "react";
import { Link } from "react-router-dom";

function Header() {

    return (
        <div style={{ fontFamily: 'sans-serif' }}>
            <div className="main_banner sticky-top" style={{ backgroundColor: '#333333', opacity: '0.7' }} >
                <nav className="navbar navbar-expand-lg p-3 navbar-dark transparent-nav nav-js">
                    <Link className="navbar-brand" to="/">
                        Home
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-item nav-link active" to="/kiet">
                                KIETPT
                            </Link>
                            <Link to="/duc" className="nav-item nav-link">
                                DucNLM
                            </Link>
                            <Link to="/tien" className="nav-item nav-link">
                                TIENPG
                            </Link>
                            <Link to="/phuc" className="nav-item nav-link">PHUCNH</Link>
                            <Link to="/" className="nav-item nav-link">Home</Link>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
  );
}

export default Header;
