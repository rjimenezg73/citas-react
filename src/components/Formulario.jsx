import React from 'react'
import { useState, useEffect } from 'react';
import Error from './Error';

function Formulario( { pacientes, setPacientes, paciente, setPaciente }) {
  const [ nombre, setNombre ] = useState('');
  // en nombre se almacena el valor del estado y en setNombre la función que modifica ese valor
  // dentro de useSatate va el valor inicial del estado, en éste caso Hook
  const [ propietario, setPropietario ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ fecha, setFecha ] = useState('');
  const [ sintomas, setSintomas ] = useState('');

  const [ error, setError ] = useState(false);

  // useEffect(() => {
  //   console.log(paciente);//Se va a ejecutar cuando el componente que esta la las dependencias, en el corchete cambia, esto es para este caso paciente. Y cambi con el botón editar de listadoPacientes.jsx
  // },[paciente]);

  // useEffect(() => {
  //   console.log('El componente está listo');
  // },[]);//Se pueden tener multiples useEffect en un componente. Si se dejan las dependencias vacías  quiere decir que solo se ejecutará una vez. Mientras que con dependencias se ejecutará cada que la dependencia cambie.

  useEffect(() => {
    if(Object.keys(paciente).length > 0){
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setFecha(paciente.fecha);
      setSintomas(paciente.sintomas);
    }
  }, [paciente]);
  

  const generarId = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);
    return fecha + random;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación del formulario
    if([ nombre, propietario, email, fecha, sintomas ].includes('')){
      console.log('No se permiten campos vacíos en el formulario');
      setError(true);
      return;
    }

    setError(false);

    // Objeto de Paciente
    const objetoPaciente = {
      nombre: nombre, 
      propietario: propietario, 
      email: email, 
      fecha: fecha, 
      sintomas: sintomas,
      // id: generarId() ya no puede ir acá porque usaré éste objeto para editar los pacientes, por eso lo movemos al condicional editar/agregar
    }

    // Verificando si se está editando o agregando paciente
    if(paciente.id){
      // Editando paciente
      objetoPaciente.id = paciente.id; // Esto es porque lo quitamos del objeto de arriba

      const pacientesActualizados = pacientes.map(pacienteStateAux => pacienteStateAux.id === paciente.id ? objetoPaciente : pacienteStateAux);
      setPacientes(pacientesActualizados);
      // Una vez actualizado el state hay que limpiarlo, pasando desde app como prop y luego agregando un obj vacío nuevamente
      setPaciente({});
    }else{
      // Agregando nuevo paciente 
      objetoPaciente.id = generarId();
      setPacientes([...pacientes, objetoPaciente]);
    }

    // Reiniciando el formulario para nuevos datos
    setNombre('');
    setPropietario('');
    setEmail('');
    setFecha('');
    setSintomas('');

  }


  return (
    <div className='md:w-1/2 lg:w-2/5 mx-5'>
      <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>
      <p className='text-lg mt-5 text-center mb-10'>
        Añade Pacientes y {' '}
        <span className='text-indigo-600 font-bold '>Administralos</span>
      </p>

      <form 
        onSubmit={handleSubmit} // Con esto podemos declarar una función en la parte de arriba
        className='bg-white shadow-xl rounded-lg py-10 px-5 mb-10'
      >
        { error && 
          <Error>
            <p>
              Hay un error: Todos los campos son obligatorios
            </p>
          </Error>
        }
        <div className='mb-5'>
          <label htmlFor='mascota' className='block text-gray-700 uppercase font-bold'>Nombre Mascota</label>
          <input 
            id='mascota'
            type='text'
            placeholder='Nombre de la mascota...'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={nombre}
            //El onChange es exactamente igual a un eventListener en JS
            onChange = { (e) => setNombre(e.target.value) } 
          />
        </div>

        <div className='mb-5'>
          <label htmlFor='propietario' className='block text-gray-700 uppercase font-bold'>Nombre del Propietario</label>
          <input 
            id='propietario'
            type='text'
            placeholder='Nombre del Propietario...'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={propietario}
            onChange = { (e) => setPropietario(e.target.value) } 
          />
        </div>

        <div className='mb-5'>
          <label htmlFor='email' className='block text-gray-700 uppercase font-bold'>E-mail</label>
          <input 
            id='email'
            type='email'
            placeholder='E-mail de Contacto...'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={email}
            onChange = { (e) => setEmail(e.target.value) } 
          />
        </div>

        <div className='mb-5'>
          <label htmlFor='alta' className='block text-gray-700 uppercase font-bold'>Alta de Paciente</label>
          <input 
            id='alta'
            type='date'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={fecha}
            onChange = { (e) => setFecha(e.target.value) } 
          />
        </div>

        <div className='mb-5'>
          <label htmlFor='sintomas' className='block text-gray-700 uppercase font-bold'>Síntomas que presenta el Paciente</label>
          <textarea
            id='sintomas'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            placeholder='Describe las síntomas del Paciente...'
            value={sintomas}
            onChange = { (e) => setSintomas(e.target.value) } 
          />  
        </div>

        <input
          type='submit'
          className='bg-indigo-600 w-full p-3 text-white uppercase rounded-md font-bold hover:bg-indigo-700 cursor-pointer transition-all'
          value= { paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}
        />

      </form>
    </div>
  )
}

export default Formulario
   