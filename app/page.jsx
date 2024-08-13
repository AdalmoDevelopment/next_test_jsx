'use client'
import React from "react";
import ParticlesBackground from "./ParticlesBackground";
import Image from 'next/image'

const page = () => {
    return (
        <div className='w-full h-screen flex items-center justify-center'>
            <ParticlesBackground />
            <div className='w-full h-full flex items-center justify-center md:px-10 px-5'>
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
        </div>
    );
};

export default page;