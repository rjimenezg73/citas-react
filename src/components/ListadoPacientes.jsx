import React from 'react';
import Paciente from './Paciente';

function ListadoPacientes({ pacientes }) {

  console.log(pacientes);

  return (
    <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll'>
      <h2 className='font-black text-3xl text-center'>Listado Pacientes</h2>
      <p className='text-xl mt-5 mb-10 text-center'>
        Administra tus{' '}
        <span className='text-indigo-600 font-bold'>Pacientes y Citas</span>
      </p>
      {/** Para iterar un arreglo en react siempre será sugerido usar map ya que retorna un valor, lo qie no hace forech y por tanto no se visualizara nada. Es por eso su recomendación */}
      { pacientes.map( paciente => (
        <Paciente 
          key={ paciente.id }
          paciente = { paciente }
        />
      ))}

    </div>
  )
}

export default ListadoPacientes
