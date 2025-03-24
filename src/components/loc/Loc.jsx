import React from "react";
import { useNavigate } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";
import "./Loc.css";

// Locations Array with New Location Added
const locations = [
    { id: "periyanaickenpalayam", name: "Periyanaickenpalayam" },
    { id: "thudiyalur", name: "Thudiyalur" },
    { id: "mettupalayam", name: "Mettupalayam" },
    { id: "nehrunagar", name: "Nehrunagar" },
    { id: "annur", name: "Annur" }, // ✅ Added Annur Location
];

const Loc = () => {
    const navigate = useNavigate();

    return (
        <div className="locations-container p-6 bg-gradient-to-r from-teal-100 to-pink-100 min-h-screen flex flex-col items-center">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-transparent mb-12 text-center">
                Our Locations
            </h1>
            <div className="locations-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {locations.map((loc) => (
                    <div
                        key={loc.id}
                        className="location-card bg-gradient-to-r from-teal-200 to-pink-200 text-gray-800 p-8 rounded-3xl shadow-lg transform transition-all duration-500 hover:scale-105 cursor-pointer"
                        onClick={() => navigate(`/location/${loc.id}`)}
                    >
                        <div className="icon-container mb-6 text-5xl text-pink-500">
                            <FaMapMarkerAlt />
                        </div>
                        <h2 className="text-xl font-semibold text-center">{loc.name}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Loc;
