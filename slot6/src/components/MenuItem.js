import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
function MenuItem({ label, image, title, price, oldPrice }) {
    return (
   
                    <div className="col-lg-12 mb-5">
                        <div className="container">
                            <div className='row'>
                                <h2>Our Menu</h2>


                                <div className="col-md-3">
                                    <div className="card position-relative">
                                      
                                        <div
                                            className="position-absolute top-0 start-0 bg-warning text-dark px-2 py-1"
                                            style={{ fontWeight: "bold", fontSize: "12px", width: "100px", textAlign: "center" }}
                                        >
                                            SALE
                                        </div>
                                        <img src="../menu1.jpg" className="card-img-top" alt="Margherita Pizza" />
                                        <div className="card-body text-center">
                                            <h5 className="card-title">Margherita Pizza</h5>
                                            <p >
                                                <span className="text-muted text-decoration-line-through me-2" style={{ float: "left" }}>$40.00</span>
                                                <span className="text-warning fw-bold" style={{ float: "left" }}>$24.00</span>
                                            </p>
                                            <a href="#" className="btn btn-dark w-100">
                                                Buy
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-3" >
                                    <div className="card position-relative">

                                        <img src="../menu2.jpg" className="card-img-top" alt="Margherita Pizza" />
                                        <div className="card-body text-center">
                                            <h5 className="card-title">Mushroom Pizza</h5>
                                            <p>
                                                <span className="text-muted " style={{ float: "left" }}>$25.00</span>

                                            </p>
                                            <a href="#" className="btn btn-dark w-100">
                                                Buy
                                            </a>
                                        </div>
                                    </div>
                                </div>

                            
                                <div className="col-md-3">
                                    <div className="card position-relative">
                                     
                                        <div
                                            className="position-absolute top-0 start-0 bg-warning text-dark px-2 py-1"
                                            style={{ fontWeight: "bold", fontSize: "12px", width: "100px", textAlign: "center" }}
                                        >
                                            New
                                        </div>
                                        <img src="../menu3.jpg" className="card-img-top" alt="Margherita Pizza" />
                                        <div className="card-body text-center">
                                            <h5 className="card-title">HaWaiian Pizza</h5>
                                            <p>
                                                <span className="text-muted " style={{ float: "left" }}>$30.00</span>

                                            </p>
                                            <a href="#" className="btn btn-dark w-100">
                                                Buy
                                            </a>
                                        </div>
                                    </div>
                                </div>

                           
                                <div className="col-md-3">
                                    <div className="card position-relative">
                                    
                                        <div
                                            className="position-absolute top-0 start-0 bg-warning text-dark px-2 py-1"
                                            style={{ fontWeight: "bold", fontSize: "12px", width: "100px", textAlign: "center" }}
                                        >
                                            SALE
                                        </div>
                                        <img src="../menu4.jpg" className="card-img-top" alt="Margherita Pizza" />
                                        <div className="card-body text-center">
                                            <h5 className="card-title">Pesto Pizza</h5>
                                            <p >
                                                <span className="text-muted text-decoration-line-through me-2" style={{ float: "left" }}>$59.00</span>
                                                <span className="text-warning fw-bold" style={{ float: "left" }}>$30.00</span>
                                            </p>
                                            <a href="#" className="btn btn-dark w-100">
                                                Buy
                                            </a>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
    );
}

export default MenuItem;
