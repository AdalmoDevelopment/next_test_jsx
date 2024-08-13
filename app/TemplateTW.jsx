import React from "react";

const TemplateTW = () => {
  return (
    <div>
      <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
        <div className="flex justify-between px-4 mx-auto max-w-screen-xl">
          <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
            <header className="mb-4 lg:mb-6 not-format">
              <address className="flex items-center mb-6 not-italic">
                <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                  <div>
                    <a href="#" rel="author" className="text-xl font-bold text-gray-900 dark:text-white">
                      Jese Leos
                    </a>
                    <p className="text-base text-gray-500 dark:text-gray-400">
                      Graphic Designer, educator & CEO Flowbite
                    </p>
                    <p className="text-base text-gray-500 dark:text-gray-400">
                      <time pubdate dateTime="2022-02-08" title="February 8th, 2022">
                        Feb. 8, 2022
                      </time>
                    </p>
                  </div>
                </div>
              </address>
              <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
                Best practices for successful prototypes
              </h1>
            </header>
            {/* Resto del contenido del artículo */}
          </article>
        </div>
      </main>
    </div>
  );
};

export default TemplateTW;
