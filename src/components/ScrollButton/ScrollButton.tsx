'use client'
import React, { useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
// import { Button } from "./Styles";

const ScrollButton = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true);
        } else if (scrolled <= 300) {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
            /* you can also use 'auto' behaviour
         in place of 'smooth' */
        });
    };

    window.addEventListener("scroll", toggleVisible);
    console.log(visible);

    return (
        <button className="bg-black text-blue">
            <FaArrowCircleUp className="text-blue-600"
                onClick={scrollToTop}
                style={{ display: visible ? "inline" : "none" }}
            />
            Soykot 
        </button>
    );
};

export default ScrollButton;