import React from 'react';
import mainimg from '../../images/mainimage.jpg';
import WordksImage from '../../images/works.jpg'
import image1 from '../../images/review1.jpg';
import image2 from '../../images/review2.jpg'
class Home extends React.Component {

    render() {
        return (
            <div>
                <header>
                    <div class="app-navbar">
                        <div class="app-navbar-container">
                            <div class="app-navbar-logo">
                                <i class="fas fa-car-side logo-icon"></i>
                                <h1>Bali Car Service</h1></div>


                            <ul class="nav justify-content-end">
                                <li class="nav-item app-nav-item">
                                    <a class="nav-link text-white ">Home</a>
                                </li>
                                <li class="nav-item  app-nav-item">
                                    <a class="nav-link text-white">Book a Car</a>
                                </li>
                                <li class="nav-item app-nav-item">
                                    <a class="nav-link text-white">Our Cars</a>
                                </li>
                                <li class="nav-item app-nav-item">
                                    <a class="nav-link text-white">About</a>
                                </li>
                                <li class="nav-item app-nav-item">
                                    <a class="nav-link text-white">Contact Us</a>
                                </li>
                                <li class="nav-item app-nav-item">
                                    <a class="nav-link text-white">Privacy</a>
                                </li>
                            </ul>





                        </div>



                    </div>


                    <div class="header-content-container">
                        <div class="header-content">
                            <h1 class="header-title animate-pop-in">Your awesome landing page</h1>
                            <h3 class="header-subtitle animate-pop-in">A Useful start for your projects</h3>
                            <button class="header-button btn btn-lg btn-success animate-pop-in">
                                Book a car <i class="fas fa-car-side logo-icon"></i>
                            </button>
                        </div>
                    </div>


                </header>



                <section className="section-steps">
                    <div>
                        <h2 className="app-section-heading">How it works &mdash; Simple as 1, 2, 3</h2>
                    </div>
                    <div className="section-steps-content">
                        <div>
                            <img className="img-works" src={WordksImage} alt="Works Image" />
                        </div>
                        <div className="section-steps-right">
                            <div className="work-steps">
                                <div>1</div>
                                <p>Choose the subscription plan that best fits your needs and sign up today</p>
                            </div>
                            <div className="work-steps">
                                <div>2</div>
                                <p>Choose the subscription plan that best fits your needs and sign up today</p>
                            </div>
                            <div className="work-steps">
                                <div>3</div>
                                <p>Choose the subscription plan that best fits your needs and sign up today</p>
                            </div>
                            <div className="text-center">
                                <button className="btn-lg btn-warning"><span style={{ fontSize: "larger" }}>Browse cars</span></button>
                            </div>

                        </div>
                    </div>
                </section>


                <section className="section-steps">
                    <div>
                        <h2 className="app-section-heading">We make people genuinely happy</h2>
                    </div>
                    <div className="section-stories">

                        <div className="section-story">
                            <div className="story-image">

                                <img src={image2} />
                                <figcaption className="story-image-caption">Mary <br />Smith</figcaption>
                            </div>
                            <div className="story-content">
                                <h3 className="heading-story">I had a best week with my family</h3>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</p>
                            </div>


                        </div>

                        <div className="section-story">
                            <div className="story-image">

                                <img src={image1} alt="reviewer1" />
                                <figcaption className="story-image-caption">Mary <br />Smith</figcaption>
                            </div>
                            <div className="story-content">
                                <h3 className="heading-story">I had a best week with my family</h3>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</p>
                            </div>

                        </div>

                    </div>
                </section>



                {/* <img src={mainimg} style={{ width: "100%" }} alt="Home" />
                <br /><br />
                <h1>EXPERIENCE A GREAT CAR HIRE IN BALI</h1>
                <hr style={{ backgroundColor: "#8e8e8e", height: "2px", align: "center", width: "250px" }} />
                <p style={{ textAlign: "center", marginLeft: "10%", marginRight: "10%" }}>
                    <span>
                        We at Bali Car Hire provides a range of quality rental cars available from compact city cars, medium family cars, mini-jeeps to 12/20 seats mini-buses. All vehicles are in good condition, well maintained and safe. Exploring Bali with the convenience of stopping when you want to explore the villages, mountains and stunning beaches is a great way to discover the beauty of Bali.</span></p><br />
                <p style={{ textAlign: "center", marginLeft: "10%", marginRight: "10%" }}>
                    <span>
                        Our private drivers can be considered as a friend to assist you in translation and some contributes with some notable facts about some of points of interest and the tourist destinations.
                    </span>
                </p> */}



                <footer>

                    <section class="footer-content">
                        <div class="footer-conten-main">
                            <div class="footer-nav">


                                <ul class="nav justify-content">
                                    <li class="nav-item ">
                                        <a class="nav-link text-white ">Home</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link text-white">Book a Car</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link text-white">Our Cars</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link text-white">About</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link text-white">Contact Us</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link text-white" >Privacy</a>
                                    </li>
                                </ul>

                            </div>
                            <div class="footer-social">

                                <ul class="nav justify-content-end">
                                    <li class="nav-item ">
                                        <a class="nav-link text-white " >Home</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link text-white" >Book a Car</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link text-white" >Our Cars</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link text-white" >About</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link text-white" >Contact Us</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link text-white" >Privacy</a>
                                    </li>
                                </ul>
                            </div>
                        </div>





                        <div><p>Copyright &copy; 2019 by Nc Dev Tech. All Rights reserved</p></div>

                    </section>
                </footer>

            </div>
        )


    }
}

export default Home;