import Image from "next/image";

const Hero = () => {
    return (
        <div className='w-screen h-screen items-center content-center justify-center md:px-10 px-5 md:flex '>
        <Image
            src="/Isotipo BT.svg"
             width={300}
            height={300}
            alt="escubi"

            className="md:animate-fade-right mb-5 animate-fade-down animate-delay-900 animate-once "
        />
        <Image
            src="/Logotipo BT.svg"  
            width={600}
            height={600}
            alt="escubi"
            className="animate-fade-up animate-delay-500 animate-once md:ml-10 "
        />
    </div>
    )
}

export default Hero;