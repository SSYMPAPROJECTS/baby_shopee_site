import { useRef } from "react";
import "./Home.css";
import Footer from "../../components/footer/Footer";
import Nav from "../../components/nav/Nav";
import ImageCard from "../../components/image_card/ImageCard";
import Location from "../../components/loc/Loc";
import banner from "../../assets/images/banners/banner_1.jpg";
import AboutUs from "../../components/about_us/AboutUs";
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';


const Home = () => {
  const locationsRef = useRef(null);
  const aboutRef = useRef(null);
  const categoriesRef = useRef(null);
  const contactsRef = useRef(null);
  
  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="home_container">
      <header className="header">
        <Nav scrollToSection={scrollToSection} sectionRefs={{ aboutRef, locationsRef, categoriesRef, contactsRef }} />
      </header>
      <section className="section1">
  <div className="banner-container">
    {/* Bubbles & Hearts Container */}
    <div className="bubbles">
      {/* Main Bubbles */}
      <div className="bubble" style={{ left: "10%", top: "80%" }}></div>
      <div className="bubble" style={{ left: "30%", top: "85%" }}></div>
      <div className="bubble" style={{ left: "50%", top: "80%" }}></div>
      <div className="bubble" style={{ left: "70%", top: "90%" }}></div>
      <div className="bubble" style={{ left: "85%", top: "75%" }}></div>
      <div className="bubble" style={{ left: "15%", top: "50%" }}></div>
      <div className="bubble" style={{ left: "40%", top: "10%" }}></div>
      <div className="bubble" style={{ left: "65%", top: "20%" }}></div>
      <div className="bubble" style={{ left: "80%", top: "40%" }}></div>
      <div className="bubble" style={{ left: "5%", top: "30%" }}></div>
      
      {/* Additional Smaller Bubbles */}
      <div className="small-bubble" style={{ left: "20%", top: "70%" }}></div>
      <div className="small-bubble" style={{ left: "55%", top: "60%" }}></div>
      <div className="small-bubble" style={{ left: "75%", top: "15%" }}></div>
      <div className="small-bubble" style={{ left: "35%", top: "25%" }}></div>
      <div className="small-bubble" style={{ left: "90%", top: "50%" }}></div>
      
      {/* Heart Elements */}
      <div className="heart" style={{ left: "25%", top: "70%" }}></div>
      <div className="heart" style={{ left: "60%", top: "30%" }}></div>
      <div className="heart" style={{ left: "80%", top: "60%" }}></div>
    </div>

    {/* Content inside the banner */}
    <div className="content">
      <img
        src= {banner}  // Replace with your baby image path
        alt="Baby"
        className="baby-image"
      />
      <h1 className="banner-heading">Welcome to Baby Shopee!</h1>
    </div>
  </div>
 </section>

      <main ref={categoriesRef} className="categories">
        <ImageCard />
      </main>

      <div ref={locationsRef} className="location">
        <Location />
      </div>

      <div ref={aboutRef} className="aboutUs">
        <AboutUs />
      </div>
      <div ref={contactsRef} className="contacts">
      <h2>Contact Us</h2>
      <p>
        For any inquiries or support, feel free to contact us through the
        methods below.
      </p>
      <div className="contact-methods">
        {/* Phone Section */}
        <div className="contact-method">
          <FaPhoneAlt className="contact-icon" />
          <div>
            <strong>Phone:</strong>
            <p>
              <a href="tel:+919629016864">9629016864</a>
              {" | "}
              <a href="tel:+917358936864">7358936864</a>
            </p>
          </div>
        </div>

        {/* WhatsApp Section */}
        <div className="contact-method">
          <FaWhatsapp className="contact-icon" />
          <div>
            <strong>WhatsApp:</strong>
            <p>
              <a
                href="https://wa.me/919629016864"
                target="_blank"
                rel="noopener noreferrer"
              >
                9629016864
              </a>
              {" | "}
              <a
                href="https://wa.me/917358936864"
                target="_blank"
                rel="noopener noreferrer"
              >
                7358936864
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>

      <Footer />
      <div className="orange_container"></div>
    </div>
  );
};

export default Home;
