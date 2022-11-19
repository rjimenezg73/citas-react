import React from 'react';

const Paciente = ({paciente}) => {
  return (
    <div className='m-4 mb-10 ml-10 bg-white shadow-xl px-5 py-10 rounded-xl'>
      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Nombre:{' '}
        <span className='font-normal normal-case'>{paciente.nombre}</span>
      </p>
      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Propietario:{' '}
        <span className='font-normal normal-case'>{paciente.propietario}</span>
      </p>
      <p className='font-bold mb-3 text-gray-700 uppercase'>
        E-mail:{' '}
        <span className='font-normal normal-case'>{paciente.email}</span>
      </p>
      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Fecha Alta:{' '}
        <span className='font-normal normal-case'>{paciente.fecha}</span>
      </p>
      <p className='font-bold mb-3 text-gray-700 uppercase text-justify'>
        Síntomas:{' '}
        <span className='font-normal normal-case'>{paciente.sintomas}</span>
      </p>
    </div>
  )
}

export default Paciente;
