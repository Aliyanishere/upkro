import { React, useContext } from 'react'
import '../css/style.css';
import logo from '../images/logo2.png';
import bee from '../images/toughbee.png';
import fighter from '../images/fighter.png';
import boxes from '../images/boxes.png';
import decore from '../images/decore.png';
import honeybee from "../images/honeybee.png";
import { Link } from 'react-router-dom';
import test1 from '../images/Testmonials (1).jpg'
import test2 from '../images/Testmonials (2).jpg'
import test3 from '../images/Testmonials (3).jpg'
import client1 from '../images/Client (1).png'
import client2 from '../images/Client (2).png'
import client3 from '../images/Client (3).png'
import client4 from '../images/Client (4).png'
import client5 from '../images/Client (5).png'
import client6 from '../images/Client (6).png'
import { AccordionContext, useAccordionButton, Accordion, Card } from 'react-bootstrap'

function Web() {

    function ContextAwareToggle({ children, eventKey, callback }) {


        const { activeEventKey } = useContext(AccordionContext);

        const decoratedOnClick = useAccordionButton(
            eventKey,
            () => callback && callback(eventKey),
        );

        const isCurrentEventKey = activeEventKey === eventKey;

        return (
            <button
                type="button"
                onClick={decoratedOnClick}
                className="acc-toggler"
                style={{ backgroundColor: "transparent", border: "none" }}
            >
                {isCurrentEventKey ? <i class="fas fa-minus" style={{ margin: "5px", color: "rgb(255, 212, 0)" }}></i> : <i class="fas fa-plus" style={{ margin: "5px", color: "rgb(255, 212, 0)" }}></i>}
            </button>
        );
    }
    return (
        <div className="App">

            {/* nav section */}
            <nav className="navbar d-flex navbar-expand-lg navbar-dark">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="" />
                    </a>
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

            {/* main section */}
            <section className="main">
                <div className="d-flex align-items-center flex-column justify-content-center child px-3 pt-4">
                    <h1 className="fs-2 fw-600" style={{ color: "rgb(255,212,0)" }}>Hive Alpha</h1>
                    <h2 className="fs-2 fw-600 text-center">Market Generation Event</h2>
                    <div className="row mx-0 justify-content-center">
                        <p className="col-lg-5 col-12 text-center fw-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                            Our Market Generation Event (M.G.E.) contracts have been used by many teams to launch dozens of tokens. Its
                            the most fair way to create a market with permentently
                        </p>
                    </div>
                    <div className="d-flex align-items-center  flex-wrap justify-content-center pro-parrent mx-3 p-2">
                        <div className="d-flex flex-column align-items-center">
                            <div className="progress">
                                <span className="title timer" data-from="0" data-to="85" data-speed="1800" style={{ color: "rgb(255,212,0)" }}>4</span>
                                <div className="overlay"></div>
                                <div className="left"></div>
                                <div className="right"></div>
                            </div>
                            <span className="fs-7" style={{ marginTop: "-10px", color: "rgb(255,212,0)", fontWeight: "bold" }}>Days</span>
                        </div>
                        <div className="d-flex flex-column align-items-center">
                            <div className="progress">
                                <span className="title timer" data-from="0" data-to="85" data-speed="1800" style={{ color: "rgb(255,212,0)" }}>07</span>
                                <div className="overlay"></div>
                                <div className="left"></div>
                                <div className="right"></div>
                            </div>
                            <span className="fs-7" style={{ marginTop: "-10px", color: "rgb(255,212,0)", fontWeight: "bold" }}>Hours</span>
                        </div>
                        <div className="d-flex flex-column align-items-center">
                            <div className="progress">
                                <span className="title timer" data-from="0" data-to="85" data-speed="1800" style={{ color: "rgb(255,212,0)" }}>41</span>
                                <div className="overlay"></div>
                                <div className="left"></div>
                                <div className="right"></div>
                            </div>
                            <span className="fs-7" style={{ marginTop: "-10px", color: "rgb(255,212,0)", fontWeight: "bold" }}>Min</span>
                        </div>
                        <div className="d-flex flex-column align-items-center">
                            <div className="progress">
                                <span className="title timer" data-from="0" data-to="85" data-speed="1800" style={{ color: "rgb(255,212,0)" }}>53</span>
                                <div className="overlay"></div>
                                <div className="left"></div>
                                <div className="right"></div>
                            </div>
                            <span className="fs-7" style={{ marginTop: "-10px", color: "rgb(255,212,0)", fontWeight: "bold" }}>Sec</span>
                        </div>
                    </div>
                    <button className="btn btn-primary fs-8 fw-500 px-5 mt-4" style={{ backgroundColor: "rgb(255,212,0)", color: "black" }}>ENTER APP</button>

                </div>
            </section>

            <section className="d-flex align-items-center" style={{ minHeight: "100vh" }}>
                <div className="container">
                    <div className="row mx-0">
                        <div className="col-lg-6 co-12 d-flex flex-column align-items-start" style={{ paddingTop: "105px" }}>
                            <span style={{ color: "rgb(255,212,0)" }}>About Us</span>
                            <span className="fs-2 fw-600" style={{ color: "rgb(255,212,0)" }}>Firmly Established Team</span>
                            <p className="fs-7 fw-300 pt-1">
                                The ROOT team has been releasing innovative defi products for almost 2 years, if people say its impossible,
                                we'll give it a try. We take an entirely unique approach to mechanic design and ecosystem expansion while
                                always trying to look at markets from new perspectives. We have two main classes of tokens, UpTokens (ROOTS)
                                and upOnlyTokens(FLOWERS).
                            </p>
                            <button className="btn btn-primary fs-8 fw-500 px-5 mt-4" style={{ backgroundColor: "rgb(255,212,0)", color: "black" }}>More</button>
                        </div>
                        <div className="col-lg-6 col-12">
                            <img src={bee} className="w-100" alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <div className='tech_bg d-flex align-items-center py-5'>
                <div className="container px-4 mb-5 d-flex align-items-center">
                    <div className="card w-100  p-5 pb-0 d-flex flex-column align-items-center bg-transparent">
                        <span style={{ color: "rgb(255,212,0)" }}>TECHNOLOGY</span>
                        <span className="fs-2 fw-600" style={{ color: "rgb(255,212,0)" }}>UpToken Tech</span>
                        <div className="row mx-0 justify-content-center">
                            <p className="fs-7 fw-300 pt-1 text-center col-lg-11 col-12">
                                Using our ERC31337 technology, we first create a price floor by building our token within certain
                                parameters. We are then able to extract all value from beneath the price floor that would otherwise be
                                trapped. Once the value below a price floor has served its purpose to guarantee the price, it's essentially
                                stuck value, we are able to recover it and put it to use.
                            </p>
                        </div>
                        <div className="row mx-0 justify-content-center w-100 ">
                            <div className="col-lg-6 col-12 card-2 d-flex p-4  justify-content-center align-items-center">
                                <button className="btn btn-primary fs-8 fw-500 px-5 mt-4">ENTER APP</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="decore">
                <img src={decore} alt="" />
            </div>

            <section className="d-flex align-items-center" style={{ minHeight: "100vh" }}>
                <div className="container">
                    <div className="row align-items-center mx-0">
                        <div className="col-lg-6 co-12 d-flex flex-column align-items-start">
                            <span style={{ color: "rgb(255,212,0)" }}>New Features</span>
                            <span className="fs-2 fw-600" style={{ color: "rgb(255,212,0)" }}>Packed With New Innovations</span>
                            <p className="fs-7 fw-300 pt-1">
                                UpCRO will launch with multiple new features including a drip fault, marketing vault, and some unique new
                                functions never before seen in Defi. With the addition of hte drip vault we will have a multi-layered double
                                auto-compounding staking system with predictable APY. O very high apy at launch to encourage buy-side market
                                activity A percent of all trade fees as well as 11% of the value raised will be given directly to the
                                Marketing Vault with spends happening in a verifiable way. We've also included some cool new functions
                                including the ability to convert any percent of price impact directly into liquidity without affecting the
                                user slippage.
                            </p>
                            <button className="btn btn-primary fs-8 fw-500 px-5 mt-4" style={{ backgroundColor: "rgb(255,212,0)", color: "black" }}>More</button>
                        </div>
                        <div className="col-lg-6 col-12">
                            <img src={honeybee} className="w-100" alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <div className="container px-4 mb-4" style={{ minHeight: "80vh" }}>
                <div className="card w-100  py-5 pb-0 d-flex flex-column align-items-center">
                    <img src={boxes} className="boxes" alt="" />
                    <span style={{ color: "rgb(255,212,0)" }}>Our Team</span>
                    <span className="fs-2 fw-600" style={{ color: "rgb(255,212,0)", display: "flex", alignItems: "center", justifyContent: "center" }}>Anon with Trusted Reputation</span>
                    <div className='tem_mem mt-4'>
                        <img src={test1} alt='' />
                        <img src={test2} alt='' />
                        <img src={test3} alt='' />
                    </div>
                </div>
            </div>

            <section className="d-flex align-items-center justify-content-center" style={{ minHeight: "40vh" }}>
                <div className="container d-flex flex-column align-items-center">
                    <span className="fs-2 fw-600" style={{ color: "rgb(255,212,0)" }}>As Seen On</span>
                    <div className='tem_mem mt-4' style={{ width: "100%" }}>
                        <img className='as_seen' src={client1} alt='' />
                        <img className='as_seen' src={client2} alt='' />
                        <img className='as_seen' src={client3} alt='' />
                        <img className='as_seen' src={client4} alt='' />
                        <img className='as_seen' src={client5} alt='' />
                        <img className='as_seen' src={client6} alt='' />
                    </div>



                    {/* <div className="row align-items-stretch mx-0 mt-3 w-100 ">
                        <div className="col-lg-4 col-12 p-3">
                            <div className="card w-100 p-0 m-0" style={{ height: "100%" }}>
                                <img src={a1} className="w-100" alt="" />
                                <div className="d-flex flex-column p-3">
                                    <span className="fw-500 fs-7" style={{ color: "rgb(255,212,0)" }}>UpCRO to launch on Empire Dex</span>
                                    <div className="d-flex pt-2 align-items-center justify-content-between">
                                        <span className="fs-8 fw-100">02.02.2022</span>
                                        <a href="" className="fs-9 fw-500" style={{ color: "rgb(255,212,0)" }}>Read more..</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12 p-3">
                            <div className="card w-100 p-0 m-0">
                                <img src={a2} className="w-100" alt="" />
                                <div className="d-flex flex-column p-3">
                                    <span className="fw-500 fs-7 pb-4" style={{ color: "rgb(255,212,0)" }}>ROOT Bridge User guide </span>
                                    <div className="d-flex pt-2 align-items-center  justify-content-between">
                                        <span className="fs-8 fw-100">02.00.2022</span>
                                        <a href="" className="fs-9 fw-500" style={{ color: "rgb(255,212,0)" }}>Read more..</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12 p-3">
                            <div className="card w-100 p-0 m-0" style={{ height: "100%" }}>
                                <img src={a3} className="w-100" alt="" />
                                <div className="d-flex flex-column p-3">
                                    <span className="fw-500 fs-7" style={{ color: "rgb(255,212,0)" }}>xToken Staking and the Drip Vault</span>
                                    <div className="d-flex pt-2 align-items-center justify-content-between">
                                        <span className="fs-8 fw-100">02.02.2022</span>
                                        <a href="" className="fs-9 fw-500" style={{ color: "rgb(255,212,0)" }}>Read more..</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </section>

            <div className="container px-4 mb-5" style={{ minHeight: "100vh" }}>
                <div className="card w-100 card-bg py-5 pb-0 d-flex flex-column align-items-center">
                    <img src={boxes} className="boxes" alt="" />
                    <span style={{ color: "rgb(255,212,0)" }}>How we move</span>
                    <span className="fs-2 fw-600" style={{ color: "rgb(255,212,0)" }}>Roadmap</span>
                    <div className="row mx-0 mt-5 justify-content-center w-100">
                        <div className="col-lg-7 col-12 d-flex align-items-center mt-5">
                            <div className="diomand">
                                <div>
                                    <span>01</span>
                                </div>
                            </div>
                            <div className="d-flex flex-column ps-5">
                                <span className=" fw-500" style={{ color: "rgb(255,212,0)" }}>Activate Social channels and begin MGE</span>
                                <p className="fs-8 fw-200 pt-2">All social channels have been activated. The landing page and app page are live,
                                    and the MGE has been activated.</p>
                            </div>
                        </div>
                        <div className="col-lg-7 col-12 d-flex align-items-center mt-5">
                            <div className="diomand">
                                <div>
                                    <span>02</span>
                                </div>
                            </div>
                            <div className="d-flex flex-column ps-5">
                                <span className=" fw-500" style={{ color: "rgb(255,212,0)" }}>Upgrade ERC31337 Contracts and add more features</span>
                                <p className="fs-8 fw-200 pt-2">Full rewrite of the ERC31337 standard designed for EmpireDex and RootDex is
                                    complete. Two new vaults have been added, a Marketing vault and a Drip vault. Lastly a brand new liquidity
                                    building function has been added that will be activated later.</p>
                            </div>
                        </div>
                        <div className="col-lg-7 col-12 d-flex align-items-center mt-5">
                            <div className="diomand">
                                <div>
                                    <span>03</span>
                                </div>
                            </div>
                            <div className="d-flex flex-column ps-5">
                                <span className=" fw-500" style={{ color: "rgb(255,212,0)" }}>Open MGE for BSC users to join with BNB</span>
                                <p className="fs-8 fw-200 pt-2">If you contribute this way, make sure your BSC wallet is also CRO compatible. We
                                    recommend using MetaMask if you plan on contributing this way. Once the MGE ends, we lock the liquidity
                                    then launch the token. Everyone who participates in the MGE gets the best possible price.</p>
                            </div>
                        </div>
                        <div className="col-lg-7 col-12 d-flex align-items-center mt-5">
                            <div className="diomand">
                                <div>
                                    <span>04</span>
                                </div>
                            </div>
                            <div className="d-flex flex-column ps-5">
                                <span className=" fw-500" style={{ color: "rgb(255,212,0)" }}>Token launch with over 10k% staking APY</span>
                                <p className="fs-8 fw-200 pt-2">Right when the MGE finishes and the market goes live there will be no
                                    circulating tokens so if users want some of the 10k% APY staking rewards they will have to buy from the
                                    market. This should create the perfect launch conditions</p>
                            </div>
                        </div>
                        <div className="col-lg-7 col-12 d-flex align-items-center mt-5">
                            <div className="diomand">
                                <div>
                                    <span>05</span>
                                </div>
                            </div>
                            <div className="d-flex flex-column ps-5">
                                <span className=" fw-500" style={{ color: "rgb(255,212,0)" }}>Activate Marketing Vault</span>
                                <p className="fs-8 fw-200 pt-2">The marketing vault will receive 11.11% of the MGE funds and 20% of all
                                    collected trade fees. After initial volitility settles and the APY gets down to a reasonable level we will
                                    begin our post launch marketing efforts.</p>
                            </div>
                        </div>
                        <div className="col-lg-7 col-12 d-flex align-items-center mt-5">
                            <div className="diomand">
                                <div>
                                    <span>06</span>
                                </div>
                            </div>
                            <div className="d-flex flex-column ps-5">
                                <span className=" fw-500" style={{ color: "rgb(255,212,0)" }}>Activate New Buy-Back Vault</span>
                                <p className="fs-8 fw-200 pt-2">Our newest vault, still in development, will have an auto-buy-back feature with
                                    customizable paramiters. We will be working closely with our community to choose the vaults buy-back
                                    strategies.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row mx-0 justify-content-center w-100 mt-4 ">
                    </div>
                </div>
            </div>

            <div className="decore">
                <img src={decore} alt="" />
            </div>

            <section className="d-flex align-items-center my-5">
                <div className="">
                    <div className="row mx-0">
                        <div className="col-lg-6 py-4 co-12 d-flex align-items-center  justify-content-center ">
                            <div className="row mx-0 justify-content-center">
                                <div className="d-flex flex-column align-items-start col-8">
                                    <span className="fs-2 fw-600" style={{ color: "rgb(255,212,0)" }}>How to buy</span>
                                    <p className="fs-7">
                                        If you've invested into any of our projects in the past, you know that our MGE and the ERC-31337
                                        "elite"
                                        wrapper are the secret sauces that set us apart. It's what separates us from any of the overhyped
                                        "RFI/Safemoon/EverRise"-type reflection tokens that have tried to imitate us since Summer 2020.
                                    </p>
                                    <button className="btn btn-dark fs-8 px-4" style={{ backgroundColor: "rgb(255,212,0)", color: "white", border: "none" }}>CHECK OUR ARTICLE
                                        HERE</button>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-6 col-12 px-0">
                            <img src={fighter} className="w-100" alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <span className="d-flex justify-content-center align-items-center fs-2 fw-600" style={{ color: "rgb(255,212,0)" }}>FAQ</span>
            <section className="d-flex col-12 col-lg-12 justify-content-center align-items-center my-5">
                <Accordion defaultActiveKey="0">
                    <Card className="m-0 mb-3 acc-card">
                        <Card.Header className="py-3 d-flex align-items-center">
                            <ContextAwareToggle eventKey="0">+</ContextAwareToggle>
                            <div className="mb-0">Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's?</div>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body className=""> <span className="ps-lg-5 ps-0" >-Connect your wallet and buy BUSD tokens</span>  </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card className="m-0 mb-3 acc-card">
                        <Card.Header className="py-3 d-flex align-items-center">
                            <ContextAwareToggle eventKey="1">+</ContextAwareToggle>
                            <div className="mb-0">What long established fact that a reader will be distracted by the readable content?</div>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body className=""> <span className="ps-lg-5 ps-0" >-While the sale is live,commit your BUSD tokens to buy the REAPER(YRP) tokens.</span>  </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card className="m-0 mb-3 acc-card">
                        <Card.Header className="py-3 d-flex align-items-center">
                            <ContextAwareToggle eventKey="2">+</ContextAwareToggle>
                            <div className="mb-0">What to do after the sale?</div>
                        </Card.Header>
                        <Accordion.Collapse eventKey="2">
                            <Card.Body className="">
                                <div className="d-flex flex-column w-100 ps-lg-5 ps-0">
                                    <span  >-Immediately after sale:</span>
                                    <span>You may claim your refund and 25% of your REAPER(YRP) tokens</span>
                                    <span> 30 days after sale: You may claim another 25% of your REAPER(YRP) tokens</span>
                                    <span> 60 days after sale: You may claim another 25% of your REAPER(YRP) tokens</span>
                                    <span> 90 days after sale: You may claim the final 25% of your REAPER(YRP) tokens</span>
                                </div>

                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card className="m-0 mb-3 acc-card">
                        <Card.Header className="py-3 d-flex align-items-center">
                            <ContextAwareToggle eventKey="3">+</ContextAwareToggle>
                            <div className="mb-0">What is the 'overflow' sale method?</div>
                        </Card.Header>
                        <Accordion.Collapse eventKey="3">
                            <Card.Body className=""> <span className="ps-lg-5 ps-0" >-many web sites still in their infancy. Various versions have evolved over, sometimes by accident.</span>  </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card className="m-0 mb-3 acc-card">
                        <Card.Header className="py-3 d-flex align-items-center">
                            <ContextAwareToggle eventKey="4">+</ContextAwareToggle>
                            <div className="mb-0">Various versions have evolved over the years, sometimes by accident?</div>
                        </Card.Header>
                        <Accordion.Collapse eventKey="4">
                            <Card.Body className=""> <span className="ps-lg-5 ps-0" >
                                -dable content of a page when looking at its layout. The point of using Lorem Ipsum is.</span>  </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </section>

            <section >
                <div className="d-flex flex-column align-items-center">
                    <h1 className="fs-3 fw-600" style={{ color: "rgb(255,212,0)" }}>Social Media</h1>
                    <div className="d-flex flex-wrap align-items-center justify-content-center mt-4">
                        <a href="" className='rot mt-4'>
                            <i className="fab fa-twitter fs-4 mx-2"></i>
                        </a>
                        <a href="" className='rot mt-4'>
                            <i className="fas fa-paper-plane fs-4 mx-2"></i>
                        </a>
                        <a href="" className='rot mt-4'>
                            <i className="fab fa-discord fs-4 mx-2"></i>
                        </a>
                    </div>
                    <span className="fs-8 py-4 mt-4 text-faded" style={{ color: "rgb(255,212,0)", fontWeight: "bold" }}>2022, All Rights Reserved.</span>
                </div>
            </section>

        </div>
    );
}

export default Web;
