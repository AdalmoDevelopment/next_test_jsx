import React from "react";
import Image from "next/image";

const ZigZagSection = ({ title, description, reverse, imgRoute }) => (
  <div className={`flex flex-col md:flex-row ${reverse ? "md:flex-row-reverse" : ""} my-8`}>
    <div className="md:w-1/2 p-4">
      <h2 className="text-2xl font-bold text-white">{title}</h2>
      <p className="mt-2 text-gray-300">{description}</p>
    </div>
    <div className="md:w-1/2 p-4 flex items-center justify-center">
      <div className="w-full bg-gray-600 h-40 rounded-lg flex items-center justify-center">

        {imgRoute ? 
          <Image src={imgRoute}            
            width={600}
            height={600}
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

const Description = () => {
  return (
    <div className="z-10 md:w-4/6 mx-auto">
      <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-[#0e0e0e] bg-opacity-75 antialiased">
        <div className="px-4 mx-auto max-w-screen-xl">
          <header className="mb-16">
            <h1 className="text-3xl font-extrabold leading-tight lg:text-4xl text-white">
              Bienvenido a <span className="text-baleatech-blue">BaleaTech</span>
            </h1>
            <p className="mt-4 text-gray-300">
              Donde nace el compromiso tecnológico con las islas 
            </p>
          </header>

          <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-invert">
            <ZigZagSection
              title="Innovación Local"
              description="Impulsamos el desarrollo tecnológico en Baleares mediante soluciones personalizadas y sostenibles."
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
            />
            <ZigZagSection
              title="Aplicaciones móviles"
              description="Crea aplicaciones móvil nativas que convergan con tu web, asegurando la centralización de tus datos"
              reverse
            />
            <ZigZagSection
              title="Bases de datos"
              description="Nuestro equipo de expertos está aquí para guiarte en cada paso del proceso de desarrollo."
            />
          </article>
        </div>
      </main>
    </div>
  );
};

export default Description;
