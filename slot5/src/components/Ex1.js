import React from "react";
import "./Ex1.css"
import 'bootstrap/dist/css/bootstrap.min.css'
function Ex1() {
    return (
        <div>
            <div className="header-section">
                <div className="container">
                    <h1 className="header-title">Let's test the grid!</h1>
                </div>
            </div>

            <div className="container">
                <div className="nav-section">
                    <a href="#" className="nav-link active">Active</a>
                    <a href="#" className="nav-link">Link</a>
                    <a href="#" className="nav-link">Link</a>
                    <span className="nav-link disabled">Disabled</span>
                </div>

                <div className="grid-container">
                    <div className="row">
                        <div className="col-6">
                            <div className="grid-item">First col</div>
                        </div>
                        <div className="col-6">
                            <div className="grid-item">Second col</div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-4">
                            <div className="grid-item">col</div>
                        </div>
                        <div className="col-4">
                            <div className="grid-item">col</div>
                        </div>
                        <div className="col-4">
                            <div className="grid-item">col</div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-3">
                            <div className="grid-item">col</div>
                        </div>
                        <div className="col-3">
                            <div className="grid-item">col</div>
                        </div>
                        <div className="col-3">
                            <div className="grid-item">col</div>
                        </div>
                        <div className="col-3">
                            <div className="grid-item">col</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-section">
                <div className="container">
                    <h2 className="footer-text">Created by ABC!</h2>
                </div>
            </div>
        </div>
    );
}

export default Ex1;