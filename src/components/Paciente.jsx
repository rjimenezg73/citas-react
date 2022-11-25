import React from 'react';

const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {

  const handleEliminar = () => {
    const respuesta = confirm('¿Deseas eliminar éste paciente?');
    if(respuesta){
      eliminarPaciente(paciente.id);
      console.log('Eliminando...', paciente.id);
    }else{
      console.log('Eliminar CANCELADO');
    }
  };

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
      <div className='flex justify-between mt-10'>
        <button 
          type='button'
          className='py-2 px-10 bg-indigo-600 text-white hover:bg-indigo-900 font-bold uppercase rounded-lg'
          onClick={() => setPaciente(paciente)}
        >Editar</button>

        <button 
          type='button'
          className='py-2 px-10 bg-red-600 text-white hover:bg-red-900 font-bold uppercase rounded-lg'
          onClick={ handleEliminar }
        >Eliminar</button>
      </div>
    </div>
  )
}

export default Paciente;
