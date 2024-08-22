import React from 'react'
import '../../public/css/style.css'
import '../../public/css/ionicons.min.css'
import '../../public/js/jquery.min.js'
import '../../public/js/bootstrap.min.js'
import '../../public/js/main.js'
// import '../../public/js/popper.js'
import { SiInstagram } from "react-icons/si";
import { ImLinkedin } from "react-icons/im";

const Footer = () => {
  return (
    <div>
		<footer className="footer-01">
			<div className="container">
				<div className="row">
					<div className="col-md-6 col-lg-3 mb-4 mb-md-0">
						<h2 className="footer-heading">Colorlib</h2>
						<p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
						<ul className="ftco-footer-social p-0 text-white">
              <li className="ftco-animate"><i class="bi bi-twitter-x"></i></li>
              <li className="ftco-animate"><i class="bi bi-facebook"></i></li>
              <li className="ftco-animate"><SiInstagram /></li>
              <li className="ftco-animate"><ImLinkedin /></li>
            </ul>
					</div>
					<div className="col-md-6 col-lg-3 mb-4 mb-md-0">
						<h2 className="footer-heading">Latest News</h2>
						<div className="block-21 mb-4 d-flex">
              <a className="img mr-4 rounded footer-image-one"></a>
              <div className="text">
                <h3 className="heading"><a href="#">Even the all-powerful Pointing has no control about</a></h3>
                <div className="meta">
                  <div><a href="#"><span className="icon-calendar"></span> Oct. 16, 2019</a></div>
                  <div><a href="#"><span className="icon-person"></span> Admin</a></div>
                  <div><a href="#"><span className="icon-chat"></span> 19</a></div>
                </div>
              </div>
            </div>
            <div className="block-21 mb-4 d-flex">
              <a className="img mr-4 rounded footer-image-two"></a>
              <div className="text">
                <h3 className="heading"><a href="#">Even the all-powerful Pointing has no control about</a></h3>
                <div className="meta">
                  <div><a href="#"><span className="icon-calendar"></span> Oct. 16, 2019</a></div>
                  <div><a href="#"><span className="icon-person"></span> Admin</a></div>
                  <div><a href="#"><span className="icon-chat"></span> 19</a></div>
                </div>
              </div>
            </div>
					</div>
					<div className="col-md-6 col-lg-3 pl-lg-5 mb-4 mb-md-0">
						<h2 className="footer-heading">Quick Links</h2>
						<ul className="list-unstyled">
              <li><a href="#" className="py-2 d-block">Home</a></li>
              <li><a href="#" className="py-2 d-block">About</a></li>
              <li><a href="#" className="py-2 d-block">Services</a></li>
              <li><a href="#" className="py-2 d-block">Works</a></li>
              <li><a href="#" className="py-2 d-block">Blog</a></li>
              <li><a href="#" className="py-2 d-block">Contact</a></li>
            </ul>
					</div>
					<div className="col-md-6 col-lg-3 mb-4 mb-md-0">
						<h2 className="footer-heading">Have a Questions?</h2>
						<div className="block-23 mb-3">
              <ul>
                <li><span className="icon ion-ios-pin"></span><span className="text">203 Fake St. Mountain View, San Francisco, California, USA</span></li>
                <li><a href="#"><span className="icon ion-ios-call"></span><span className="text">+2 392 3929 210</span></a></li>
                <li><a href="#"><span className="icon ion-ios-send"></span><span className="text">info@yourdomain.com</span></a></li>
              </ul>
            </div>
					</div>
				</div>
				<div className="row mt-5">
        </div>
			</div>
		</footer>
    </div>
  )
}

export default Footer
