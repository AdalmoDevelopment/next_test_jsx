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
                    src="/logo.png"
                    width={300}
                    height={300}
                    alt="Picture of the author"
                    className="animate-fade-right animate-delay-900 animate-once "
                />
                                <Image
                    src="/nombre.png"
                    width={500}
                    height={500}
                    alt="Picture of the author"
                    className="animate-fade-up animate-delay-500 animate-once "
                />

                </div>
        </div>
    );
};

export default page;