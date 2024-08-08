'use client'
import React from "react";
import ParticlesBackground from "./ParticlesBackground";


const page = () => {
    return (
        <div className=' content-center'>
            <ParticlesBackground />
            <div className='flex items-center justify-center  text-slate-200 w-full h-full md:px-10 px-5 '>
                {/* Content for the landing page */}
                <p className="animate-fade-right animate-delay-300 animate-once">Escubi</p>
            </div>
        </div>
    );
};

export default page;