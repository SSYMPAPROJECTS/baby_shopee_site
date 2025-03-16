import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import "./Location.css";
import logo from "../../assets/logos/bbs_logo_png.png";

const locationData = {
  periyanaickenpalayam: {
    name: "Periyanaickenpalayam",
    address: "80, JB Complex, Opp to Trends, MTP Road",
    city: "Coimbatore",
    pincode: "641020",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.833223887516!2d76.987654!3d11.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba95b66cbbf9aab%3A0xd2f3a93c8e5e0c8f!2sPeriyanaickenpalayam%2C%20Coimbatore%2C%20Tamil%20Nadu%20641020!5e0!3m2!1sen!2sin!4v1699999999999",
  },
  thudiyalur: {
    name: "Thudiyalur",
    address: "33/6, Near Pantaloons, VKL Nagar, MTP Road",
    city: "Coimbatore",
    pincode: "641034",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.812345678901!2d76.876543!3d11.034567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9abcdef123456%3A0x789abcdef1234567!2sThudiyalur%2C%20Coimbatore%2C%20Tamil%20Nadu%20641034!5e0!3m2!1sen!2sin!4v1699999999999",
  },
  mettupalayam: {
    name: "Mettupalayam",
    address: "Shop No. 196/3, Next to ESAF Bank, Mettupalayam Road",
    city: "Mettupalayam",
    pincode: "641301",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.823456789012!2d76.765432!3d11.223344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9abcdef654321%3A0xabcdef9876543210!2sMettupalayam%2C%20Tamil%20Nadu%20641301!5e0!3m2!1sen!2sin!4v1699999999999",
  },
  nehrunagar: {
    name: "Nehrunagar",
    address: "Next to Airtel Showroom, Near KMCH Back Entrance",
    city: "Coimbatore",
    pincode: "641014",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.298399398478!2d76.95590601403228!3d11.016844792004242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba858b191e6c4f5%3A0x3d3c4b2c3a3b2e4d!2sCoimbatore%2C%20Tamil%20Nadu%2C%20India!5e0!3m2!1sen!2sus!4v1699999999999",
  },
};

const Location = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = locationData[id];

  if (!location) {
    return <h2>Location Not Found</h2>;
  }

  // Get the keys of all locations except the current one.
  const otherLocations = Object.keys(locationData).filter((key) => key !== id);

  return (
    <div className="loc-details-container">
      {/* Logo */}
      <div className="logo-container">
        <img src={logo} alt="Company Logo" className="logo" />
      </div>

      {/* Selected Location */}
      <h1>{location.name}</h1>
      <p>
        <strong>Address:</strong> {location.address}
      </p>
      <p>
        <strong>City:</strong> {location.city}
      </p>
      <p>
        <strong>Pincode:</strong> {location.pincode}
      </p>

      <iframe
        src={location.mapUrl}
        width="100%"
        height="400"
        style={{ border: 0, borderRadius: "10px" }}
        allowFullScreen
        loading="lazy"
      ></iframe>

      {/* Button that returns to the locations (Home) page */}
      <button className="back-button" onClick={() => navigate("/")}>
        ⬅ Back to Our Locations
      </button>

      {/* Other Locations List */}
      <h2>Other Locations</h2>
      <ul className="location-list">
        {otherLocations.map((locKey) => (
          <li key={locKey}>
            <Link to={`/location/${locKey}`}>
              {locationData[locKey].name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Location;
