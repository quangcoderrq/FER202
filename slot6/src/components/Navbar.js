import React from "react";
function Navbar() {
    return (
         <div className="col-lg-12">
                        <div className="container">
                            <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
                                <div className="container">
                                    <a className="navbar-brand" href="#">
                                        Pizza House
                                    </a>
                                    <button
                                        className="navbar-toggler"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#navbarSupportedContent"
                                        aria-controls="navbarSupportedContent"
                                        aria-expanded="false"
                                        aria-label="Toggle navigation"
                                    >
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div
                                        className="collapse navbar-collapse"
                                        id="navbarSupportedContent"
                                    >
                                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                            <li className="nav-item active">
                                                <a className="nav-link" href="#">
                                                    Home
                                                </a>
                                            </li>
                                            <li className="nav-item active">
                                                <a className="nav-link" href="#">
                                                    About us
                                                </a>
                                            </li>
                                            <li className="nav-item active">
                                                <a className="nav-link" href="#">
                                                    Contact
                                                </a>
                                            </li>
                                        </ul>
                                        <form className="d-flex" role="search">
                                            <input
                                                className="form-control me-2"
                                                type="search"
                                                placeholder="Search"
                                                aria-label="Search"
                                            />
                                            <button className="btn btn-danger" type="submit">
                                                <i className="fa fa-search"></i>
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
    );
}
export default Navbar;
