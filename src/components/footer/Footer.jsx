import React from "react";
import './Footer.css';
import BS from '../../assets/logos/bbs_logo_png.png';
import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer_container">
      <div className="footer_top">
        <div className="footer_about">
          <img src={BS} alt="Best online baby products shopping" />
          <h2>Baby Shopee</h2>
          <p>"Joy of Parenting"</p>
          <p>Founder & Managing Partner: <strong>Kirthika G Kannan</strong></p>
        </div>

        <div className="footer_contact">
          <h3>Contact Us</h3>
          <p><FaPhone color="#a0e7e5" /> <a href="tel:+917358936864">+91 73589 36864</a></p>
          <p><FaEnvelope color="#a0e7e5" /> <a href="mailto:babyshopeecbe@gmail.com">babyshopeecbe@gmail.com</a></p>
          <p><FaMapMarkerAlt color="#a0e7e5"/> India</p>
        </div>

        <div className="footer_branches">
          <h3>Our Branches</h3>
          <ul>
            <li>Periyanaikenpalayam</li>
            <li>Thudiyalur</li>
            <li>Mettupalayam</li>
            <li>Nehru Nagar</li>
            <li>Annur</li>
          </ul>
        </div>

        <div className="footer_products">
          <h3>Our Products</h3>
          <p>Baby & Mother Care Products</p>
        </div>
      </div>

      <div className="footer_bottom">
        <p>&copy; {new Date().getFullYear()} Baby Shopee. All rights reserved.</p>
        <div className="footer_socials">
          
          <a href="https://www.instagram.com/babyshopee_cbe?igsh=MWV0NzVlanVjZTB2bw%3D%3D&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"><FaInstagram /></a>
  
        </div>
      </div>
     
    </footer>
  );
};

export default Footer;
