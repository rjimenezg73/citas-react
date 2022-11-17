import React from 'react';

const Paciente = () => {
  return (
    <div className='m-4 mb-10 ml-10 bg-white shadow-xl px-5 py-10 rounded-xl'>
      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Nombre:{' '}
        <span className='font-normal normal-case'>Hook</span>
      </p>
      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Propietario:{' '}
        <span className='font-normal normal-case'>Roberto</span>
      </p>
      <p className='font-bold mb-3 text-gray-700 uppercase'>
        E-mail:{' '}
        <span className='font-normal normal-case'>robertojimenezg@gmail.com</span>
      </p>
      <p className='font-bold mb-3 text-gray-700 uppercase'>
        Fecha Alta:{' '}
        <span className='font-normal normal-case'>10 de Diciembre 2022</span>
      </p>
      <p className='font-bold mb-3 text-gray-700 uppercase text-justify'>
        Síntomas:{' '}
        <span className='font-normal normal-case'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia lacus et ligula bibendum efficitur. Nunc viverra metus lectus, quis sodales risus gravida eget. Sed ac felis ut nulla vehicula vestibulum. Suspendisse potenti. Cras vehicula, odio eu mollis rutrum, diam tortor fermentum nisl, vitae imperdiet tortor nisl id sem. Aliquam porttitor erat a lectus lacinia, ut rhoncus eros efficitur. Donec fringilla sit amet nisi at viverra. Nunc tortor nisi, fringilla nec aliquam ut, maximus sit amet enim. Curabitur tincidunt porta risus, quis mollis sem tincidunt et.</span>
      </p>
    </div>
  )
}

export default Paciente;
