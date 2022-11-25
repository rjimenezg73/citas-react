import { useState } from 'react';
import Formulario from './components/formulario.jsx';
import Header from './components/Header.jsx';
import ListadoPacientes from './components/ListadoPacientes.jsx';

function App() {

  const [ pacientes, setPacientes] = useState([]);
  const [ paciente, setPaciente ] = useState({}) // Este lo usamos para el botón Editar, en éste caso es un objeto ya que será un solo registros

  const eliminarPaciente = (id) => {
    console.log('Eliminando Paciente, ', id);
    const pacientesActualizados = pacientes.filter(paciente => paciente.id ==! id);  
    setPacientes(pacientesActualizados);
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
