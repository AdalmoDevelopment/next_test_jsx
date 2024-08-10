'use client'
import React from "react";
import ParticlesBackground from "./ParticlesBackground";

const page = () => {
    return (
        <div className='w-full h-screen flex items-center justify-center'>
            <ParticlesBackground />
            <div className='w-full h-full flex items-center justify-center md:px-10 px-5'>
                {/* Content for the landing page */}
                <p className="animate-fade-right animate-delay-300 animate-once text-center">Escubi</p>
            </div>
        </div>
    );
};

export default page;