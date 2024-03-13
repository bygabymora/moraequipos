'use client';
import React from 'react';
import RootLayout from '../components/layout';

import Descarga from '@/components/usuariosAnnar/Descarga';
import Image from 'next/image';

export default function UsuariosAnnar() {
  return (
    <RootLayout title="moraequipos">
      <main className="bg-gray-50 pt-2">
        <div className="justify-center items-center w-full pt-2 pb-2 leading-tight">
          <Image
            src="/images/banner.png"
            alt="moraequipos"
            width="1200"
            height="800"
            layout="responsive"
          />
        </div>
        <Descarga />
      </main>
    </RootLayout>
  );
}
