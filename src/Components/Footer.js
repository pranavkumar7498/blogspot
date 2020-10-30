import React from "react";
import '../CSS/Footer.css';
import { BrowserRouter as Router, Route, Switch,Link } from "react-router-dom";


const Footer = () => {
  return (
    <React.Fragment>
      <Router>
          
    <div class="footer-dark">
    <footer>

        <div class="container">
            <div class="row">
                <div class="col-md-3 item">
                    <h3>Services</h3>
                    <ul>
                        <li><Link to="/about">About us</Link></li>
                        <li><Link to="/feedback">Feedback</Link></li>
                        <li><Link to="/contact">Contact us</Link></li>
                    </ul>
                </div>
                <div class="col-md-3 item">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><Link to="/sitemap">Sitemaps</Link></li>
                        <li><Link to="/policy">Privacy Policy</Link></li>
                        <li><Link to="/terms">Terms and Condition</Link></li>
                    </ul>
                </div>
                <div class="col-md-3 item">
                    <h3>Company</h3>
                    <ul>
                        <li><Link to="/advertise">Advertise</Link></li>
                        <li><Link to="/team">Team</Link></li>
                        <li><Link to="/career">Career</Link></li>
                    </ul>
                </div>
                <div class="col-md-3 item text">
                    <h3>Blogspot.com</h3>
                    <p>Blogspot is an open platform. Here readers come to find insightful and dynamic thinking and bring new ideas to the surface.</p>
                    
                </div>
                
                <div class="col item social"><a href="#"><i class="fa fa-facebook"></i></a><a href="#"><i class="fa fa-twitter"></i></a><a href="#"><i class="fa fa-youtube"></i></a><a href="#"><i class="fa fa-instagram"></i></a><a href="#"><i class="fa fa-google"></i></a></div>
            </div>
            <p class="copyright">Blogspot.com © 2020</p>
        </div>
    </footer>
   
</div>

</Router>
</React.Fragment>
  );
}

export default Footer;