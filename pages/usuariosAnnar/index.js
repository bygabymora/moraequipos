'use client';
import React, { useState } from 'react';
import RootLayout from '../../components/layout';
import Link from 'next/link';
import VideoContainer from '../../components/usuariosAnnar/VideoContainer';
import Image from 'next/image';

export default function UsuariosAnnar() {
  const [showButton, setShowButton] = useState(false);

  return (
    <RootLayout title="moraequipos">
      <main className="bg-gray-50 pt-2">
        <div className="flex flex-col items-center justify-center w-full pt-2 leading-tight">
          <div className="flex justify-center items-center w-full leading-tight sticky top-0 sm:hidden">
            <Image
              src="https://res.cloudinary.com/do6oloxvt/image/upload/v1709907007/La_pureza_es_su_est%C3%A1ndar_3_vfrpf3.png"
              alt="Moraequipos"
              className="rounded-t-lg w-[90%] mb-5"
              width={600}
              height={320}
            />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 w-full lg:p-10 ">
            <div className="lg:col-span-3 col-span-1">
              <VideoContainer setShowButton={setShowButton} />
            </div>
            <div className="flex flex-col items-center justify-center w-full lg:col-span-1 col-span-1 p-6 ">
              {showButton && (
                <Link
                  className="flex justify-center items-center w-full mb-4"
                  href="https://wa.me/573202193192?text=Hola%20Moraequipos%20Estoy%20interesado%20en%20quedarme%20con%20la%20unidad%20de%20agua."
                >
                  <Image
                    src="https://res.cloudinary.com/do6oloxvt/image/upload/v1709906246/2_xyaufq.png"
                    alt="Button Image"
                    width={400}
                    height={210}
                  />
                </Link>
              )}
              <Link
                className="flex justify-center items-center w-full"
                href="/usuariosAnnar/formulario"
              >
                <Image
                  src="https://res.cloudinary.com/do6oloxvt/image/upload/v1709906246/1_anihif.png"
                  alt="Moraequipos"
                  width={400}
                  height={210}
                />
              </Link>
            </div>
          </div>
        </div>
      </main>
    </RootLayout>
  );
}
