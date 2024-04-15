import React from 'react'

const UserDashBoard = () => {
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
            {/* LOGIN */}
            <section>
                <div className="db">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 col-lg-3">
                                <div className="db-nav">
                                    <div className="db-nav-pro">
                                        <img
                                            src="images/profiles/12.jpg"
                                            className="img-fluid"
                                            alt=""
                                        />
                                    </div>
                                    <div className="db-nav-list">
                                        <ul>
                                            <li>
                                                <a href="user-dashboard.html" className="act">
                                                    <i className="fa fa-tachometer" aria-hidden="true" />
                                                    Dashboard
                                                </a>
                                            </li>
                                            <li>
                                                <a href="user-profile.html">
                                                    <i className="fa fa-male" aria-hidden="true" />
                                                    Profile
                                                </a>
                                            </li>
                                            <li>
                                                <a href="user-interests.html">
                                                    <i className="fa fa-handshake-o" aria-hidden="true" />
                                                    Interests
                                                </a>
                                            </li>
                                            <li>
                                                <a href="user-chat.html">
                                                    <i className="fa fa-commenting-o" aria-hidden="true" />
                                                    Chat list
                                                </a>
                                            </li>
                                            <li>
                                                <a href="user-plan.html">
                                                    <i className="fa fa-money" aria-hidden="true" />
                                                    Plan
                                                </a>
                                            </li>
                                            <li>
                                                <a href="user-setting.html">
                                                    <i className="fa fa-cog" aria-hidden="true" />
                                                    Setting
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-sign-out" aria-hidden="true" />
                                                    Log out
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-8 col-lg-9">
                                <div className="col-md-12 db-sec-com db-new-pro-main">
                                    <h2 className="db-tit">New Profiles Matches</h2>
                                    <ul className="slider">
                                        <li>
                                            <div className="db-new-pro">
                                                <img
                                                    src="images/profiles/16.jpg"
                                                    alt=""
                                                    className="profile"
                                                />
                                                <div>
                                                    <h5>Julia ann</h5>
                                                    <span className="city">New york</span>
                                                    <span className="age">22 Years old</span>
                                                </div>
                                                <div className="pro-ave" title="User currently available">
                                                    <span className="pro-ave-yes" />
                                                </div>
                                                <a
                                                    href="profile-details.html"
                                                    className="fclick"
                                                    target="_blank"
                                                >
                                                    &nbsp;
                                                </a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="db-new-pro">
                                                <img
                                                    src="images/profiles/2.jpg"
                                                    alt=""
                                                    className="profile"
                                                />
                                                <div>
                                                    <h5>Julia ann</h5>
                                                    <span className="city">New york</span>
                                                    <span className="age">22 Years old</span>
                                                </div>
                                                <a
                                                    href="profile-details.html"
                                                    className="fclick"
                                                    target="_blank"
                                                >
                                                    &nbsp;
                                                </a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="db-new-pro">
                                                <img
                                                    src="images/profiles/3.jpg"
                                                    alt=""
                                                    className="profile"
                                                />
                                                <div>
                                                    <h5>Julia ann</h5>
                                                    <span className="city">New york</span>
                                                    <span className="age">22 Years old</span>
                                                </div>
                                                <a
                                                    href="profile-details.html"
                                                    className="fclick"
                                                    target="_blank"
                                                >
                                                    &nbsp;
                                                </a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="db-new-pro">
                                                <img
                                                    src="images/profiles/4.jpg"
                                                    alt=""
                                                    className="profile"
                                                />
                                                <div>
                                                    <h5>Julia ann</h5>
                                                    <span className="city">New york</span>
                                                    <span className="age">22 Years old</span>
                                                </div>
                                                <a
                                                    href="profile-details.html"
                                                    className="fclick"
                                                    target="_blank"
                                                >
                                                    &nbsp;
                                                </a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="db-new-pro">
                                                <img
                                                    src="images/profiles/5.jpeg"
                                                    alt=""
                                                    className="profile"
                                                />
                                                <div>
                                                    <h5>Julia ann</h5>
                                                    <span className="city">New york</span>
                                                    <span className="age">22 Years old</span>
                                                </div>
                                                <a
                                                    href="profile-details.html"
                                                    className="fclick"
                                                    target="_blank"
                                                >
                                                    &nbsp;
                                                </a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="db-new-pro">
                                                <img
                                                    src="images/profiles/6.jpg"
                                                    alt=""
                                                    className="profile"
                                                />
                                                <div>
                                                    <h5>Julia ann</h5>
                                                    <span className="city">New york</span>
                                                    <span className="age">22 Years old</span>
                                                </div>
                                                <div className="pro-ave" title="User currently available">
                                                    <span className="pro-ave-yes" />
                                                </div>
                                                <a
                                                    href="profile-details.html"
                                                    className="fclick"
                                                    target="_blank"
                                                >
                                                    &nbsp;
                                                </a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="db-new-pro">
                                                <img
                                                    src="images/profiles/14.jpg"
                                                    alt=""
                                                    className="profile"
                                                />
                                                <div>
                                                    <h5>Julia ann</h5>
                                                    <span className="city">New york</span>
                                                    <span className="age">22 Years old</span>
                                                </div>
                                                <div className="pro-ave" title="User currently available">
                                                    <span className="pro-ave-yes" />
                                                </div>
                                                <a
                                                    href="profile-details.html"
                                                    className="fclick"
                                                    target="_blank"
                                                >
                                                    &nbsp;
                                                </a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 col-lg-6 col-xl-4 db-sec-com">
                                        <h2 className="db-tit">Profiles status</h2>
                                        <div className="db-pro-stat">
                                            <h6>Profile completion</h6>
                                            <div className="dropdown">
                                                <button
                                                    type="button"
                                                    className="btn btn-outline-secondary"
                                                    data-bs-toggle="dropdown"
                                                >
                                                    <i className="fa fa-ellipsis-h" aria-hidden="true" />
                                                </button>
                                                <ul className="dropdown-menu">
                                                    <li>
                                                        <a className="dropdown-item" href="#">
                                                            Edid profile
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="dropdown-item" href="#">
                                                            View profile
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="dropdown-item" href="#">
                                                            Profile visibility settings
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="db-pro-pgog">
                                                <span>
                                                    <b className="count">90</b>%
                                                </span>
                                            </div>
                                            <ul className="pro-stat-ic">
                                                <li>
                                                    <span>
                                                        <i className="fa fa-heart-o like" aria-hidden="true" />
                                                        <b>12</b>Likes
                                                    </span>
                                                </li>
                                                <li>
                                                    <span>
                                                        <i className="fa fa-eye view" aria-hidden="true" />
                                                        <b>12</b>Views
                                                    </span>
                                                </li>
                                                <li>
                                                    <span>
                                                        <i
                                                            className="fa fa-handshake-o inte"
                                                            aria-hidden="true"
                                                        />
                                                        <b>12</b>Interests
                                                    </span>
                                                </li>
                                                <li>
                                                    <span>
                                                        <i
                                                            className="fa fa-hand-pointer-o clic"
                                                            aria-hidden="true"
                                                        />
                                                        <b>12</b>Clicks
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-12 col-lg-6 col-xl-4 db-sec-com">
                                        <h2 className="db-tit">Plan details</h2>
                                        <div className="db-pro-stat">
                                            <h6 className="tit-top-curv">Standard plan</h6>
                                            <div className="dropdown">
                                                <button
                                                    type="button"
                                                    className="btn btn-outline-secondary"
                                                    data-bs-toggle="dropdown"
                                                >
                                                    <i className="fa fa-ellipsis-h" aria-hidden="true" />
                                                </button>
                                                <ul className="dropdown-menu">
                                                    <li>
                                                        <a className="dropdown-item" href="#">
                                                            Edid profile
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="dropdown-item" href="#">
                                                            View profile
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="dropdown-item" href="#">
                                                            Plan change
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="dropdown-item" href="#">
                                                            Download invoice now
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="db-plan-card">
                                                <img src="images/icon/plan.png" alt="" />
                                            </div>
                                            <div className="db-plan-detil">
                                                <ul>
                                                    <li>
                                                        Plan name: <strong>Standard</strong>
                                                    </li>
                                                    <li>
                                                        Validity: <strong>6 Months</strong>
                                                    </li>
                                                    <li>
                                                        Valid till <strong>24 June 2024</strong>
                                                    </li>
                                                    <li>
                                                        <a href="" className="cta-3">
                                                            Upgrade now
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-xl-4 db-sec-com">
                                        <h2 className="db-tit">Recent chat list</h2>
                                        <div className="db-pro-stat">
                                            <div className="db-inte-prof-list db-inte-prof-chat">
                                                <ul>
                                                    <li>
                                                        <div className="db-int-pro-1">
                                                            {" "}
                                                            <img src="images/profiles/2.jpg" alt="" />{" "}
                                                        </div>
                                                        <div className="db-int-pro-2">
                                                            <h5>Julia Ann</h5>{" "}
                                                            <span>Illunois, United States</span>{" "}
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="db-int-pro-1">
                                                            {" "}
                                                            <img src="images/profiles/16.jpg" alt="" />{" "}
                                                        </div>
                                                        <div className="db-int-pro-2">
                                                            <h5>Julia Ann</h5>{" "}
                                                            <span>Illunois, United States</span>{" "}
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="db-int-pro-1">
                                                            {" "}
                                                            <img src="images/profiles/13.jpg" alt="" />{" "}
                                                        </div>
                                                        <div className="db-int-pro-2">
                                                            <h5>Julia Ann</h5>{" "}
                                                            <span>Illunois, United States</span>{" "}
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="db-int-pro-1">
                                                            {" "}
                                                            <img src="images/profiles/14.jpg" alt="" />{" "}
                                                        </div>
                                                        <div className="db-int-pro-2">
                                                            <h5>Julia Ann</h5>{" "}
                                                            <span>Illunois, United States</span>{" "}
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12 db-sec-com">
                                        <h2 className="db-tit">Interest request</h2>
                                        <div className="db-pro-stat">
                                            <div className="dropdown">
                                                <button
                                                    type="button"
                                                    className="btn btn-outline-secondary"
                                                    data-bs-toggle="dropdown"
                                                >
                                                    <i className="fa fa-ellipsis-h" aria-hidden="true" />
                                                </button>
                                                <ul className="dropdown-menu">
                                                    <li>
                                                        <a className="dropdown-item" href="#">
                                                            Edid profile
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="dropdown-item" href="#">
                                                            View profile
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="dropdown-item" href="#">
                                                            Plan change
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="dropdown-item" href="#">
                                                            Download invoice now
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="db-inte-main">
                                                <ul className="nav nav-tabs" role="tablist">
                                                    <li className="nav-item">
                                                        <a
                                                            className="nav-link active"
                                                            data-bs-toggle="tab"
                                                            href="#home"
                                                        >
                                                            New requests
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            className="nav-link"
                                                            data-bs-toggle="tab"
                                                            href="#menu1"
                                                        >
                                                            Accept request
                                                        </a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a
                                                            className="nav-link"
                                                            data-bs-toggle="tab"
                                                            href="#menu2"
                                                        >
                                                            Denay request
                                                        </a>
                                                    </li>
                                                </ul>
                                                {/* Tab panes */}
                                                {/* Tab panes */}
                                                <div className="tab-content">
                                                    <div id="home" className="container tab-pane active">
                                                        <br />
                                                        <div className="db-inte-prof-list">
                                                            <ul>
                                                                <li>
                                                                    <div className="db-int-pro-1">
                                                                        {" "}
                                                                        <img
                                                                            src="images/profiles/men1.jpg"
                                                                            alt=""
                                                                        />{" "}
                                                                        <span className="badge bg-primary user-pla-pat">
                                                                            Platinum user
                                                                        </span>
                                                                    </div>
                                                                    <div className="db-int-pro-2">
                                                                        <h5>John Smith</h5>
                                                                        <ol className="poi">
                                                                            <li>
                                                                                City: <strong>Illunois</strong>
                                                                            </li>
                                                                            <li>
                                                                                Age: <strong>21</strong>
                                                                            </li>
                                                                            <li>
                                                                                Height: <strong>5.7</strong>
                                                                            </li>
                                                                            <li>
                                                                                Job: <strong>Working</strong>
                                                                            </li>
                                                                        </ol>
                                                                        <ol className="poi poi-date">
                                                                            <li>Request on: 10:30 AM, 18 August 2024</li>
                                                                        </ol>
                                                                        <a
                                                                            href="profile-details.html"
                                                                            className="cta-5"
                                                                            target="_blank"
                                                                        >
                                                                            View full profile
                                                                        </a>
                                                                    </div>
                                                                    <div className="db-int-pro-3">
                                                                        <button
                                                                            type="button"
                                                                            className="btn btn-success btn-sm"
                                                                        >
                                                                            Accept
                                                                        </button>
                                                                        <button
                                                                            type="button"
                                                                            className="btn btn-outline-danger btn-sm"
                                                                        >
                                                                            Denay
                                                                        </button>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="db-int-pro-1">
                                                                        {" "}
                                                                        <img
                                                                            src="images/profiles/men2.jpg"
                                                                            alt=""
                                                                        />{" "}
                                                                        <span className="badge bg-primary user-pla-gold">
                                                                            Gold user
                                                                        </span>
                                                                    </div>
                                                                    <div className="db-int-pro-2">
                                                                        <h5>John Smith</h5>
                                                                        <ol className="poi">
                                                                            <li>
                                                                                City: <strong>Illunois</strong>
                                                                            </li>
                                                                            <li>
                                                                                Age: <strong>21</strong>
                                                                            </li>
                                                                            <li>
                                                                                Height: <strong>5.7</strong>
                                                                            </li>
                                                                            <li>
                                                                                Job: <strong>Working</strong>
                                                                            </li>
                                                                        </ol>
                                                                        <ol className="poi poi-date">
                                                                            <li>Request on: 10:30 AM, 18 August 2024</li>
                                                                        </ol>
                                                                        <a
                                                                            href="profile-details.html"
                                                                            className="cta-5"
                                                                            target="_blank"
                                                                        >
                                                                            View full profile
                                                                        </a>
                                                                    </div>
                                                                    <div className="db-int-pro-3">
                                                                        <button
                                                                            type="button"
                                                                            className="btn btn-success btn-sm"
                                                                        >
                                                                            Accept
                                                                        </button>
                                                                        <button
                                                                            type="button"
                                                                            className="btn btn-outline-danger btn-sm"
                                                                        >
                                                                            Denay
                                                                        </button>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="db-int-pro-1">
                                                                        {" "}
                                                                        <img
                                                                            src="images/profiles/men3.jpg"
                                                                            alt=""
                                                                        />{" "}
                                                                        <span className="badge bg-primary user-pla-free">
                                                                            Free user
                                                                        </span>
                                                                    </div>
                                                                    <div className="db-int-pro-2">
                                                                        <h5>John Smith</h5>
                                                                        <ol className="poi">
                                                                            <li>
                                                                                City: <strong>Illunois</strong>
                                                                            </li>
                                                                            <li>
                                                                                Age: <strong>21</strong>
                                                                            </li>
                                                                            <li>
                                                                                Height: <strong>5.7</strong>
                                                                            </li>
                                                                            <li>
                                                                                Job: <strong>Working</strong>
                                                                            </li>
                                                                        </ol>
                                                                        <ol className="poi poi-date">
                                                                            <li>Request on: 10:30 AM, 18 August 2024</li>
                                                                        </ol>
                                                                        <a
                                                                            href="profile-details.html"
                                                                            className="cta-5"
                                                                            target="_blank"
                                                                        >
                                                                            View full profile
                                                                        </a>
                                                                    </div>
                                                                    <div className="db-int-pro-3">
                                                                        <button
                                                                            type="button"
                                                                            className="btn btn-success btn-sm"
                                                                        >
                                                                            Accept
                                                                        </button>
                                                                        <button
                                                                            type="button"
                                                                            className="btn btn-outline-danger btn-sm"
                                                                        >
                                                                            Denay
                                                                        </button>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="db-int-pro-1">
                                                                        {" "}
                                                                        <img
                                                                            src="images/profiles/men4.jpg"
                                                                            alt=""
                                                                        />{" "}
                                                                    </div>
                                                                    <div className="db-int-pro-2">
                                                                        <h5>John Smith</h5>
                                                                        <ol className="poi">
                                                                            <li>
                                                                                City: <strong>Illunois</strong>
                                                                            </li>
                                                                            <li>
                                                                                Age: <strong>21</strong>
                                                                            </li>
                                                                            <li>
                                                                                Height: <strong>5.7</strong>
                                                                            </li>
                                                                            <li>
                                                                                Job: <strong>Working</strong>
                                                                            </li>
                                                                        </ol>
                                                                        <ol className="poi poi-date">
                                                                            <li>Request on: 10:30 AM, 18 August 2024</li>
                                                                        </ol>
                                                                        <a
                                                                            href="profile-details.html"
                                                                            className="cta-5"
                                                                            target="_blank"
                                                                        >
                                                                            View full profile
                                                                        </a>
                                                                    </div>
                                                                    <div className="db-int-pro-3">
                                                                        <button
                                                                            type="button"
                                                                            className="btn btn-success btn-sm"
                                                                        >
                                                                            Accept
                                                                        </button>
                                                                        <button
                                                                            type="button"
                                                                            className="btn btn-outline-danger btn-sm"
                                                                        >
                                                                            Denay
                                                                        </button>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div id="menu1" className="container tab-pane fade">
                                                        <br />
                                                        <div className="db-inte-prof-list">
                                                            <ul>
                                                                <li>
                                                                    <div className="db-int-pro-1">
                                                                        {" "}
                                                                        <img
                                                                            src="images/profiles/men5.jpg"
                                                                            alt=""
                                                                        />{" "}
                                                                    </div>
                                                                    <div className="db-int-pro-2">
                                                                        <h5>John Smith</h5>
                                                                        <ol className="poi">
                                                                            <li>
                                                                                City: <strong>Illunois</strong>
                                                                            </li>
                                                                            <li>
                                                                                Age: <strong>21</strong>
                                                                            </li>
                                                                            <li>
                                                                                Height: <strong>5.7</strong>
                                                                            </li>
                                                                            <li>
                                                                                Job: <strong>Working</strong>
                                                                            </li>
                                                                        </ol>
                                                                        <ol className="poi poi-date">
                                                                            <li>Request on: 10:30 AM, 18 August 2024</li>
                                                                            <li>Accept on: 3:000 PM, 21 August 2024</li>
                                                                        </ol>
                                                                        <a
                                                                            href="profile-details.html"
                                                                            className="cta-5"
                                                                            target="_blank"
                                                                        >
                                                                            View full profile
                                                                        </a>
                                                                    </div>
                                                                    <div className="db-int-pro-3">
                                                                        <button
                                                                            type="button"
                                                                            className="btn btn-outline-danger btn-sm"
                                                                        >
                                                                            Denay
                                                                        </button>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div id="menu2" className="container tab-pane fade">
                                                        <br />
                                                        <div className="db-inte-prof-list">
                                                            <ul>
                                                                <li>
                                                                    <div className="db-int-pro-1">
                                                                        {" "}
                                                                        <img
                                                                            src="images/profiles/men1.jpg"
                                                                            alt=""
                                                                        />{" "}
                                                                    </div>
                                                                    <div className="db-int-pro-2">
                                                                        <h5>John Smith</h5>
                                                                        <ol className="poi">
                                                                            <li>
                                                                                City: <strong>Illunois</strong>
                                                                            </li>
                                                                            <li>
                                                                                Age: <strong>21</strong>
                                                                            </li>
                                                                            <li>
                                                                                Height: <strong>5.7</strong>
                                                                            </li>
                                                                            <li>
                                                                                Job: <strong>Working</strong>
                                                                            </li>
                                                                        </ol>
                                                                        <ol className="poi poi-date">
                                                                            <li>Request on: 10:30 AM, 18 August 2024</li>
                                                                            <li>Denay on: 3:000 PM, 21 August 2024</li>
                                                                        </ol>
                                                                        <a
                                                                            href="profile-details.html"
                                                                            className="cta-5"
                                                                            target="_blank"
                                                                        >
                                                                            View full profile
                                                                        </a>
                                                                    </div>
                                                                    <div className="db-int-pro-3">
                                                                        <button
                                                                            type="button"
                                                                            className="btn btn-success btn-sm"
                                                                        >
                                                                            Accept
                                                                        </button>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12 db-sec-com">
                                        <h2 className="db-tit">Profiles views</h2>
                                        <div className="chartin">
                                            <canvas id="Chart_leads" />
                                        </div>
                                    </div>
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

export default UserDashBoard