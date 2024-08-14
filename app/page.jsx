'use client'
import React, { useEffect } from "react";
import ParticlesBackground from "./ParticlesBackground";
import Image from 'next/image'
// import NavBar from "./navbar";
// import TemplateTW from "./templatetw";

const Page = () => {
    // useEffect(()=>{
    //     // When the user scrolls down 20px from the top of the document, slide down the navbar
    //     window.onscroll = function() {scrollFunction()};

    //     function scrollFunction() {
    //     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    //         document.getElementById("navbar").style.top = "0";
    //     } else {
    //         document.getElementById("navbar").style.top = "-50px";
    //     }
    //     }
    // },[])

    return (
        <div className='flex flex-col overflow-x-hidden items-center justify-center '>
            <ParticlesBackground className='animate-fade animate-delay-900' />
            {/* <NavBar/> */}
                <div className='w-screen  h-screen flex items-center justify-center md:px-10 px-5 '>
                
                    {/* Content for the landing page */}
                    {/* <img src={require('../public/react_logo-512.webp')} />  */}
                    <Image
                        src="/Isotipo BT.svg"
                        width={300}
                        height={300}
                        className="animate-fade-right animate-delay-900 animate-once "
                    />
                    <Image
                        src="/Logotipo BT.svg"
                        width={600}
                        height={600}
                        className="animate-fade-up animate-delay-500 animate-once ml-10"
                    />
                    
                    
                </div>
                {/* <div className="w-full h-full flex flex-col items-center justify-center md:px-10 px-5 ">
                <TemplateTW/>
                <TemplateTW/>
                <TemplateTW/>
                </div> */}
        </div>
    );
};

export default Page;

