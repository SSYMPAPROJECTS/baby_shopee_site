import React from 'react';
import './AboutUs.css';
import mp from '../../assets/images/mp.jpg';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      {/* Our Story Section */}
      <div className="company-history">
        <h2>Our Story</h2>
        <p>
          In 2015, we launched "Baby Shopee" in the outskirts of Coimbatore to cater to newborns and new mothers. With the support of our customers and persistent efforts, we've expanded to five locations in and around Coimbatore, with plans for more in the future.
        </p>
        <p>
          Our goal is to provide grandparents and new parents with a joyful parenting experience. We prioritize quality and availability across all our product categories to ensure customer satisfaction.
        </p>
        <p>
          To enhance our offerings, we have partnered with the brand "ZIVA," aiming to bring superior products and benefits to our customers.
        </p>
      </div>

      {/* Founder Name */}
      <div className="founder-name">
        <h2>Founder & Managing Partner</h2>
        <p><strong>Kirthika G Kannan</strong></p>
      </div>

      {/* Message and Team Member Section */}
      <div className="message-team-container">
        {/* Message from the Managing Partner */}
        <div className="founder-message">
          <h2>Message from the Managing Partner</h2>
          <p>
            We want to express our heartfelt gratitude for the tremendous support you've given to "Baby Shopee." Your trust and loyalty have been instrumental in our growth, and we are thrilled to have you as part of our community.
          </p>
          <p>
            We look forward to continuing to serve you with the best products and services. If you have any questions or need assistance, please don't hesitate to contact me at 9952806864.
          </p>
          <p>Warm Regards,</p>
        </div>

        {/* Team Member Section */}
        <div className="team-member">
          <div className="team-member-img-container">
            <img src={mp} alt="S. Govindasamy" />
          </div>
          <p><strong>S. Govindasamy</strong><br />Managing Partner</p>
          <div className="contact-info">
            <p>Contact: 96290 16864</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
