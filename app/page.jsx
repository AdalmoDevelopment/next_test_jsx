'use client'
import React, { useEffect } from "react";
import ParticlesBackground from "./ui/components/ParticlesBackground";
import Hero from "./ui/components/Hero";
import NavBar from "./ui/components/NavBar";
 import Description from "./ui/components/Description";

const Page = () => {
    useEffect(()=>{
        // When the user scrolls down 20px from the top of the document, slide down the navbar
        window.onscroll = function() {scrollFunction()};

        function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("navbar").style.top = "0";
        } else {
            document.getElementById("navbar").style.top = "-100px";
        }
        }
    },[])

    return (
        <div className='flex flex-col overflow-x-hidden items-center justify-center  '>
            <ParticlesBackground/>
            <NavBar/> 
            <Hero/>
            <Description/>
        </div>
    );
};

export default Page;

