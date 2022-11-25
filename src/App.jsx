import { useState, useEffect } from 'react';
import Formulario from './components/formulario.jsx';
import Header from './components/Header.jsx';
import ListadoPacientes from './components/ListadoPacientes.jsx';

function App() {

  const [ pacientes, setPacientes] = useState([]);
  const [ paciente, setPaciente ] = useState({}) // Este lo usamos para el botón Editar, en éste caso es un objeto ya que será un solo registros

  useEffect(() => {
    const obtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? []; //Si no hay nada en LS agrega un arreglo vacio. Al mismo tiempo se convierte a objeto(array) ya que de lo contrario devuelve string
      setPacientes(pacientesLS);
    }
    obtenerLS(); // Cada que cargue éste componente, se ejecuta la funcion  
  }, []); // Recuerda que cuando no pasas dependencias le estas indicando al useEffect que se ejecute una sola vez.
  // El orden es importante, ya que el de abajo se ejecuta el state con pacientes pero en este caso queremos que se cargue una sola vez cuando el componente está listo. Por lo tanto, es un buen lugar para ver si el local storage tiene algo almacenado o no.

  // El siguiente useEffect lo usaremos para el LocalStorage. Recordar que el local storage no permite guardar arreglos, solo strings
  useEffect(() => {
    //console.log('Componente listo o cambió pacientes');
    localStorage.setItem('pacientes', JSON.stringify(pacientes)); // Ya sea un arreglo vacío o lleno de objetos, lo va a convertir a un string 
  }, [pacientes]);


  const eliminarPaciente = (id) => {
    console.log('Eliminando Paciente, ', id);
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id);  
    setPacientes(pacientesActualizados);
    console.log('PA ',pacientesActualizados);
  };


  return (
    <div className='container mx-auto mt-10'>
      <Header
      />

      <div className='mt-12 md:flex'>
        <Formulario 
          pacientes = { pacientes }
          setPacientes = { setPacientes }
          paciente = { paciente }
          setPaciente = {setPaciente}
        />
        <ListadoPacientes 
          pacientes = { pacientes }
          setPaciente = { setPaciente }
          eliminarPaciente = { eliminarPaciente }
        />
      </div>
      
    </div>
  )
}

export default App
