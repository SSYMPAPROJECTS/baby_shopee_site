import React from "react";
import { useNavigate } from "react-router-dom";
import "./ImageCard.css";
import img1 from '../../assets/images/banners/clothing_banner.jpg';
import img2 from '../../assets/images/banners/baby_access_banner.jpg';
import img3 from '../../assets/images/banners/baby_bed_banner.jpg';
import img4 from '../../assets/images/banners/new_born_ess_banner.jpg';
import img5 from '../../assets/images/banners/baby_gear_banner.jpg';
import img6 from '../../assets/images/banners/baby_care_banner.jpg';

const images = [
    { id: "clothing_banner", src: img1, title: "Baby Clothing" },
    { id: "baby_access_banner", src: img2, title: "Baby Accessories" },
    { id: "baby_bed_banner", src: img3, title: "Baby Bedding" },
    { id: "new_born_ess_banner", src: img4, title: "Newborn Essentials" },
    { id: "baby_gear_banner", src: img5, title: "Baby Gear" },
    { id: "baby_care_banner", src: img6, title: "Baby Care Products" }
];

const ImageCard = () => {
    const navigate = useNavigate();

    const handleClick = (id) => {
        navigate(`/product/${id}`);
    };

    return (
        <div className="image-card-container">
            <h2 className="category-heading">Categories</h2>
            <div className="image-grid">
                {images.map((image) => (
                    <div key={image.id} className="image-card" onClick={() => handleClick(image.id)}>
                        <img src={image.src} alt={image.title} />
                        <p>{image.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageCard;
