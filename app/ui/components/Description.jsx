import React, {useRef} from "react";
import Image from "next/image";
import { useIsVisible } from "./functions/FadeAnimationTW";

const Description = () => {
  const ZigZagSection = ({ title, description, reverse, imgRoute }) => {
    const ref = useRef();
    const isVisible = useIsVisible(ref);
  
    return (
            // ${reverse ? "animate-fade-right" : "animate-fade-left"}
      <div
        ref={ref}
        className={`flex flex-col md:flex-row ${reverse ? "md:flex-row-reverse" : ""} my-8 transition-opacity  ease-in duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
      >
        <div className="md:w-1/2 p-4">
          <h2 className="text-2xl font-bold text-white">{title}</h2>
          <p className="mt-2 text-gray-300">{description}</p>
        </div>
        <div className="md:w-1/2 p-4 flex items-center justify-center">
          <div className={`w-full ${!imgRoute ? "bg-gray-600" : ""} h-40 rounded-lg flex items-center justify-center hover:scale-125 ease-in-out transition delay-100`}>
            {imgRoute ? 
              <Image src={imgRoute}            
                width={500}
                height={500}
                alt="escubi"
                className="rounded-lg"
              />
              :
              <span className="text-gray-400">Imagen / Gráfico</span>
            }
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={`z-10 md:w-4/6 mx-auto transition-opacity  ease-in duration-1000 `}>
      <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-[] bg-opacity-75 antialiased">
        <div className="px-4 mx-auto max-w-screen-xl">
          <header className="mb-16">
            <h1 className="text-3xl font-extrabold leading-tight lg:text-4xl text-white">
              Bienvenido a <span className="text-baleatech-blue">BaleaTech</span>
            </h1>
            <p className="mt-4 text-gray-300">
              Donde nace el compromiso tecnológico con las islas 
            </p>
          </header>

          <article className="mx-auto w-full  format format-sm sm:format-base lg:format-lg format-invert">
            <ZigZagSection
              title="Innovación Local"
              description="Impulsamos el desarrollo tecnológico en Baleares mediante soluciones personalizadas y sostenibles."
              imgRoute="/FFlex-ScreenShoot.png"
            />
            <ZigZagSection
              title="Soluciones Web"
              description="Hemos desarrollado sitios web y aplicaciones optimizadas y versátiles incluso a niveles ERP, adaptadas a las necesidades de nuestros clientes."
              reverse
              imgRoute="/FFlex-ScreenShoot.png"
            />
            <ZigZagSection
              title="Bases de datos"
              description="Somos expertos en la gestión y administración de bases de datos, simplificando al máximo la presentación final de la información."
              imgRoute="/FFlex-ScreenShoot.png"
            />
            <ZigZagSection
              title="Aplicaciones móviles"
              description="Crea aplicaciones móvil nativas que convergan con tu web, asegurando la centralización de tus datos"
              imgRoute="/FFlex-ScreenShoot.png"
              reverse
            />
            <ZigZagSection
              title="Bases de datos"
              description="Nuestro equipo de expertos está aquí para guiarte en cada paso del proceso de desarrollo."
              imgRoute="/FFlex-ScreenShoot.png"
            />
          </article>
        </div>
      </main>
    </div>
  );
};

export default Description;
