import React from 'react';
import Image from 'next/image';
import { useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';

const ThankYouPage = () => {
  useEffect(() => {
    const incrementPageView = async () => {
      await axios.post('/api/views/gracias');
    };
    incrementPageView();
  }, []);
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50 p-4">
      <div className="text-center items-center max-w-[1700px] mt-[20rem]  p-10 flex flex-col md:gap-10 gap-5">
        <div className="flex justify-center items-center w-full leading-tight sticky top-4 md:hidden ">
          <Image
            src="https://res.cloudinary.com/do6oloxvt/image/upload/v1706038754/Banner_j0ufni.jpg"
            alt="Moraequipos"
            className="rounded-t-lg w-[90%] mb-5"
            width={600}
            height={320}
          />
        </div>
        <Image
          src="https://res.cloudinary.com/do6oloxvt/image/upload/v1706038754/Banner_j0ufni.jpg"
          alt="Gracias"
          className="hidden md:block mx-auto"
          width={1200}
          height={240}
        />
        <h2 className="lg:text-[5rem] text-xl font-bold text-gray-800 ">
          ¡Espere hay más premios!
        </h2>
        <p className="text-xl my-2 font-bold mt-10">
          Nos complace informarle además qué, entre las personas que nos hagan
          llegar un video contándonos su experiencia con Moraequipos, detallando
          los tres puntos de esta encuesta, donde además aparezca su
          laboratorio, su personal y la unidad de agua, vamos a rifar{' '}
          <span className="underline">
            una unidad de agua para uso en su laboratorio
          </span>{' '}
          (eventualmente la misma unidad que tiene actualmente). <br />
          <br />
          El video puede ser enviado vía WhatsApp al{' '}
          <Link
            className="flex justify-center items-center w-full mb-4 underline text-black"
            href="https://wa.me/573202193192?text=Hola%20Moraequipos.%20Este%20es%20mi%20video."
          >
            320 219 3192
          </Link>{' '}
          o por correo electrónico a
          <Link
            className="flex justify-center items-center w-full mb-4 underline text-black"
            href="mailto:elcorreoquequieres@correo.com"
          >
            infocomercial@moraequipos.com.
          </Link>{' '}
          <br />
          Tenga en cuenta que esta segunda rifa, se va a realizar entre pocos
          laboratorios y su laboratorio tendrá más opciones de ganar. ¡Anímese!
          Al llenar la encuesta y enviar el video, <br />
          tiene dos oportunidades de ganar.
        </p>
        <button
          onClick={() => (window.location.href = '/usuariosAnnar')}
          className="button button--flex btn-contact mt-3"
        >
          Volver a la página principal
        </button>
      </div>
    </div>
  );
};

export default ThankYouPage;
