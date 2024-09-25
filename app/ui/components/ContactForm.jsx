import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";

const ContactForm = () => {
  return (
    <section id="contacto" class="z-10 h-dvh content-center">
        <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center  text-baleatech-blue">¿Contacta con nosotros!</h2>
            <p class="mb-8 lg:mb-16  text-center text-gray-500 text-gray-400 sm:text-xl">Estamos dispuesto a resolver cualquier duda, no dudes en escribirnos</p>
            <form action="#" class="space-y-8">
                <div>
                    <label for="email" class="block mb-2 text-sm font-medium  text-gray-300">Email</label>
                    <input type="email" id="email" class="shadow-sm  border border-gray-300  text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-baleatech-blue bg-opacity-70 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light" placeholder="name@flowbite.com" required></input>
                </div>
                <div>
                    <label for="subject" class="block mb-2 text-sm font-medium  text-gray-300">Subject</label>
                    <input type="text" id="subject" class="block p-3 w-full text-sm   rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 bg-baleatech-blue bg-opacity-70 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light" placeholder="Let us know how we can help you" required></input>
                </div>
                <div class="sm:col-span-2">
                    <label for="message" class="block mb-2 text-sm font-medium  text-gray-400">Your message</label>
                    <textarea id="message" rows="6" class="block p-2.5 w-full text-sm   rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 bg-baleatech-blue bg-opacity-70 bg-opacity-70 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                </div>
                <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-baleatech-blue sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 bg-primary-600 hover:bg-baleatech-blue focus:ring-primary-800">Send message</button>
            </form>
        </div>
    </section>
  );
};

export default ContactForm;
