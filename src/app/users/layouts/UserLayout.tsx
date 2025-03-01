import React from 'react';
import UserRegisterForm from '../components/UserRegisterForm';

const UserLayout: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full h-screen">
      {/* Sección de Imagen de Fondo */}
      <div className="relative w-full lg:w-1/2">
        <img
          className="w-full h-full object-cover"
          src="f (1).jpg"
          alt="Fondo"
        />
        {/* Overlay oscuro para mejorar la legibilidad */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        {/* Texto de Bienvenida */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-6xl font-bold text-white">Bienvenido a Digital Hub</h1>
          <p className="text-2xl text-white mt-4">Regístrate y comienza a disfrutar</p>
        </div>
      </div>

      {/* Sección del Formulario de Registro */}
      <div className="w-full lg:w-1/2 flex items-center flex-col justify-center">
      {/* <div className='bg-red-400 w-40 rounded-full h-40 my-10'></div> */}
      <UserRegisterForm />
      </div>
    </div>
  );
};

export default UserLayout;
