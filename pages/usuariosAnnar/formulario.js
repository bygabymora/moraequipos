import React from 'react';
import Formulario from '../../components/usuariosAnnar/Formulario';
import RootLayout from '../../components/layout';

export default function FormularioPage() {
  return (
    <RootLayout title="Formulario Moraequipos">
      <main className="">
        <div className="">
          <Formulario />
        </div>
      </main>
    </RootLayout>
  );
}
