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
    "clothing": { 
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
    "baby_access": { 
        src: img2, 
        title: "Baby Accessories", 
        description: "Essential accessories for babies.",
        price: "₹700 onwards",
        extra: [
            { img: ba_1, title: "Medicine Feeder", desc: "Safe and easy way to administer medicine to babies." },
            { img: ba_2, title: "Feeding Accessories", desc: "Essential tools for a smooth feeding experience." },
            { img: ba_3, title: "Baby Thermometer", desc: "Accurate temperature measurement for baby care." },
            { img: ba_4, title: "Baby Teether", desc: "Soothing teether to relieve teething discomfort." },
            { img: ba_5, title: "Baby Straw Brush", desc: "Designed to clean baby straws with ease." },
            { img: ba_6, title: "Baby Nail Clipper", desc: "Gentle and safe nail trimming for infants." },
            { img: ba_7, title: "Baby Bottle Brush", desc: "Effective cleaning brush for baby bottles." },
            { img: ba_8, title: "Dallue", desc: "Soft and comforting newborn care product." },
            { img: ba_9, title: "Baby Pacifier", desc: "Soothing pacifier for babies' comfort and relaxation." },
            { img: ba_10, title: "Baby Nose Cleaner", desc: "Gentle suction tool for clearing nasal congestion." },
            { img: ba_11, title: "Silicone Baby Spoon", desc: "Soft and safe spoon for baby feeding." },
        ]        
    },
    "baby_bed": { 
        src: img3, 
        title: "Baby Bedding",
        description: "Soft and cozy bedding sets for infants.",
        price: "₹890 onwards",
        extra: [
            { img: b_1, title: "Mosquito Net", desc: "Protects babies from mosquitoes and insects while sleeping." },
            { img: b_2, title: "Muslin Swaddle", desc: "Soft and breathable swaddle for newborn comfort." },
            { img: b_3, title: "Wrapping", desc: "Cozy and gentle wrap to keep babies warm and secure." },
            { img: b_4, title: "Baby Sleeping Bag", desc: "Comfortable and safe sleeping bag for sound sleep." },
            { img: b_5, title: "Blanket", desc: "Ultra-soft and warm blanket for babies." },
            { img: b_6, title: "Soft Mattress & Pillows", desc: "Plush and supportive bedding set for a peaceful rest." },
        ]        
    },
    "new_born_ess": { 
        src: img4, 
        title: "Newborn Essentials",
        description: "Everything your newborn needs.",
        price: "₹1500 onwards",
        extra: [
            { img: be_1, title: "Wooden Baby Cradle", desc: "Traditional and sturdy wooden cradle for babies." },
            { img: be_2, title: "Waterproof Bed Protector", desc: "Soft and absorbent protector to keep the bed dry." },
            { img: be_3, title: "Cap Towel", desc: "Hooded towel to keep babies warm after a bath." },
            { img: be_4, title: "Newborn Sweater Set", desc: "Cozy and warm sweater set for newborns." },
            { img: be_5, title: "Cap, Mitten, and Booties", desc: "Soft and comfortable winter essentials for babies." },
            { img: be_6, title: "Bath Towel", desc: "Gentle and ultra-soft towel for baby bath time." },
            { img: be_7, title: "Newborn Jabla", desc: "Lightweight and breathable cotton jabla for infants." },
            { img: be_8, title: "Full Set Overview", desc: "Complete newborn essentials in a single package." },
        ]        
    },
    "baby_gear": { 
        src: img5, 
        title: "Baby Gear",
        description: "Quality strollers, carriers, and more.",
        price: "₹500 onwards",
        extra: [
            { img: bg_1, title: "Baby Carry Cot", desc: "Soft and secure carry cot for ultimate comfort." },
            { img: bg_2, title: "Baby Pram", desc: "Smooth and safe ride for your little one." },
            { img: bg_3, title: "Bike for Kids", desc: "Fun and sturdy bike designed for young riders." },
            { img: bg_4, title: "Educational Toys", desc: "Engaging toys to boost learning and creativity." },
            { img: bg_5, title: "Soft Toys for Babies", desc: "Cuddly and plush toys for endless fun." },
            { img: bg_6, title: "Car for Kids", desc: "Exciting toy car for playful adventures." },
            { img: bg_7, title: "Baby Bedding", desc: "Cozy and breathable bedding for sound sleep." },
            { img: bg_8, title: "Baby Ride-On Toy", desc: "Interactive ride-on toy for active toddlers." },
            { img: bg_9, title: "Baby Tricycle", desc: "Durable and safe tricycle for little explorers." },
            { img: bg_10, title: "Baby Walker", desc: "Supportive walker to help babies take their first steps." },
        ]
    },
    "baby_care": {
        src: img6,
        title: "Baby Care Products",
        description: "Gentle and safe baby care essentials.",
        price: "₹577 onwards",
        extra: [
            { img: bc_1, title: "Cetaphil Brand", desc: "Gentle skincare essentials for babies." },
            { img: bc_2, title: "Chicco Brand", desc: "High-quality baby care products and accessories." },
            { img: bc_3, title: "Himalayas Brand", desc: "Herbal and natural baby care solutions." },
            { img: bc_4, title: "Mee Mee Brand", desc: "Trusted baby care products for daily use." },
            { img: bc_5, title: "Sample Set 1", desc: "Curated baby essentials for comfort and care." },
            { img: bc_6, title: "Sample Set 2", desc: "A mix of must-have baby accessories." },
            { img: bc_7, title: "Sebamed Brand", desc: "Dermatologist-tested skincare for babies." },
            { img: d_1, title: "Baby Diapers", desc: "Soft and absorbent diapers for babies." },
            { img: d_2, title: "Bamboo Eco-Friendly Baby Diaper", desc: "Sustainable and skin-friendly diaper choice." },
            { img: d_3, title: "Disposable Diaper", desc: "Convenient and hygienic disposable diaper." },
            { img: d_4, title: "Reusable Diaper", desc: "Eco-friendly washable diaper for babies." },
            { img: bb_1, title: "Baby Shampoo Hat", desc: "Helps protect baby's eyes during bath time." },
            { img: bb_2, title: "Baby Wipes", desc: "Soft and gentle wipes for baby care." },
            { img: bb_3, title: "Bath Time Cap", desc: "Comfortable cap for a fun bath experience." },
            { img: bb_4, title: "Baby Shower Cap", desc: "Waterproof cap to keep water out of eyes." },
            { img: bb_5, title: "Baby Bath Duck Toy", desc: "Cute and fun floating toy for bath time." },
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
