import React from 'react';
import Formulario from '../../components/usuariosAnnar/Formulario';
import RootLayout from '../../components/layout';
import { useEffect } from 'react';
import axios from 'axios';

export default function FormularioPage() {
  useEffect(() => {
    const incrementPageView = async () => {
      await axios.post('/api/views/formulario');
    };
    incrementPageView();
  }, []);

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
