import React from 'react';
import '../css/style.css';
import logo from '../images/logo2.png';
import { Link } from 'react-router-dom';
import mint from '../images/mint.jpg';

const Minting = () => {
    return (
        <div>
            <nav className="navbar d-flex navbar-expand-lg navbar-dark">
                <div className="container">
                    <Link to="/">
                        <a className="navbar-brand" href="#">
                            <img src={logo} alt="" />
                        </a>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                            <Link to="/whitepaper">
                                <li className="nav-item"><a className="nav-link " aria-current="page" href="#">WHITE PAPER</a></li>
                            </Link>
                            <Link to="/minting">
                                <li className="nav-item"><a className="nav-link " aria-current="page" href="#">MINTING PAGE</a></li>
                            </Link>
                        </ul>
                        {/* <form className="d-flex"> */}
                        {/* <button className="btn btn-primary fs-8 fw-500 px-4">ENTER APP</button> */}
                        {/* </form> */}
                    </div>
                </div>
            </nav>

            <section className="d-flex align-items-center" style={{ minHeight: "100vh" }}>
                <div className="container">
                    <div className="row align-items-center mx-0">
                        <div className="col-lg-6 co-12 d-flex flex-column align-items-start">
                            {/* <span style={{ color: "rgb(255,212,0)" }}>New Features</span> */}
                            <span className="fs-1 fw-600" style={{ color: "rgb(255,212,0)" }}>MINT NOW</span>
                            <input type="number" placeholder="1" style={{width: "100%", height: "50px", color: "black", fontWeight: "bold", padding: "3px"}}/>
                            {/* <p className="fs-7 fw-300 pt-1">
                                UpCRO will launch with multiple new features including a drip fault, marketing vault, and some unique new
                                functions never before seen in Defi. With the addition of hte drip vault we will have a multi-layered double
                                auto-compounding staking system with predictable APY. O very high apy at launch to encourage buy-side market
                                activity A percent of all trade fees as well as 11% of the value raised will be given directly to the
                                Marketing Vault with spends happening in a verifiable way. We've also included some cool new functions
                                including the ability to convert any percent of price impact directly into liquidity without affecting the
                                user slippage.
                            </p> */}
                            <button className="btn btn-primary fs-6 fw-500 px-5 mt-4" style={{ backgroundColor: "rgb(255,212,0)", color: "black" }}>Connect</button>
                        </div>
                        <div className="col-lg-6 col-12">
                            <img src={mint} className="w-100" alt="" style={{borderRadius: "10px"}}/>
                        </div>
                    </div>
                </div>
            </section>

            <section >
                <div className="d-flex flex-column align-items-center">
                    <h1 className="fs-3 fw-600" style={{ color: "rgb(255,212,0)" }}>Social Media</h1>
                    <div className="d-flex flex-wrap align-items-center justify-content-center mt-4">
                        <a href="" className='rot mt-4'>
                            <i className="fab fa-twitter fs-4 mx-2"></i>
                        </a>
                        <a href="" className='rot mt-4'>
                            <i class="fas fa-paper-plane fs-4 mx-2"></i>
                        </a>
                        <a href="" className='rot mt-4'>
                            <i class="fab fa-discord fs-4 mx-2"></i>
                        </a>
                    </div>
                    <span className="fs-8 py-4 mt-4 text-faded" style={{ color: "rgb(255,212,0)", fontWeight: "bold" }}>2022, All Rights Reserved.</span>
                </div>
            </section>

        </div>
    );
};

export default Minting;
