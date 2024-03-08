import React from 'react';
import Image from 'next/image';
import ThankYouImage from '../../public/images/ThankYouImage.svg';
import ThankYouImage2 from '../../public/images/ThankYouImage2.svg';
import Link from 'next/link';

const ThankYouPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50 p-4">
      <div className="text-center items-center max-w-[1700px]">
        <Image
          src={ThankYouImage}
          alt="Gracias"
          className="mx-auto md:hidden"
        />
        <Image
          src={ThankYouImage2}
          alt="Gracias"
          className="hidden md:block mx-auto"
        />
        <h2 className="text-2xl font-bold text-gray-800 mt-4 ">
          ¡Gracias por su interés!
        </h2>
        <p className="text-lg my-2 font-bold">
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
            className="flex justify-center items-center w-full mb-4 underline"
            href="https://wa.me/573202193192?text=Hola%20Moraequipos.%20Este%20es%20mi%20video."
          >
            320 219 3192
          </Link>{' '}
          o por correo electrónico a
          <Link
            className="flex justify-center items-center w-full mb-4 underline"
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
