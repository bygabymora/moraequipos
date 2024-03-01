import React from 'react';
import RootLayout from '../../components/layout';
import Link from 'next/link';
import VideoContainer from '../../components/usuariosAnnar/VideoContainer';
import Image from 'next/image';

export default function usuariosAnnar() {
  return (
    <RootLayout title="moraequipos">
      <main className="bg-gray-50 pt-2">
        <div className="justify-center items-center w-full pt-2 pb-2 leading-tight">
          <VideoContainer />

          <div className=" p-2 flex justify-center items-center sm:relative sm:bottom-auto sm:w-auto sm:bg-transparent hide-on-mobile-landscape">
            <Link href="/usuariosAnnar/formulario">
              <div className="fixed bottom-0 left-0 w-full flex justify-center items-center leading-tight sm:hidden">
                <Image
                  src="https://res.cloudinary.com/do6oloxvt/image/upload/v1709251368/1_mmyu3h.png"
                  alt="Moraequipos"
                  className="rounded-b-lg w-[90%] mb-5 "
                  width={600}
                  height={320}
                />
              </div>
            </Link>
          </div>
        </div>
      </main>
    </RootLayout>
  );
}
