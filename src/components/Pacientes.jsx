const Pacientes = ({paciente, setPaciente, eliminarPacientes}) => {

    const {nombre, propietario, email, fecha, sintomas, id} = paciente

    const handleEliminar = () => {
        const pregunta = confirm('¿Seguro que deseas eliminar la cita?')

        if (pregunta) {
            eliminarPacientes(id)
        }
    }

    return (
        <div className="w-full bg-white shadow-md rounded-lg py-10 px-5 mb-5">
            <p className=" text-gray-700 uppercase font-bold">Nombre: 
                <span className="font-normal normal-case"> {nombre}</span>
            </p>
            
            <p className=" text-gray-700 uppercase font-bold"> Nombre Propietario: 
                <span className="font-normal normal-case"> {propietario}</span>
            </p>

            <p className=" text-gray-700 uppercase font-bold"> Email: 
                <span className="font-normal normal-case"> {email}</span>
            </p>

            <p className=" text-gray-700 uppercase font-bold"> Alta: 
                <span className="font-normal normal-case"> {fecha}</span>
            </p>

            <p className=" text-gray-700 uppercase font-bold"> Sintomas: 
                <span className="font-normal normal-case"> {sintomas}</span>
            </p>

            <div className = "flex justify-between mt-5">
                <button
                    type = "button"
                    className = "py-2 px-10 bg-indigo-700 hover:bg-indigo-600 rounded text-white uppercase font-bold"
                    onClick = {() => setPaciente(paciente)}
                > Editar </button>

                <button
                    type = "button"
                    className = "py-2 px-10 bg-red-700 hover:bg-red-600 rounded text-white uppercase font-bold"
                    onClick = {handleEliminar}
                > Eliminar </button>
            </div>
        </div>
    )
}

export default Pacientes
