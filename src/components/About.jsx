import React from 'react'

const About = () => {
    return (
        <>
            <title>Wedding Matrimony</title>
            {/*== META TAGS ==*/}
            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1, maximum-scale=1"
            />
            <meta name="theme-color" content="#f6af04" />
            <meta name="description" content="" />
            <meta name="keyword" content="" />
            {/*== FAV ICON(BROWSER TAB ICON) ==*/}
            <link rel="shortcut icon" href="images/fav.ico" type="image/x-icon" />
            {/*== CSS FILES ==*/}
            <link rel="stylesheet" href="css/bootstrap.css" />
            <link rel="stylesheet" href="css/font-awesome.min.css" />
            <link rel="stylesheet" href="css/animate.min.css" />
            <link rel="stylesheet" href="css/style.css" />
            {/* HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries */}
            {/* WARNING: Respond.js doesn't work if you view the page via file:// */}
            {/*[if lt IE 9]>


<![endif]*/}
            {/* PRELOADER */}
            <div id="preloader">
                <div className="plod">
                    <span className="lod1">
                        <img src="images/loder/1.png" alt="" loading="lazy" />
                    </span>
                    <span className="lod2">
                        <img src="images/loder/2.png" alt="" loading="lazy" />
                    </span>
                    <span className="lod3">
                        <img src="images/loder/3.png" alt="" loading="lazy" />
                    </span>
                </div>
            </div>
            <div className="pop-bg" />
            {/* END PRELOADER */}
            {/* SEARCH */}
            <div className="pop-search">
                <span className="ser-clo">+</span>
                <div className="inn">
                    <form>
                        <input type="text" placeholder="Search here..." />
                    </form>
                    <div className="rel-sear">
                        <h4>Top searches:</h4>
                        <a href="all-profiles.html">Browse all profiles</a>
                        <a href="all-profiles.html">Mens profile</a>
                        <a href="all-profiles.html">Female profile</a>
                        <a href="all-profiles.html">New profiles</a>
                    </div>
                </div>
            </div>
            {/* END PRELOADER */}
            {/* HEADER & MENU */}
            <div className="head-top">
                <div className="container">
                    <div className="row">
                        <div className="lhs">
                            <ul>
                                <li>
                                    <a href="#!" className="ser-open">
                                        <i className="fa fa-search" aria-hidden="true" />
                                    </a>
                                </li>
                                <li>
                                    <a href="about.html">About</a>
                                </li>
                                <li>
                                    <a href="faq.html">FAQ</a>
                                </li>
                                <li>
                                    <a href="contact.html">Contact</a>
                                </li>
                            </ul>
                        </div>
                        <div className="rhs">
                            <ul>
                                <li>
                                    <a href="tel:+9704462944">
                                        <i className="fa fa-phone" aria-hidden="true" />
                                        &nbsp;+01 5312 5312
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto:info@example.com">
                                        <i className="fa fa-envelope-o" aria-hidden="true" />
                                        &nbsp; help@company.com
                                    </a>
                                </li>
                                <li>
                                    <a href="#!">
                                        <i className="fa fa-facebook" aria-hidden="true" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#!">
                                        <i className="fa fa-twitter" aria-hidden="true" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#!">
                                        <i className="fa fa-whatsapp" aria-hidden="true" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* END HEADER & MENU */}
            {/* HEADER & MENU */}
            <div className="menu-pop menu-pop1">
                <span className="menu-pop-clo">
                    <i className="fa fa-times" aria-hidden="true" />
                </span>
                <div className="inn">
                    <img
                        src="images/logo-b.png"
                        alt=""
                        loading="lazy"
                        className="logo-brand-only"
                    />
                    <p>
                        <strong>Best Wedding Matrimony</strong> lacinia viverra lectus. Fusce
                        imperdiet ullamcorper metus eu fringilla.Lorem Ipsum is simply dummy
                        text of the printing and typesetting industry.
                    </p>
                    <ul className="menu-pop-info">
                        <li>
                            <a href="#!">
                                <i className="fa fa-phone" aria-hidden="true" />
                                +92 (8800) 68 - 8960
                            </a>
                        </li>
                        <li>
                            <a href="#!">
                                <i className="fa fa-whatsapp" aria-hidden="true" />
                                +92 (8800) 68 - 8960
                            </a>
                        </li>
                        <li>
                            <a href="#!">
                                <i className="fa fa-envelope-o" aria-hidden="true" />
                                help@company.com
                            </a>
                        </li>
                        <li>
                            <a href="#!">
                                <i className="fa fa-map-marker" aria-hidden="true" />
                                3812 Lena Lane City Jackson Mississippi
                            </a>
                        </li>
                    </ul>
                    <div className="menu-pop-help">
                        <h4>Support Team</h4>
                        <div className="user-pro">
                            <img src="images/profiles/1.jpg" alt="" loading="lazy" />
                        </div>
                        <div className="user-bio">
                            <h5>Ashley emyy</h5>
                            <span>Senior personal advisor</span>
                            <a href="enquiry.html" className="btn btn-primary btn-sm">
                                Ask your doubts
                            </a>
                        </div>
                    </div>
                    <div className="menu-pop-soci">
                        <ul>
                            <li>
                                <a href="#!">
                                    <i className="fa fa-facebook" aria-hidden="true" />
                                </a>
                            </li>
                            <li>
                                <a href="#!">
                                    <i className="fa fa-twitter" aria-hidden="true" />
                                </a>
                            </li>
                            <li>
                                <a href="#!">
                                    <i className="fa fa-whatsapp" aria-hidden="true" />
                                </a>
                            </li>
                            <li>
                                <a href="#!">
                                    <i className="fa fa-linkedin" aria-hidden="true" />
                                </a>
                            </li>
                            <li>
                                <a href="#!">
                                    <i className="fa fa-youtube-play" aria-hidden="true" />
                                </a>
                            </li>
                            <li>
                                <a href="#!">
                                    <i className="fa fa-instagram" aria-hidden="true" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* END HEADER & MENU */}
            {/* HEADER & MENU */}
            <div className="menu-pop menu-pop2">
                <span className="menu-pop-clo">
                    <i className="fa fa-times" aria-hidden="true" />
                </span>
                <div className="inn">
                    <div className="menu-pop-help">
                        <h4>Support Team</h4>
                        <div className="user-pro">
                            <img src="images/profiles/1.jpg" alt="" loading="lazy" />
                        </div>
                        <div className="user-bio">
                            <h5>Ashley emyy</h5>
                            <span>Senior personal advisor</span>
                            <a href="enquiry.html" className="btn btn-primary btn-sm">
                                Ask your doubts
                            </a>
                        </div>
                    </div>
                    <div className="menu-pop-soci">
                        <ul>
                            <li>
                                <a href="#!">
                                    <i className="fa fa-facebook" aria-hidden="true" />
                                </a>
                            </li>
                            <li>
                                <a href="#!">
                                    <i className="fa fa-twitter" aria-hidden="true" />
                                </a>
                            </li>
                            <li>
                                <a href="#!">
                                    <i className="fa fa-whatsapp" aria-hidden="true" />
                                </a>
                            </li>
                            <li>
                                <a href="#!">
                                    <i className="fa fa-linkedin" aria-hidden="true" />
                                </a>
                            </li>
                            <li>
                                <a href="#!">
                                    <i className="fa fa-youtube-play" aria-hidden="true" />
                                </a>
                            </li>
                            <li>
                                <a href="#!">
                                    <i className="fa fa-instagram" aria-hidden="true" />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="late-news">
                        <h4>Latest news</h4>
                        <ul>
                            <li>
                                <div className="rel-pro-img">
                                    <img src="images/couples/1.jpg" alt="" loading="lazy" />
                                </div>
                                <div className="rel-pro-con">
                                    <h5>Long established fact that a reader distracted</h5>
                                    <span className="ic-date">12 Dec 2023</span>
                                </div>
                                <a href="blog-detail.html" className="fclick" />
                            </li>
                            <li>
                                <div className="rel-pro-img">
                                    <img src="images/couples/3.jpg" alt="" loading="lazy" />
                                </div>
                                <div className="rel-pro-con">
                                    <h5>Long established fact that a reader distracted</h5>
                                    <span className="ic-date">12 Dec 2023</span>
                                </div>
                                <a href="blog-detail.html" className="fclick" />
                            </li>
                            <li>
                                <div className="rel-pro-img">
                                    <img src="images/couples/4.jpg" alt="" loading="lazy" />
                                </div>
                                <div className="rel-pro-con">
                                    <h5>Long established fact that a reader distracted</h5>
                                    <span className="ic-date">12 Dec 2023</span>
                                </div>
                                <a href="blog-detail.html" className="fclick" />
                            </li>
                        </ul>
                    </div>
                    {/* HELP BOX */}
                    <div className="prof-rhs-help">
                        <div className="inn">
                            <h3>Tell us your Needs</h3>
                            <p>Tell us what kind of service you are looking for.</p>
                            <a href="enquiry.html">Register for free</a>
                        </div>
                    </div>
                    {/* END HELP BOX */}
                </div>
            </div>
            {/* END HEADER & MENU */}
            {/* HEADER & MENU */}
            <div className="hom-top">
                <div className="container">
                    <div className="row">
                        <div className="hom-nav">
                            {/* LOGO */}
                            <div className="logo">
                                <span className="menu desk-menu">
                                    <i />
                                    <i />
                                    <i />
                                </span>
                                <a href="index.html" className="logo-brand">
                                    <img
                                        src="images/logo-b.png"
                                        alt=""
                                        loading="lazy"
                                        className="ic-logo"
                                    />
                                </a>
                            </div>
                            {/* TOP MENU */}
                            <div className="bl">
                                <ul>
                                    <li className="smenu-pare">
                                        <span className="smenu">Explore</span>
                                        <div className="smenu-open smenu-box">
                                            <div className="container">
                                                <div className="row">
                                                    <h4 className="tit">Explore category</h4>
                                                    <ul>
                                                        <li>
                                                            <div className="menu-box menu-box-2">
                                                                <h5>
                                                                    Browse profiles{" "}
                                                                    <span>1200+ Verified profiles</span>
                                                                </h5>
                                                                <span className="explor-cta">More details</span>
                                                                <a href="all-profiles.html" className="fclick" />
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="menu-box menu-box-1">
                                                                <h5>
                                                                    Wedding page <span>Make reservation</span>
                                                                </h5>
                                                                <span className="explor-cta">More details</span>
                                                                <a href="wedding.html" className="fclick" />
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="menu-box menu-box-3">
                                                                <h5>
                                                                    All Services<span>Lorem ipsum dummy</span>
                                                                </h5>
                                                                <span className="explor-cta">More details</span>
                                                                <a href="services.html" className="fclick" />
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="menu-box menu-box-4">
                                                                <h5>
                                                                    Join Now <span>Lorem ipsum dummy</span>
                                                                </h5>
                                                                <span className="explor-cta">More details</span>
                                                                <a href="plans.html" className="fclick" />
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="smenu-pare">
                                        <span className="smenu">All pages</span>
                                        <div className="smenu-open smenu-multi">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="multi-col">
                                                        <div className="inn">
                                                            <h4>Page sets 1</h4>
                                                            <ul>
                                                                <li>
                                                                    <a href="all-profiles.html">All profiles</a>
                                                                </li>
                                                                <li>
                                                                    <a href="profile-details.html">Profile details</a>
                                                                </li>
                                                                <li>
                                                                    <a href="wedding.html">Wedding</a>
                                                                </li>
                                                                <li>
                                                                    <a href="wedding-video.html">Wedding video</a>
                                                                </li>
                                                                <li>
                                                                    <a href="services.html">Our Services</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="multi-col">
                                                        <div className="inn">
                                                            <h4>Page sets 2</h4>
                                                            <ul>
                                                                <li>
                                                                    <a href="plans.html">Pricing plans</a>
                                                                </li>
                                                                <li>
                                                                    <a href="login.html">Login</a>
                                                                </li>
                                                                <li>
                                                                    <a href="sign-up.html">Sign-up</a>
                                                                </li>
                                                                <li>
                                                                    <a href="photo-gallery.html">Photo gallery</a>
                                                                </li>
                                                                <li>
                                                                    <a href="photo-gallery-1.html">Photo gallery 1</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="multi-col">
                                                        <div className="inn">
                                                            <h4>Page sets 3</h4>
                                                            <ul>
                                                                <li>
                                                                    <a href="contact.html">Contact</a>
                                                                </li>
                                                                <li>
                                                                    <a href="about.html">About</a>
                                                                </li>
                                                                <li>
                                                                    <a href="blog.html">Blog</a>
                                                                </li>
                                                                <li>
                                                                    <a href="blog-detail.html">Blog detail</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="multi-col">
                                                        <div className="inn">
                                                            <h4>Page sets 4</h4>
                                                            <ul>
                                                                <li>
                                                                    <a href="enquiry.html">Ask your doubts</a>
                                                                </li>
                                                                <li>
                                                                    <a href="make-reservation.html">
                                                                        Make Reservation
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="faq.html">FAQ</a>
                                                                </li>
                                                                <li>
                                                                    <a href="coming-soon.html" target="_blank">
                                                                        Coming soon
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="404.html">404</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="multi-col full">
                                                        <div className="inn">
                                                            <h4>User dashboard pages</h4>
                                                            <ul>
                                                                <li>
                                                                    <a href="user-dashboard.html">Dashboard</a>
                                                                </li>
                                                                <li>
                                                                    <a href="user-profile.html">My profile</a>
                                                                </li>
                                                                <li>
                                                                    <a href="user-interests.html">Interests</a>
                                                                </li>
                                                                <li>
                                                                    <a href="user-chat.html">Chat lists</a>
                                                                </li>
                                                                <li>
                                                                    <a href="user-plan.html">My plan details</a>
                                                                </li>
                                                                <li>
                                                                    <a href="user-setting.html">Profile settings</a>
                                                                </li>
                                                                <li>
                                                                    <a href="user-profile-edit.html">
                                                                        Edit full profile
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="login.html">Sign in</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="smenu-pare">
                                        <span className="smenu">Top pages</span>
                                        <div className="smenu-open smenu-single">
                                            <ul>
                                                <li>
                                                    <a href="all-profiles.html">All profiles</a>
                                                </li>
                                                <li>
                                                    <a href="profile-details.html">Profile details</a>
                                                </li>
                                                <li>
                                                    <a href="wedding.html">Wedding</a>
                                                </li>
                                                <li>
                                                    <a href="blog.html">Blog</a>
                                                </li>
                                                <li>
                                                    <a href="blog-detail.html">Blog detail</a>
                                                </li>
                                                <li>
                                                    <a href="about.html">About</a>
                                                </li>
                                                <li>
                                                    <a href="contact.html">Contact</a>
                                                </li>
                                                <li>
                                                    <a href="photo-gallery.html">Photo gallery</a>
                                                </li>
                                                <li>
                                                    <a href="photo-gallery-1.html">Photo gallery 1</a>
                                                </li>
                                                <li>
                                                    <a href="login.html">Login</a>
                                                </li>
                                                <li>
                                                    <a href="sign-up.html">Sign-up</a>
                                                </li>
                                                <li>
                                                    <a href="plans.html">Pricing plans</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                        <a href="plans.html">Plans</a>
                                    </li>
                                    <li>
                                        <a href="sign-up.html">Register</a>
                                    </li>
                                    <li className="smenu-pare">
                                        <span className="smenu">Dashboard</span>
                                        <div className="smenu-open smenu-single">
                                            <ul>
                                                <li>
                                                    <a href="user-dashboard.html">Dashboard</a>
                                                </li>
                                                <li>
                                                    <a href="user-profile.html">My profile</a>
                                                </li>
                                                <li>
                                                    <a href="user-interests.html">Interests</a>
                                                </li>
                                                <li>
                                                    <a href="user-chat.html">Chat lists</a>
                                                </li>
                                                <li>
                                                    <a href="user-plan.html">My plan details</a>
                                                </li>
                                                <li>
                                                    <a href="user-setting.html">Profile settings</a>
                                                </li>
                                                <li>
                                                    <a href="user-profile-edit.html">Edit full profile</a>
                                                </li>
                                                <li>
                                                    <a href="login.html">Sign in</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            {/* USER PROFILE */}
                            <div className="al">
                                <div className="head-pro">
                                    <img src="images/profiles/1.jpg" alt="" loading="lazy" />
                                    <b>Advisor</b>
                                    <br />
                                    <h4>Ashley emyy</h4>
                                    <span className="fclick" />
                                </div>
                            </div>
                            {/*MOBILE MENU*/}
                            <div className="mob-menu">
                                <div className="mob-me-ic">
                                    <span className="ser-open mobile-ser">
                                        <img src="images/icon/search.svg" alt="" />
                                    </span>
                                    <span className="mobile-exprt" data-mob="dashbord">
                                        <img src="images/icon/users.svg" alt="" />
                                    </span>
                                    <span className="mobile-menu" data-mob="mobile">
                                        <img src="images/icon/menu.svg" alt="" />
                                    </span>
                                </div>
                            </div>
                            {/*END MOBILE MENU*/}
                        </div>
                    </div>
                </div>
            </div>
            {/* END HEADER & MENU */}
            {/* MOBILE MENU POPUP */}
            <div className="mob-me-all mobile_menu">
                <div className="mob-me-clo">
                    <img src="images/icon/close.svg" alt="" />
                </div>
                <div className="mv-bus">
                    <h4>
                        <i className="fa fa-globe" aria-hidden="true" /> EXPLORE CATEGORY
                    </h4>
                    <ul>
                        <li>
                            <a href="all-profiles.html">Browse profiles</a>
                        </li>
                        <li>
                            <a href="wedding.html">Wedding page</a>
                        </li>
                        <li>
                            <a href="services.html">All Services</a>
                        </li>
                        <li>
                            <a href="plans.html">Join Now</a>
                        </li>
                    </ul>
                    <h4>
                        <i className="fa fa-align-center" aria-hidden="true" /> All Pages
                    </h4>
                    <ul>
                        <li>
                            <a href="all-profiles.html">All profiles</a>
                        </li>
                        <li>
                            <a href="profile-details.html">Profile details</a>
                        </li>
                        <li>
                            <a href="wedding.html">Wedding</a>
                        </li>
                        <li>
                            <a href="wedding-video.html">Wedding video</a>
                        </li>
                        <li>
                            <a href="services.html">Our Services</a>
                        </li>
                        <li>
                            <a href="plans.html">Pricing plans</a>
                        </li>
                        <li>
                            <a href="login.html">Login</a>
                        </li>
                        <li>
                            <a href="sign-up.html">Sign-up</a>
                        </li>
                        <li>
                            <a href="photo-gallery.html">Photo gallery</a>
                        </li>
                        <li>
                            <a href="photo-gallery-1.html">Photo gallery 1</a>
                        </li>
                        <li>
                            <a href="contact.html">Contact</a>
                        </li>
                        <li>
                            <a href="about.html">About</a>
                        </li>
                        <li>
                            <a href="blog.html">Blog</a>
                        </li>
                        <li>
                            <a href="blog-detail.html">Blog detail</a>
                        </li>
                        <li>
                            <a href="enquiry.html">Ask your doubts</a>
                        </li>
                        <li>
                            <a href="make-reservation.html">Make Reservation</a>
                        </li>
                        <li>
                            <a href="faq.html">FAQ</a>
                        </li>
                        <li>
                            <a href="coming-soon.html" target="_blank">
                                Coming soon
                            </a>
                        </li>
                        <li>
                            <a href="404.html">404</a>
                        </li>
                    </ul>
                    <div className="menu-pop-help">
                        <h4>Support Team</h4>
                        <div className="user-pro">
                            <img src="images/profiles/1.jpg" alt="" loading="lazy" />
                        </div>
                        <div className="user-bio">
                            <h5>Ashley emyy</h5>
                            <span>Senior personal advisor</span>
                            <a href="enquiry.html" className="btn btn-primary btn-sm">
                                Ask your doubts
                            </a>
                        </div>
                    </div>
                    <div className="menu-pop-soci">
                        <ul>
                            <li>
                                <a href="#!">
                                    <i className="fa fa-facebook" aria-hidden="true" />
                                </a>
                            </li>
                            <li>
                                <a href="#!">
                                    <i className="fa fa-twitter" aria-hidden="true" />
                                </a>
                            </li>
                            <li>
                                <a href="#!">
                                    <i className="fa fa-whatsapp" aria-hidden="true" />
                                </a>
                            </li>
                            <li>
                                <a href="#!">
                                    <i className="fa fa-linkedin" aria-hidden="true" />
                                </a>
                            </li>
                            <li>
                                <a href="#!">
                                    <i className="fa fa-youtube-play" aria-hidden="true" />
                                </a>
                            </li>
                            <li>
                                <a href="#!">
                                    <i className="fa fa-instagram" aria-hidden="true" />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="late-news">
                        <h4>Latest news</h4>
                        <ul>
                            <li>
                                <div className="rel-pro-img">
                                    <img src="images/couples/1.jpg" alt="" loading="lazy" />
                                </div>
                                <div className="rel-pro-con">
                                    <h5>Long established fact that a reader distracted</h5>
                                    <span className="ic-date">12 Dec 2023</span>
                                </div>
                                <a href="blog-detail.html" className="fclick" />
                            </li>
                            <li>
                                <div className="rel-pro-img">
                                    <img src="images/couples/3.jpg" alt="" loading="lazy" />
                                </div>
                                <div className="rel-pro-con">
                                    <h5>Long established fact that a reader distracted</h5>
                                    <span className="ic-date">12 Dec 2023</span>
                                </div>
                                <a href="blog-detail.html" className="fclick" />
                            </li>
                            <li>
                                <div className="rel-pro-img">
                                    <img src="images/couples/4.jpg" alt="" loading="lazy" />
                                </div>
                                <div className="rel-pro-con">
                                    <h5>Long established fact that a reader distracted</h5>
                                    <span className="ic-date">12 Dec 2023</span>
                                </div>
                                <a href="blog-detail.html" className="fclick" />
                            </li>
                        </ul>
                    </div>
                    <div className="prof-rhs-help">
                        <div className="inn">
                            <h3>Tell us your Needs</h3>
                            <p>Tell us what kind of service you are looking for.</p>
                            <a href="enquiry.html">Register for free</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* END MOBILE MENU POPUP */}
            {/* MOBILE USER PROFILE MENU POPUP */}
            <div className="mob-me-all dashbord_menu">
                <div className="mob-me-clo">
                    <img src="images/icon/close.svg" alt="" />
                </div>
                <div className="mv-bus">
                    <div className="head-pro">
                        <img src="images/profiles/1.jpg" alt="" loading="lazy" />
                        <b>user profile</b>
                        <br />
                        <h4>Ashley emyy</h4>
                    </div>
                    <ul>
                        <li>
                            <a href="login.html">Login</a>
                        </li>
                        <li>
                            <a href="sign-up.html">Sign-up</a>
                        </li>
                        <li>
                            <a href="plans.html">Pricing plans</a>
                        </li>
                        <li>
                            <a href="all-profiles.html">Browse profiles</a>
                        </li>
                    </ul>
                </div>
            </div>
            {/* END USER PROFILE MENU POPUP */}
            {/* BANNER */}
            <section>
                <div className="str">
                    <div className="ban-inn ab-ban">
                        <div className="container">
                            <div className="row">
                                <div className="hom-ban">
                                    <div className="ban-tit">
                                        <span>
                                            <i className="no1">#1</i> Wedding Website
                                        </span>
                                        <h1>About us</h1>
                                        <p>Most Trusted and premium Matrimony Service in the World.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* END */}
            {/* START */}
            <section>
                <div className="ab-sec2">
                    <div className="container">
                        <div className="row">
                            <ul>
                                <li>
                                    <div>
                                        <img src="images/icon/prize.png" alt="" />
                                        <h4>Genuine profiles</h4>
                                        <p>The most trusted wedding matrimony brand</p>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <img src="images/icon/trust.png" alt="" />
                                        <h4>Most trusted</h4>
                                        <p>The most trusted wedding matrimony brand</p>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <img src="images/icon/rings.png" alt="" />
                                        <h4>2000+ weddings</h4>
                                        <p>The most trusted wedding matrimony brand</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            {/* END */}
            {/* START */}
            <section>
                <div className="ab-wel">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="ab-wel-lhs">
                                    <span className="ab-wel-3" />
                                    <img src="images/about/1.jpg" alt="" className="ab-wel-1" />
                                    <img src="images/about/2.jpg" alt="" className="ab-wel-2" />
                                    <span className="ab-wel-4" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="ab-wel-rhs">
                                    <div className="ab-wel-tit">
                                        <h2>
                                            Welcome to <em>Wedding matrimony</em>
                                        </h2>
                                        <p>
                                            Best wedding matrimony It is a long established fact that a
                                            reader will be distracted by the readable content of a page
                                            when looking at its layout.{" "}
                                        </p>
                                        <p>
                                            {" "}
                                            <a href="plans.html">Click here to</a> Start you matrimony
                                            service now.
                                        </p>
                                    </div>
                                    <div className="ab-wel-tit-1">
                                        <p>
                                            There are many variations of passages of Lorem Ipsum
                                            available, but the majority have suffered alteration in some
                                            form, by injected humour, or randomised words which don't look
                                            even slightly believable.
                                        </p>
                                    </div>
                                    <div className="ab-wel-tit-2">
                                        <ul>
                                            <li>
                                                <div>
                                                    <i className="fa fa-phone" aria-hidden="true" />
                                                    <h4>
                                                        Enquiry <em>+01 2242 3366</em>
                                                    </h4>
                                                </div>
                                            </li>
                                            <li>
                                                <div>
                                                    <i className="fa fa-envelope-o" aria-hidden="true" />
                                                    <h4>
                                                        Get Support <em>info@example.com</em>
                                                    </h4>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* END */}
            {/* START */}
            <section>
                <div className="ab-cont">
                    <div className="container">
                        <div className="row">
                            <ul>
                                <li>
                                    <div className="ab-cont-po">
                                        <i className="fa fa-heart-o" aria-hidden="true" />
                                        <div>
                                            <h4>2K</h4>
                                            <span>Couples pared</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="ab-cont-po">
                                        <i className="fa fa-users" aria-hidden="true" />
                                        <div>
                                            <h4>4000+</h4>
                                            <span>Registered users</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="ab-cont-po">
                                        <i className="fa fa-male" aria-hidden="true" />
                                        <div>
                                            <h4>1600+</h4>
                                            <span>Mens</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="ab-cont-po">
                                        <i className="fa fa-female" aria-hidden="true" />
                                        <div>
                                            <h4>2000+</h4>
                                            <span>Womens</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            {/* END */}
            {/* RECENT COUPLES */}
            <section>
                <div className="hom-partners abo-partners" id="testimonials">
                    <div className="container">
                        <div className="row">
                            {/* SUB TITLE */}
                            <div className="sub-tit-caps">
                                <h2>
                                    Customer{" "}
                                    <span
                                        className="animate animate__animated"
                                        data-ani="animate__flipInX"
                                        data-dely="0.1"
                                    >
                                        Testimonials
                                    </span>
                                </h2>
                                <p>Fusce imperdiet ullamcorper fringilla.</p>
                            </div>
                            {/* TESTMONIAL BACKGROUND SHAPES */}
                            <div className="wedd-shap">
                                <span className="abo-shap-1" />
                                <span className="abo-shap-3" />
                            </div>
                            {/* SLIDER START */}
                            <div id="demo" className="carousel slide" data-ride="carousel">
                                {/* Wrapper for slides */}
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <ul>
                                            <li>
                                                <div className="ab-testmo">
                                                    <div className="ab-test-rat">
                                                        <div className="ab-test-star">
                                                            <i className="fa fa-star" aria-hidden="true" />
                                                            <i className="fa fa-star" aria-hidden="true" />
                                                            <i className="fa fa-star" aria-hidden="true" />
                                                            <i className="fa fa-star" aria-hidden="true" />
                                                            <i className="fa fa-star-half-o" aria-hidden="true" />
                                                            <span>(50 Reviews)</span>
                                                        </div>
                                                        <div className="ab-test-conte">
                                                            <p>
                                                                It is a long established fact that a reader will be
                                                                distracted by the readable content of a page when
                                                                looking at its layout.
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="ab-rat-user">
                                                        <img src="images/profiles/1.jpg" alt="" />
                                                        <div>
                                                            <h4>John Smith</h4>
                                                            <span>IT Profession</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="ab-testmo">
                                                    <div className="ab-test-rat">
                                                        <div className="ab-test-star">
                                                            <i className="fa fa-star" aria-hidden="true" />
                                                            <i className="fa fa-star" aria-hidden="true" />
                                                            <i className="fa fa-star" aria-hidden="true" />
                                                            <i className="fa fa-star" aria-hidden="true" />
                                                            <i className="fa fa-star-o" aria-hidden="true" />
                                                            <span>(50 Reviews)</span>
                                                        </div>
                                                        <div className="ab-test-conte">
                                                            <p>
                                                                It is a long established fact that a reader will be
                                                                distracted by the readable content of a page when
                                                                looking at its layout.
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="ab-rat-user">
                                                        <img src="images/profiles/6.jpg" alt="" />
                                                        <div>
                                                            <h4>Julia Ann</h4>
                                                            <span>Teacher</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="ab-testmo">
                                                    <div className="ab-test-rat">
                                                        <div className="ab-test-star">
                                                            <i className="fa fa-star" aria-hidden="true" />
                                                            <i className="fa fa-star" aria-hidden="true" />
                                                            <i className="fa fa-star" aria-hidden="true" />
                                                            <i className="fa fa-star" aria-hidden="true" />
                                                            <i className="fa fa-star-half-o" aria-hidden="true" />
                                                            <span>(50 Reviews)</span>
                                                        </div>
                                                        <div className="ab-test-conte">
                                                            <p>
                                                                It is a long established fact that a reader will be
                                                                distracted by the readable content of a page when
                                                                looking at its layout.
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="ab-rat-user">
                                                        <img src="images/profiles/7.jpg" alt="" />
                                                        <div>
                                                            <h4>William Son</h4>
                                                            <span>Government Staff</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="carousel-item">
                                        <ul>
                                            <li>
                                                <div className="ab-testmo">
                                                    <div className="ab-test-rat">
                                                        <div className="ab-test-star">
                                                            <i className="fa fa-star" aria-hidden="true" />
                                                            <i className="fa fa-star" aria-hidden="true" />
                                                            <i className="fa fa-star" aria-hidden="true" />
                                                            <i className="fa fa-star" aria-hidden="true" />
                                                            <i className="fa fa-star-o" aria-hidden="true" />
                                                            <span>(50 Reviews)</span>
                                                        </div>
                                                        <div className="ab-test-conte">
                                                            <p>
                                                                It is a long established fact that a reader will be
                                                                distracted by the readable content of a page when
                                                                looking at its layout.
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="ab-rat-user">
                                                        <img src="images/profiles/1.jpg" alt="" />
                                                        <div>
                                                            <h4>John Smith</h4>
                                                            <span>IT Profession</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="ab-testmo">
                                                    <div className="ab-test-rat">
                                                        <div className="ab-test-star">
                                                            <i className="fa fa-star" aria-hidden="true" />
                                                            <i className="fa fa-star" aria-hidden="true" />
                                                            <i className="fa fa-star" aria-hidden="true" />
                                                            <i className="fa fa-star" aria-hidden="true" />
                                                            <i className="fa fa-star-o" aria-hidden="true" />
                                                            <span>(50 Reviews)</span>
                                                        </div>
                                                        <div className="ab-test-conte">
                                                            <p>
                                                                It is a long established fact that a reader will be
                                                                distracted by the readable content of a page when
                                                                looking at its layout.
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="ab-rat-user">
                                                        <img src="images/profiles/6.jpg" alt="" />
                                                        <div>
                                                            <h4>Julia Ann</h4>
                                                            <span>Teacher</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="ab-testmo">
                                                    <div className="ab-test-rat">
                                                        <div className="ab-test-star">
                                                            <i className="fa fa-star" aria-hidden="true" />
                                                            <i className="fa fa-star" aria-hidden="true" />
                                                            <i className="fa fa-star" aria-hidden="true" />
                                                            <i className="fa fa-star" aria-hidden="true" />
                                                            <i className="fa fa-star-half-o" aria-hidden="true" />
                                                            <span>(50 Reviews)</span>
                                                        </div>
                                                        <div className="ab-test-conte">
                                                            <p>
                                                                It is a long established fact that a reader will be
                                                                distracted by the readable content of a page when
                                                                looking at its layout.
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="ab-rat-user">
                                                        <img src="images/profiles/7.jpg" alt="" />
                                                        <div>
                                                            <h4>William Son</h4>
                                                            <span>Government Staff</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* Left and right controls */}
                                <a className="carousel-control-prev" href="#demo" data-slide="prev">
                                    <span className="carousel-control-prev-icon" />
                                </a>
                                <a className="carousel-control-next" href="#demo" data-slide="next">
                                    <span className="carousel-control-next-icon" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* END */}
            {/* START */}
            <section>
                <div className="ab-team pg-abo-ab-team">
                    <div className="container">
                        <div className="row">
                            <div className="home-tit">
                                <p>OUR PROFESSIONALS</p>
                                <h2>
                                    <span>Meet Our Team</span>
                                </h2>
                                <span className="leaf1" />
                            </div>
                            <ul>
                                <li>
                                    <div>
                                        <img src="images/profiles/6.jpg" alt="" loading="lazy" />
                                        <h4>Ashley Jen</h4>
                                        <p>Marketing Manager</p>
                                        <ul className="social-light">
                                            <li>
                                                <a href="#!">
                                                    <i className="fa fa-facebook" aria-hidden="true" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#!">
                                                    <i className="fa fa-twitter" aria-hidden="true" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#!">
                                                    <i className="fa fa-whatsapp" aria-hidden="true" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#!">
                                                    <i className="fa fa-linkedin" aria-hidden="true" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#!">
                                                    <i className="fa fa-instagram" aria-hidden="true" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <img src="images/profiles/7.jpg" alt="" loading="lazy" />
                                        <h4>Ashley Jen</h4>
                                        <p>Marketing Manager</p>
                                        <ul className="social-light">
                                            <li>
                                                <a href="#!">
                                                    <i className="fa fa-facebook" aria-hidden="true" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#!">
                                                    <i className="fa fa-twitter" aria-hidden="true" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#!">
                                                    <i className="fa fa-whatsapp" aria-hidden="true" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#!">
                                                    <i className="fa fa-linkedin" aria-hidden="true" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#!">
                                                    <i className="fa fa-instagram" aria-hidden="true" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <img src="images/profiles/8.jpg" alt="" loading="lazy" />
                                        <h4>Emily Arrov</h4>
                                        <p>Creative Manager</p>
                                        <ul className="social-light">
                                            <li>
                                                <a href="#!">
                                                    <i className="fa fa-facebook" aria-hidden="true" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#!">
                                                    <i className="fa fa-twitter" aria-hidden="true" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#!">
                                                    <i className="fa fa-whatsapp" aria-hidden="true" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#!">
                                                    <i className="fa fa-linkedin" aria-hidden="true" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#!">
                                                    <i className="fa fa-instagram" aria-hidden="true" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <img src="images/profiles/9.jpg" alt="" loading="lazy" />
                                        <h4>Julia sear</h4>
                                        <p>Client Coordinator</p>
                                        <ul className="social-light">
                                            <li>
                                                <a href="#!">
                                                    <i className="fa fa-facebook" aria-hidden="true" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#!">
                                                    <i className="fa fa-twitter" aria-hidden="true" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#!">
                                                    <i className="fa fa-whatsapp" aria-hidden="true" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#!">
                                                    <i className="fa fa-linkedin" aria-hidden="true" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#!">
                                                    <i className="fa fa-instagram" aria-hidden="true" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            {/* END */}
            {/* START */}
            <section>
                <div className="ab-faq" id="faq">
                    <div className="container">
                        <div className="row">
                            {/* SUB TITLE */}
                            <div className="sub-tit-caps">
                                <h2>
                                    KB{" "}
                                    <span
                                        className="animate animate__animated"
                                        data-ani="animate__flipInX"
                                        data-dely="0.1"
                                    >
                                        knowledge base
                                    </span>
                                </h2>
                                <p>Fusce imperdiet ullamcorper fringilla.</p>
                            </div>
                            {/* TESTMONIAL BACKGROUND SHAPES */}
                            <div className="wedd-shap">
                                <span className="abo-shap-1" />
                                <span className="abo-shap-2" />
                                <span className="abo-shap-4" />
                                <span className="abo-shap-5" />
                            </div>
                            <div className="col-lg-6">
                                <div className="ab-faq-lhs">
                                    <div id="accordion">
                                        <div className="card">
                                            <div className="card-header">
                                                <a
                                                    className="card-link"
                                                    data-toggle="collapse"
                                                    href="#collapse1"
                                                >
                                                    It is a long established fact
                                                </a>
                                            </div>
                                            <div
                                                id="collapse1"
                                                className="collapse show"
                                                data-parent="#accordion"
                                            >
                                                <div className="card-body">
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing
                                                        elit, sed do eiusmod tempor incididunt ut labore et
                                                        dolore magna aliqua. Ut enim ad minim veniam, quis
                                                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                                                        ea commodo consequat.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header">
                                                <a
                                                    className="collapsed card-link"
                                                    data-toggle="collapse"
                                                    href="#collapse2"
                                                >
                                                    Where can I get some?
                                                </a>
                                            </div>
                                            <div
                                                id="collapse2"
                                                className="collapse"
                                                data-parent="#accordion"
                                            >
                                                <div className="card-body">
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing
                                                        elit, sed do eiusmod tempor incididunt ut labore et
                                                        dolore magna aliqua. Ut enim ad minim veniam, quis
                                                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                                                        ea commodo consequat.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header">
                                                <a
                                                    className="collapsed card-link"
                                                    data-toggle="collapse"
                                                    href="#collapse3"
                                                >
                                                    Where does it come from?
                                                </a>
                                            </div>
                                            <div
                                                id="collapse3"
                                                className="collapse"
                                                data-parent="#accordion"
                                            >
                                                <div className="card-body">
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing
                                                        elit, sed do eiusmod tempor incididunt ut labore et
                                                        dolore magna aliqua. Ut enim ad minim veniam, quis
                                                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                                                        ea commodo consequat.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header">
                                                <a
                                                    className="collapsed card-link"
                                                    data-toggle="collapse"
                                                    href="#collapse4"
                                                >
                                                    Why do we use it?
                                                </a>
                                            </div>
                                            <div
                                                id="collapse4"
                                                className="collapse"
                                                data-parent="#accordion"
                                            >
                                                <div className="card-body">
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing
                                                        elit, sed do eiusmod tempor incididunt ut labore et
                                                        dolore magna aliqua. Ut enim ad minim veniam, quis
                                                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                                                        ea commodo consequat.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header">
                                                <a
                                                    className="collapsed card-link"
                                                    data-toggle="collapse"
                                                    href="#collapse5"
                                                >
                                                    What is Lorem Ipsum?
                                                </a>
                                            </div>
                                            <div
                                                id="collapse5"
                                                className="collapse"
                                                data-parent="#accordion"
                                            >
                                                <div className="card-body">
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing
                                                        elit, sed do eiusmod tempor incididunt ut labore et
                                                        dolore magna aliqua. Ut enim ad minim veniam, quis
                                                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                                                        ea commodo consequat.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header">
                                                <a
                                                    className="collapsed card-link"
                                                    data-toggle="collapse"
                                                    href="#collapse6"
                                                >
                                                    Contrary to popular belief
                                                </a>
                                            </div>
                                            <div
                                                id="collapse6"
                                                className="collapse"
                                                data-parent="#accordion"
                                            >
                                                <div className="card-body">
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing
                                                        elit, sed do eiusmod tempor incididunt ut labore et
                                                        dolore magna aliqua. Ut enim ad minim veniam, quis
                                                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                                                        ea commodo consequat.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="ab-faq-rhs">
                                    <img src="images/about/3.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* END */}
            {/* FOOTER */}
            <section className="wed-hom-footer">
                <div className="container">
                    <div className="row foot-supp">
                        <h2>
                            <span>Free support:</span> +92 (8800) 68 - 8960
                            &nbsp;&nbsp;|&nbsp;&nbsp; <span>Email:</span>
                            info@example.com
                        </h2>
                    </div>
                    <div className="row wed-foot-link wed-foot-link-1">
                        <div className="col-md-4">
                            <h4>Get In Touch</h4>
                            <p>Address: 3812 Lena Lane City Jackson Mississippi</p>
                            <p>
                                Phone: <a href="tel:+917904462944">+92 (8800) 68 - 8960</a>
                            </p>
                            <p>
                                Email: <a href="mailto:info@example.com">info@example.com</a>
                            </p>
                        </div>
                        <div className="col-md-4">
                            <h4>HELP &amp; SUPPORT</h4>
                            <ul>
                                <li>
                                    <a href="about-us.html">About company</a>
                                </li>
                                <li>
                                    <a href="#!">Contact us</a>
                                </li>
                                <li>
                                    <a href="#!">Feedback</a>
                                </li>
                                <li>
                                    <a href="about-us.html#faq">FAQs</a>
                                </li>
                                <li>
                                    <a href="about-us.html#testimonials">Testimonials</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-4 fot-soc">
                            <h4>SOCIAL MEDIA</h4>
                            <ul>
                                <li>
                                    <a href="#!">
                                        <img src="images/social/1.png" alt="" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#!">
                                        <img src="images/social/2.png" alt="" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#!">
                                        <img src="images/social/3.png" alt="" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#!">
                                        <img src="images/social/5.png" alt="" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row foot-count">
                        <p>
                            Company name Site - Trusted by over thousands of Boys &amp; Girls for
                            successfull marriage.{" "}
                            <a href="sign-up.html" className="btn btn-primary btn-sm">
                                Join us today !
                            </a>
                        </p>
                    </div>
                </div>
            </section>
            {/* END */}
            {/* COPYRIGHTS */}
            <section>
                <div className="cr">
                    <div className="container">
                        <div className="row">
                            <p>
                                Copyright © <span id="cry">2017-2020</span>{" "}
                                <a href="#!" target="_blank">
                                    Company.com
                                </a>{" "}
                                All rights reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* END */}
            {/* Optional JavaScript */}
            {/* jQuery first, then Popper.js, then Bootstrap JS */}
        </>

    )
}

export default About