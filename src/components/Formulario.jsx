import {useEffect, useState} from 'react'
import Error from './Error'

const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {

    const [nombre, setNombre] = useState ('')
    const [propietario, setPropietario] = useState ('')
    const [email, setEmail] = useState ('')
    const [fecha, setFecha] = useState ('')
    const [sintomas, setSintomas] = useState ('')

    const [error, setError] = useState (false)

    useEffect( () => {
        if(Object.keys(paciente).length > 0) {
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setFecha(paciente.fecha)
            setSintomas(paciente.sintomas)
        }
    }, [paciente])

    const generarID = () => {
        const random = Math.random().toString(36).substring(2)
        const fecha = Date.now().toString(36)

        return random + fecha
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if([nombre, propietario, email, fecha, sintomas].includes('')) {
            setError(true)
            return;
        } 

        setError(false)

        const pacientesObj = {
            nombre,
            propietario,
            email,
            fecha,
            sintomas,
        }

        // Editando el registro
        if(paciente.id) {
            pacientesObj.id = paciente.id
            const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === paciente.id ? pacientesObj : pacienteState)

            setPacientes(pacientesActualizados)
            setPaciente({})
        } else {
            pacientesObj.id = generarID()
            setPacientes([...pacientes, pacientesObj])
        }

        setNombre('')
        setPropietario('')
        setEmail('')
        setFecha('')
        setSintomas('') 
    }

    return (
        <div className="md:w-1/2 lg:w-2/5 text-center m-5">
            <h2 className="font-black text-3xl"> Seguimiento Pacientes </h2>

            <p className="text-lg mt-5 mb-5">
                Añade Pacientes y {''}
                <span className="text-indigo-600 font-bold">Administralos</span>
            </p>


            <form 
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
            >
                { error && 
                    <Error 
                        mensaje = {'Todos los campos son Obligatorios'}
                    />
                }

                <div>
                    <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
                        Nombre Mascota
                    </label>
                    <input 
                        type = "text"
                        id = "mascota"
                        placeholder= "Nombre de la mascota"
                        className="border-2 w-full p-2 mt-2 mb-5 placeholder-gray-400 rounded-md"
                        value={nombre}
                        onChange={ (e) => setNombre (e.target.value)}
                   />
                </div>
                <div>
                    <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">
                        Nombre Propietario
                    </label>
                    <input 
                        type = "text"
                        id = "propietario"
                        placeholder= "Nombre del Propietario"
                        className="border-2 w-full p-2 mt-2 mb-5 placeholder-gray-400 rounded-md"
                        value={propietario}
                        onChange={ (e) => setPropietario (e.target.value)}
                   />
                </div>
                <div>
                    <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
                        Email
                    </label>
                    <input 
                        type = "email"
                        id = "email"
                        placeholder= "Email del Propietario"
                        className="border-2 w-full p-2 mt-2 mb-5 placeholder-gray-400 rounded-md"
                        value={email}
                        onChange={ (e) => setEmail (e.target.value)}
                   />
                </div>
                <div>
                    <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">
                        Fecha Alta
                    </label>
                    <input 
                        type = "date"
                        id = "alta"
                        className="border-2 w-full p-2 mt-2 mb-5 placeholder-gray-400 rounded-md"
                        value={fecha}
                        onChange={ (e) => setFecha (e.target.value)}
                   />
                </div>
                <div>
                    <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">
                        Sintomas
                    </label>
                    <input 
                        type = "textarea"
                        id = "sintomas"
                        placeholder = "sintomas"
                        className="border-2 w-full p-2 mt-2 mb-5 placeholder-gray-400 rounded-md"
                        value={sintomas}
                        onChange={ (e) => setSintomas (e.target.value)}
                   />
                </div>

                <input 
                    type = "submit"
                    className = "bg-indigo-600 w-full p-2 text-white rounded hover:bg-indigo-500 uppercase font-bold cursor-pointer transition-all"
                    value = {paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}
                />
           </form>
        </div>
    )
}

export default Formulario

