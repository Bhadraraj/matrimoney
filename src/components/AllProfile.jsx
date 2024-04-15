import React from 'react'

const AllProfile = () => {
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
  {/* SUB-HEADING */}
  <section>
    <div className="all-pro-head">
      <div className="container">
        <div className="row">
          <h1>Lakhs of Happy Marriages</h1>
          <a href="sign-up.html">
            Join now for Free{" "}
            <i className="fa fa-handshake-o" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
    {/*FILTER ON MOBILE VIEW*/}
    <div className="fil-mob fil-mob-act">
      <h4>
        Profile filters <i className="fa fa-filter" aria-hidden="true" />{" "}
      </h4>
    </div>
  </section>
  {/* END */}
  {/* START */}
  <section>
    <div className="all-weddpro all-jobs all-serexp chosenini">
      <div className="container">
        <div className="row">
          <div className="col-md-3 fil-mob-view">
            <span className="filter-clo">+</span>
            {/* START */}
            <div className="filt-com lhs-cate">
              <h4>
                <i className="fa fa-search" aria-hidden="true" /> I'm looking
                for
              </h4>
              <div className="form-group">
                <select className="chosen-select">
                  <option value="">I'm looking for</option>
                  <option value="Men">Men</option>
                  <option value="Women">Women</option>
                </select>
              </div>
            </div>
            {/* END */}
            {/* START */}
            <div className="filt-com lhs-cate">
              <h4>
                <i className="fa fa-clock-o" aria-hidden="true" />
                Age
              </h4>
              <div className="form-group">
                <select className="chosen-select">
                  <option value="">Select age</option>
                  <option value="">18 to 30</option>
                  <option value="">31 to 40</option>
                  <option value="">41 to 50</option>
                  <option value="">51 to 60</option>
                  <option value="">61 to 70</option>
                  <option value="">71 to 80</option>
                  <option value="">81 to 90</option>
                  <option value="">91 to 100</option>
                </select>
              </div>
            </div>
            {/* END */}
            {/* START */}
            <div className="filt-com lhs-cate">
              <h4>
                <i className="fa fa-bell-o" aria-hidden="true" />
                Select Religion
              </h4>
              <div className="form-group">
                <select className="chosen-select">
                  <option>Religion</option>
                  <option>Any</option>
                  <option>Hindu</option>
                  <option>Muslim</option>
                  <option>Jain</option>
                  <option>Christian</option>
                </select>
              </div>
            </div>
            {/* END */}
            {/* START */}
            <div className="filt-com lhs-cate">
              <h4>
                <i className="fa fa-map-marker" aria-hidden="true" />
                Location
              </h4>
              <div className="form-group">
                <select className="chosen-select" name="addjbmaincate">
                  <option value="Chennai">Chennai</option>
                  <option value="Bangaluru">Bangaluru</option>
                  <option value="Delhi">Delhi</option>
                </select>
              </div>
            </div>
            {/* END */}
            {/* START */}
            <div className="filt-com lhs-rati lhs-avail lhs-cate">
              <h4>
                <i className="fa fa-thumbs-o-up" aria-hidden="true" />{" "}
                Availablity
              </h4>
              <ul>
                <li>
                  <div className="rbbox">
                    <input
                      type="radio"
                      defaultValue=""
                      name="expert_avail"
                      className="rating_check"
                      id="exav1"
                      defaultChecked=""
                    />
                    <label htmlFor="exav1">All</label>
                  </div>
                </li>
                <li>
                  <div className="rbbox">
                    <input
                      type="radio"
                      defaultValue=""
                      name="expert_avail"
                      className="rating_check"
                      id="exav2"
                    />
                    <label htmlFor="exav2">Available</label>
                  </div>
                </li>
                <li>
                  <div className="rbbox">
                    <input
                      type="radio"
                      defaultValue=""
                      name="expert_avail"
                      className="rating_check"
                      id="exav3"
                    />
                    <label htmlFor="exav3">Offline</label>
                  </div>
                </li>
              </ul>
            </div>
            {/* END */}
            {/* START */}
            <div className="filt-com lhs-rati lhs-ver lhs-cate">
              <h4>
                <i className="fa fa-shield" aria-hidden="true" />
                Profile
              </h4>
              <ul>
                <li>
                  <div className="rbbox">
                    <input
                      type="radio"
                      defaultValue=""
                      name="expert_veri"
                      className="rating_check"
                      id="exver1"
                      defaultChecked=""
                    />
                    <label htmlFor="exver1">All</label>
                  </div>
                </li>
                <li>
                  <div className="rbbox">
                    <input
                      type="radio"
                      defaultValue=""
                      name="expert_veri"
                      className="rating_check"
                      id="exver2"
                    />
                    <label htmlFor="exver2">Premium</label>
                  </div>
                </li>
                <li>
                  <div className="rbbox">
                    <input
                      type="radio"
                      defaultValue=""
                      name="expert_veri"
                      className="rating_check"
                      id="exver3"
                    />
                    <label htmlFor="exver3">Free</label>
                  </div>
                </li>
              </ul>
            </div>
            {/* END */}
            {/* START */}
            <div className="filt-com filt-send-query">
              <div className="send-query">
                <h5>What are you looking for?</h5>
                <p>We will help you to arrage the best match to you.</p>
                <a href="#!" data-toggle="modal" data-target="#expfrm">
                  Send your queries
                </a>
              </div>
            </div>
            {/* END */}
          </div>
          <div className="col-md-9">
            <div className="short-all">
              <div className="short-lhs">
                Showing <b>32</b> profiles
              </div>
              <div className="short-rhs">
                <ul>
                  <li>Sort by:</li>
                  <li>
                    <div className="form-group">
                      <select className="chosen-select">
                        <option value="">Most relative</option>
                        <option value="Men">Date listed: Newest</option>
                        <option value="Men">Date listed: Oldest</option>
                      </select>
                    </div>
                  </li>
                  <li>
                    <div className="sort-grid sort-grid-1">
                      <i className="fa fa-th-large" aria-hidden="true" />
                    </div>
                  </li>
                  <li>
                    <div className="sort-grid sort-grid-2 act">
                      <i className="fa fa-bars" aria-hidden="true" />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="all-list-sh">
              <ul>
                <li>
                  <div
                    className="all-pro-box user-avil-onli"
                    data-useravil="avilyes"
                    data-aviltxt="Available online"
                  >
                    {/*PROFILE IMAGE*/}
                    <div className="pro-img">
                      <a href="profile-details.html">
                        <img src="images/profiles/4.jpg" alt="" />
                      </a>
                      <div className="pro-ave" title="User currently available">
                        <span className="pro-ave-yes" />
                      </div>
                      <div className="pro-avl-status">
                        <h5>Available Online</h5>
                      </div>
                    </div>
                    {/*END PROFILE IMAGE*/}
                    {/*PROFILE NAME*/}
                    <div className="pro-detail">
                      <h4>
                        <a href="profile-details.html">Ashley emyy</a>
                      </h4>
                      <div className="pro-bio">
                        <span>B.Sc</span>
                        <span>IT Profession</span>
                        <span>29 Yeard old</span>
                        <span>Height: 155Cms</span>
                      </div>
                      <div className="links">
                        <span className="cta-chat">Chat now</span>
                        <a href="#!">WhatsApp</a>
                        <a
                          href="#!"
                          className="cta cta-sendint"
                          data-bs-toggle="modal"
                          data-bs-target="#sendInter"
                        >
                          Send interest
                        </a>
                        <a href="profile-details.html">More detaiils</a>
                      </div>
                    </div>
                    {/*END PROFILE NAME*/}
                    {/*SAVE*/}
                    <span
                      className="enq-sav"
                      data-toggle="tooltip"
                      title="Click to save this provile."
                    >
                      <i className="fa fa-thumbs-o-up" aria-hidden="true" />
                    </span>
                    {/*END SAVE*/}
                  </div>
                </li>
                <li>
                  <div
                    className="all-pro-box"
                    data-useravil="avilno"
                    data-aviltxt="Offline"
                  >
                    {/*PROFILE IMAGE*/}
                    <div className="pro-img">
                      <a href="profile-details.html">
                        <img src="images/profiles/10.jpg" alt="" />
                      </a>
                      <div className="pro-ave" title="User currently available">
                        <span className="pro-ave-yes" />
                      </div>
                      <div className="pro-avl-status">
                        <span className="marqu">
                          Last login 10 mins ago | I'll be available on 10:00 AM
                        </span>
                      </div>
                    </div>
                    {/*END PROFILE IMAGE*/}
                    {/*PROFILE NAME*/}
                    <div className="pro-detail">
                      <h4>
                        <a href="profile-details.html">Elizabeth Taylor</a>
                      </h4>
                      <div className="pro-bio">
                        <span>B.Sc</span>
                        <span>IT Profession</span>
                        <span>29 Yeard old</span>
                        <span>Height: 155Cms</span>
                      </div>
                      <div className="links">
                        <span className="cta-chat">Chat now</span>
                        <a href="#!">WhatsApp</a>
                        <a
                          href="#!"
                          className="cta cta-sendint"
                          data-bs-toggle="modal"
                          data-bs-target="#sendInter"
                        >
                          Send interest
                        </a>
                        <a href="profile-details.html">More detaiils</a>
                      </div>
                    </div>
                    {/*END PROFILE NAME*/}
                    {/*SAVE*/}
                    <span
                      className="enq-sav"
                      data-toggle="tooltip"
                      title="Click to save this provile."
                    >
                      <i className="fa fa-thumbs-o-up" aria-hidden="true" />
                    </span>
                    {/*END SAVE*/}
                  </div>
                </li>
                <li>
                  <div
                    className="all-pro-box user-avil-onli"
                    data-useravil="avilyes"
                    data-aviltxt="Available online"
                  >
                    {/*PROFILE IMAGE*/}
                    <div className="pro-img">
                      <a href="profile-details.html">
                        <img src="images/profiles/11.jpg" alt="" />
                      </a>
                      <div className="pro-ave" title="User currently available">
                        <span className="pro-ave-yes" />
                      </div>
                      <div className="pro-avl-status">
                        <h5>Available Online</h5>
                      </div>
                    </div>
                    {/*END PROFILE IMAGE*/}
                    {/*PROFILE NAME*/}
                    <div className="pro-detail">
                      <h4>
                        <a href="profile-details.html">Angelina Jolie</a>
                      </h4>
                      <div className="pro-bio">
                        <span>B.Sc</span>
                        <span>IT Profession</span>
                        <span>29 Yeard old</span>
                        <span>Height: 155Cms</span>
                      </div>
                      <div className="links">
                        <span className="cta-chat">Chat now</span>
                        <a href="#!">WhatsApp</a>
                        <a
                          href="#!"
                          className="cta cta-sendint"
                          data-bs-toggle="modal"
                          data-bs-target="#sendInter"
                        >
                          Send interest
                        </a>
                        <a href="profile-details.html">More detaiils</a>
                      </div>
                    </div>
                    {/*END PROFILE NAME*/}
                    {/*END USER AND GET QUOTE*/}
                    {/*SAVE*/}
                    <span
                      className="enq-sav"
                      data-toggle="tooltip"
                      title="Click to save this provile."
                    >
                      <i className="fa fa-thumbs-o-up" aria-hidden="true" />
                    </span>
                    {/*END SAVE*/}
                  </div>
                </li>
                <li>
                  <div
                    className="all-pro-box"
                    data-useravil="avilno"
                    data-aviltxt="Offline"
                  >
                    {/*PROFILE IMAGE*/}
                    <div className="pro-img">
                      <a href="profile-details.html">
                        <img src="images/profiles/12.jpg" alt="" />
                      </a>
                      <div className="pro-ave" title="User currently available">
                        <span className="pro-ave-yes" />
                      </div>
                      <div className="pro-avl-status">
                        <h5>Last login 10 mins ago</h5>
                        <span className="marqu">
                          Last login 10 mins ago | I'll be available on 10:00 AM
                        </span>
                      </div>
                    </div>
                    {/*END PROFILE IMAGE*/}
                    {/*PROFILE NAME*/}
                    <div className="pro-detail">
                      <h4>
                        <a href="profile-details.html">Olivia mia</a>
                      </h4>
                      <div className="pro-bio">
                        <span>B.Sc</span>
                        <span>IT Profession</span>
                        <span>29 Yeard old</span>
                        <span>Height: 155Cms</span>
                      </div>
                      <div className="links">
                        <span className="cta-chat">Chat now</span>
                        <a href="#!">WhatsApp</a>
                        <a
                          href="#!"
                          className="cta cta-sendint"
                          data-bs-toggle="modal"
                          data-bs-target="#sendInter"
                        >
                          Send interest
                        </a>
                        <a href="profile-details.html">More detaiils</a>
                      </div>
                    </div>
                    {/*END PROFILE NAME*/}
                    {/*SAVE*/}
                    <span
                      className="enq-sav"
                      data-toggle="tooltip"
                      title="Click to save this provile."
                    >
                      <i className="fa fa-thumbs-o-up" aria-hidden="true" />
                    </span>
                    {/*END SAVE*/}
                  </div>
                </li>
                <li>
                  <div
                    className="all-pro-box"
                    data-useravil="avilno"
                    data-aviltxt="Offline"
                  >
                    {/*PROFILE IMAGE*/}
                    <div className="pro-img">
                      <a href="profile-details.html">
                        <img src="images/profiles/13.jpg" alt="" />
                      </a>
                      <div className="pro-ave" title="User currently available">
                        <span className="pro-ave-yes" />
                      </div>
                      <div className="pro-avl-status">
                        <h5>Last login 10 mins ago</h5>
                        <span className="marqu">
                          Last login 10 mins ago | I'll be available on 10:00 AM
                        </span>
                      </div>
                    </div>
                    {/*END PROFILE IMAGE*/}
                    {/*PROFILE NAME*/}
                    <div className="pro-detail">
                      <h4>
                        <a href="profile-details.html">Jennifer</a>
                      </h4>
                      <div className="pro-bio">
                        <span>B.Sc</span>
                        <span>IT Profession</span>
                        <span>29 Yeard old</span>
                        <span>Height: 155Cms</span>
                      </div>
                      <div className="links">
                        <span className="cta-chat">Chat now</span>
                        <a href="#!">WhatsApp</a>
                        <a
                          href="#!"
                          className="cta cta-sendint"
                          data-bs-toggle="modal"
                          data-bs-target="#sendInter"
                        >
                          Send interest
                        </a>
                        <a href="profile-details.html">More detaiils</a>
                      </div>
                    </div>
                    {/*END PROFILE NAME*/}
                    {/*SAVE*/}
                    <span
                      className="enq-sav"
                      data-toggle="tooltip"
                      title="Click to save this provile."
                    >
                      <i className="fa fa-thumbs-o-up" aria-hidden="true" />
                    </span>
                    {/*END SAVE*/}
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* END */}
  {/* INTEREST POPUP */}
  <div className="modal fade" id="sendInter">
    <div className="modal-dialog modal-lg">
      <div className="modal-content">
        {/* Modal Header */}
        <div className="modal-header">
          <h4 className="modal-title seninter-tit">
            Send interest to <span className="intename2">Jolia</span>
          </h4>
          <button type="button" className="close" data-bs-dismiss="modal">
            ×
          </button>
        </div>
        {/* Modal body */}
        <div className="modal-body seninter">
          <div className="lhs">
            <img src="images/profiles/1.jpg" alt="" className="intephoto2" />
          </div>
          <div className="rhs">
            <h4>
              Permissions: <span className="intename2">Jolia</span> Can able to
              view the below details
            </h4>
            <ul>
              <li>
                <div className="chbox">
                  <input type="checkbox" id="pro_about" defaultChecked="" />
                  <label htmlFor="pro_about">About section</label>
                </div>
              </li>
              <li>
                <div className="chbox">
                  <input type="checkbox" id="pro_photo" />
                  <label htmlFor="pro_photo">Photo gallery</label>
                </div>
              </li>
              <li>
                <div className="chbox">
                  <input type="checkbox" id="pro_contact" />
                  <label htmlFor="pro_contact">Contact info</label>
                </div>
              </li>
              <li>
                <div className="chbox">
                  <input type="checkbox" id="pro_person" />
                  <label htmlFor="pro_person">Personal info</label>
                </div>
              </li>
              <li>
                <div className="chbox">
                  <input type="checkbox" id="pro_hobbi" />
                  <label htmlFor="pro_hobbi">Hobbies</label>
                </div>
              </li>
              <li>
                <div className="chbox">
                  <input type="checkbox" id="pro_social" />
                  <label htmlFor="pro_social">Social media</label>
                </div>
              </li>
            </ul>
            <div className="form-floating">
              <textarea
                className="form-control"
                id="comment"
                name="text"
                placeholder="Comment goes here"
                defaultValue={""}
              />
              <label htmlFor="comment">
                Write some message to <span className="intename" />
              </label>
            </div>
          </div>
        </div>
        {/* Modal footer */}
        <div className="modal-footer">
          <button type="button" className="btn btn-primary">
            Send interest
          </button>
          <button
            type="button"
            className="btn btn-outline-danger"
            data-dismiss="modal"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
  {/* END INTEREST POPUP */}
  {/* CHAT CONVERSATION BOX START */}
  <div className="chatbox">
    <span className="comm-msg-pop-clo">
      <i className="fa fa-times" aria-hidden="true" />
    </span>
    <div className="inn">
      <form name="new_chat_form" method="post">
        <div className="s1">
          <img src="images/user/2.jpg" className="intephoto2" alt="" />
          <h4>
            <b className="intename2">Julia</b>,
          </h4>
          <span className="avlsta avilyes">Available online</span>
        </div>
        <div className="s2 chat-box-messages">
          <span className="chat-wel">Start a new chat!!! now</span>
          <div className="chat-con">
            <div className="chat-lhs">Hi</div>
            <div className="chat-rhs">Hi</div>
          </div>
          {/*<span>Start A New Chat!!! Now</span>*/}
        </div>
        <div className="s3">
          <input
            type="text"
            name="chat_message"
            placeholder="Type a message here.."
            required=""
          />
          <button id="chat_send1" name="chat_send" type="submit">
            Send <i className="fa fa-paper-plane-o" aria-hidden="true" />
          </button>
        </div>
      </form>
    </div>
  </div>
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

export default AllProfile