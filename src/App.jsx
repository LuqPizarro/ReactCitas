import {useEffect, useState} from 'react'
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import Listadopacientes from "./components/Listadopacientes"


function App() {

  const [pacientes, setPacientes] = useState ([])
  const [paciente, setPaciente] = useState ({})

  useEffect(() => {
    const obtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? []

      setPacientes(pacientesLS)
    }
    obtenerLS();
  }, [])

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
  }, [pacientes])

  const eliminarPacientes = id => {
    const pacienteEliminado = pacientes.filter (pacientes => pacientes.id !== id)
    setPacientes(pacienteEliminado)
  }

  return (
    <div className="container mt-10 mx-auto">
      <Header />
      <div className="md:flex mt-8">
        <Formulario 
          pacientes = {pacientes}
          setPacientes = {setPacientes}
          paciente = {paciente}
          setPaciente = {setPaciente}
        />
        <Listadopacientes 
          pacientes = {pacientes}
          setPaciente = {setPaciente}
          eliminarPacientes = {eliminarPacientes}
        />
      </div>
      
    </div>
  )
}

export default App
