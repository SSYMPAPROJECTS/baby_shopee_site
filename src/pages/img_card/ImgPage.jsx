import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./ImgPage.css";
import img1 from '../../assets/images/banners/clothing_banner.jpg';
import img2 from '../../assets/images/banners/baby_access_banner.jpg';
import img3 from '../../assets/images/banners/baby_bed_banner.jpg';
import img4 from '../../assets/images/banners/new_born_ess_banner.jpg';
import img5 from '../../assets/images/banners/baby_gear_banner.jpg';
import img6 from '../../assets/images/banners/baby_care_banner.jpg';
import c_1 from '../../assets/images/clothing/c_1.webp';
import c_2 from '../../assets/images/clothing/c_2.webp';
import c_3 from '../../assets/images/clothing/c_3.webp';
import c_4 from '../../assets/images/clothing/c_4.webp';
import c_5 from '../../assets/images/clothing/c_5.webp';
import c_6 from '../../assets/images/clothing/c_6.webp';
import c_7 from '../../assets/images/clothing/c_7.webp';
import c_8 from '../../assets/images/clothing/c_8.webp';
import ba_1 from '../../assets/images/baby_access/ba_1.jpg';
import ba_2 from '../../assets/images/baby_access/ba_2.webp';
import ba_3 from '../../assets/images/baby_access/ba_3.webp';
import ba_4 from '../../assets/images/baby_access/ba_4.webp';
import ba_5 from '../../assets/images/baby_access/ba_5.webp';
import ba_6 from '../../assets/images/baby_access/ba_6.webp';
import ba_7 from '../../assets/images/baby_access/ba_7.webp';
import ba_8 from '../../assets/images/baby_access/ba_8.webp';
import ba_9 from '../../assets/images/baby_access/ba_9.webp';
import ba_10 from '../../assets/images/baby_access/ba_10.webp';
import ba_11 from '../../assets/images/baby_access/ba_11.webp';
import bb_1 from '../../assets/images/baby_bath/bb_1.webp';
import bb_2 from '../../assets/images/baby_bath/bb_2.webp';
import bb_3 from '../../assets/images/baby_bath/bb_3.webp';
import bb_4 from '../../assets/images/baby_bath/bb_4.webp';
import bb_5 from '../../assets/images/baby_bath/bb_5.webp';
import b_1 from '../../assets/images/bed_items/b_1.webp';
import b_2 from '../../assets/images/bed_items/b_2.webp';
import b_3 from '../../assets/images/bed_items/b_3.webp';
import b_4 from '../../assets/images/bed_items/b_4.webp';
import b_5 from '../../assets/images/bed_items/b_5.webp';
import b_6 from '../../assets/images/bed_items/b_6.webp';
import be_1 from '../../assets/images/new_born_essentials/be_1.webp';
import be_2 from '../../assets/images/new_born_essentials/be_2.webp';
import be_3 from '../../assets/images/new_born_essentials/be_3.webp';
import be_4 from '../../assets/images/new_born_essentials/be_4.webp';
import be_5 from '../../assets/images/new_born_essentials/be_5.webp';
import be_6 from '../../assets/images/new_born_essentials/be_6.webp';
import be_7 from '../../assets/images/new_born_essentials/be_7.webp';
import be_8 from '../../assets/images/new_born_essentials/be_8.webp';
import bg_1 from '../../assets/images/baby_gear/bg_1.webp';
import bg_2 from '../../assets/images/baby_gear/bg_2.webp';
import bg_3 from '../../assets/images/baby_gear/bg_3.webp';
import bg_4 from '../../assets/images/baby_gear/bg_4.webp';
import bg_5 from '../../assets/images/baby_gear/bg_5.webp';
import bg_6 from '../../assets/images/baby_gear/bg_6.webp';
import bg_7 from '../../assets/images/baby_gear/bg_7.webp';
import bg_8 from '../../assets/images/baby_gear/bg_8.webp';
import bg_9 from '../../assets/images/baby_gear/bg_9.webp';
import bg_10 from '../../assets/images/baby_gear/bg_10.webp';
import bc_1 from '../../assets/images/baby_care/bc_1.webp';
import bc_2 from '../../assets/images/baby_care/bc_2.webp';
import bc_3 from '../../assets/images/baby_care/bc_3.webp';
import bc_4 from '../../assets/images/baby_care/bc_4.webp';
import bc_5 from '../../assets/images/baby_care/bc_5.webp';
import bc_6 from '../../assets/images/baby_care/bc_6.webp';
import bc_7 from '../../assets/images/baby_care/bc_7.webp';
import d_1 from '../../assets/images/diapers/d_1.webp';
import d_2 from '../../assets/images/diapers/d_2.webp';
import d_3 from '../../assets/images/diapers/d_3.webp';
import d_4 from '../../assets/images/diapers/d_4.webp';

const imageData = {
    "clothing_banner": { 
        src: img1, 
        title: "Baby Clothing", 
        description: "Trendy and comfortable clothing for babies and kids.",
        price: "₹890 onwards",
        extra: [
            { img: c_1, title: "Boy Baby Party Wear", desc: "Elegant and stylish outfit for special occasions." },
            { img: c_2, title: "Baby Girl Party Wear", desc: "Beautifully designed dress for festive celebrations." },
            { img: c_3, title: "Baby Boy Romper", desc: "Comfortable and trendy romper for everyday wear." },
            { img: c_4, title: "Baby Regular Wear", desc: "Soft and breathable outfit for daily comfort." },
            { img: c_5, title: "Baby Girl Romper", desc: "Adorable and cozy romper for your little one." },
            { img: c_6, title: "Baby Girl Ethnic Wear", desc: "Traditional ethnic outfit perfect for cultural events." },
            { img: c_7, title: "Baby Boy Frock-Style", desc: "Unique frock-style attire for a stylish look." },
            { img: c_8, title: "Baby Girl Frock", desc: "Charming and elegant frock for any occasion." },
        ]
        
    },
    "baby_access_banner": { 
        src: img2, 
        title: "Baby Accessories", 
        description: "Essential accessories for babies.",
        price: "$5 onwards",
        extra: [
            { img: ba_1, title: "Baby Clothing", desc: "Trendy outfits.", price: "$10 onwards" },
            { img: ba_2, title: "Newborn Essentials", desc: "Newborn care products.", price: "$8 onwards" },
            { img: ba_3, title: "Baby Clothing", desc: "Trendy outfits.", price: "$10 onwards" },
            { img: ba_4, title: "Newborn Essentials", desc: "Newborn care products.", price: "$8 onwards" },
            { img: ba_5, title: "Baby Clothing", desc: "Trendy outfits.", price: "$10 onwards" },
            { img: ba_6, title: "Newborn Essentials", desc: "Newborn care products.", price: "$8 onwards" },
            { img: ba_7, title: "Baby Clothing", desc: "Trendy outfits.", price: "$10 onwards" },
            { img: ba_8, title: "Newborn Essentials", desc: "Newborn care products.", price: "$8 onwards" },
            { img: ba_9, title: "Baby Clothing", desc: "Trendy outfits.", price: "$10 onwards" },
            { img: ba_10, title: "Newborn Essentials", desc: "Newborn care products.", price: "$8 onwards" },
            { img: ba_11, title: "Baby Clothing", desc: "Trendy outfits.", price: "$10 onwards" },
        ]
    },
    "baby_bed_banner": { 
        src: img3, 
        title: "Baby Bedding",
        description: "Soft and cozy bedding sets for infants.",
        price: "$20 onwards",
        extra: [
            { img: b_1, title: "Baby Gear", desc: "Strollers and carriers.", price: "$30 onwards" },
            { img: b_2, title: "Baby Care Products", desc: "Safe skincare.", price: "$15 onwards" },
            { img: b_3, title: "Baby Care Products", desc: "Safe skincare.", price: "$15 onwards" },
            { img: b_4, title: "Baby Care Products", desc: "Safe skincare.", price: "$15 onwards" },
            { img: b_5, title: "Baby Care Products", desc: "Safe skincare.", price: "$15 onwards" },
            { img: b_6, title: "Baby Care Products", desc: "Safe skincare.", price: "$15 onwards" },
        ]
    },
    "new_born_ess_banner": { 
        src: img4, 
        title: "Newborn Essentials",
        description: "Everything your newborn needs.",
        price: "$8 onwards",
        extra: [
            { img: be_1, title: "Baby Clothing", desc: "Adorable baby wear.", price: "$10 onwards" },
            { img: be_2, title: "Baby Accessories", desc: "Stylish add-ons.", price: "$5 onwards" },
            { img: be_3, title: "Baby Clothing", desc: "Adorable baby wear.", price: "$10 onwards" },
            { img: be_4, title: "Baby Accessories", desc: "Stylish add-ons.", price: "$5 onwards" },
            { img: be_5, title: "Baby Clothing", desc: "Adorable baby wear.", price: "$10 onwards" },
            { img: be_6, title: "Baby Accessories", desc: "Stylish add-ons.", price: "$5 onwards" },
            { img: be_7, title: "Baby Clothing", desc: "Adorable baby wear.", price: "$10 onwards" },
            { img: be_8, title: "Baby Accessories", desc: "Stylish add-ons.", price: "$5 onwards" },
        ]
    },
    "baby_gear_banner": { 
        src: img5, 
        title: "Baby Gear",
        description: "Quality strollers, carriers, and more.",
        price: "$30 onwards",
        extra: [
            { img: bg_1, title: "Baby Bedding", desc: "Comfortable bedding.", price: "$20 onwards" },
            { img: bg_2, title: "Baby Care Products", desc: "Skin-friendly care.", price: "$15 onwards" },
            { img: bg_3, title: "Baby Bedding", desc: "Comfortable bedding.", price: "$20 onwards" },
            { img: bg_4, title: "Baby Care Products", desc: "Skin-friendly care.", price: "$15 onwards" },
            { img: bg_5, title: "Baby Bedding", desc: "Comfortable bedding.", price: "$20 onwards" },
            { img: bg_6, title: "Baby Care Products", desc: "Skin-friendly care.", price: "$15 onwards" },
            { img: bg_7, title: "Baby Bedding", desc: "Comfortable bedding.", price: "$20 onwards" },
            { img: bg_8, title: "Baby Care Products", desc: "Skin-friendly care.", price: "$15 onwards" },
            { img: bg_9, title: "Baby Bedding", desc: "Comfortable bedding.", price: "$20 onwards" },
            { img: bg_10, title: "Baby Care Products", desc: "Skin-friendly care.", price: "$15 onwards" },
        ]
    },
    "baby_care_banner": {
        src: img6,
        title: "Baby Care Products",
        description: "Gentle and safe baby care essentials.",
        price: "$15 onwards",
        extra: [
            { img: bc_1, title: "Baby Clothing", desc: "Soft baby wear.", price: "$10 onwards" },
            { img: bc_2, title: "Baby Accessories", desc: "Trendy accessories.", price: "$5 onwards" },
            { img: bc_3, title: "Baby Clothing", desc: "Soft baby wear.", price: "$10 onwards" },
            { img: bc_4, title: "Baby Accessories", desc: "Trendy accessories.", price: "$5 onwards" },
            { img: bc_5, title: "Baby Clothing", desc: "Soft baby wear.", price: "$10 onwards" },
            { img: bc_6, title: "Baby Accessories", desc: "Trendy accessories.", price: "$5 onwards" },
            { img: bc_7, title: "Baby Clothing", desc: "Soft baby wear.", price: "$10 onwards" },
            { img: d_1, title: "Baby Accessories", desc: "Trendy accessories.", price: "$5 onwards" },
            { img: d_2, title: "Baby Clothing", desc: "Soft baby wear.", price: "$10 onwards" },
            { img: d_3, title: "Baby Accessories", desc: "Trendy accessories.", price: "$5 onwards" },
            { img: d_4, title: "Baby Clothing", desc: "Soft baby wear.", price: "$10 onwards" },
            { img: bb_1, title: "Baby Accessories", desc: "Trendy accessories.", price: "$5 onwards" },
            { img: bb_2, title: "Baby Clothing", desc: "Soft baby wear.", price: "$10 onwards" },
            { img: bb_3, title: "Baby Accessories", desc: "Trendy accessories.", price: "$5 onwards" },
            { img: bb_4, title: "Baby Clothing", desc: "Soft baby wear.", price: "$10 onwards" },
            { img: bb_5, title: "Baby Accessories", desc: "Trendy accessories.", price: "$5 onwards" },
        ]
    },
};

const ImgPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const image = imageData[id];
    console.log(motion);
    
    if (!image) {
        return (
            <motion.div 
                className="not-found"
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 0.5 }}
            >
                <h2>Oops! Image not found.</h2>
                <motion.button 
                    className="back-button"
                    onClick={() => navigate("/")}
                    whileHover={{ scale: 1.05 }}
                >
                    ⬅ Back to Home
                </motion.button>
            </motion.div>
        );
    }

    return (
      
        <div className="details-container">
              
            <motion.h1 
                initial={{ opacity: 0, y: -50 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5 }}
            >
                {image.title}
            </motion.h1>

            <motion.img 
                src={image.src} 
                alt={image.title} 
                className="main-image" 
                loading="lazy"
                initial={{ opacity: 0, scale: 0.8 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ duration: 0.6 }}
            />

            <motion.p 
                className="description" 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.7 }}
            >
                {image.description} - <strong>{image.price}</strong>
            </motion.p>

            <motion.h3 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.8 }}
            >
                Our Products
            </motion.h3>

            <div className="extra-images">
                {image.extra.map((item, index) => (
                    <motion.div 
                        key={index} 
                        className="extra-item"
                        initial={{ opacity: 0, x: -50 }} 
                        animate={{ opacity: 1, x: 0 }} 
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                    >
                        <img src={item.img} alt={item.title} loading="lazy" />
                        <h4>{item.title}</h4>
                        <p>{item.desc} - <strong>{item.price}</strong></p>
                    </motion.div>
                ))}
            </div>

            <motion.button 
                className="back-button" 
                onClick={() => navigate(-1)}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
            >
                ⬅ Back to Categories
            </motion.button>
        </div>
    );
};

export default ImgPage;
