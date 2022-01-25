import Pacientes from "./Pacientes"



const Listadopacientes = ({pacientes, setPaciente, eliminarPacientes}) => {

    

    return (
        
        <div className="md:w-1/2 lg:w-2/5 m-5 md:h-screen overflow-y-scroll">
            {pacientes && pacientes.length ? (
                <>
                    <h2 className="font-black text-3xl text-center"> Listado de Pacientes </h2>

                    <p className="text-lg mt-5 mb-5 text-center">
                        Administra tus {''}
                        <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
                    </p>

                    {pacientes.map( paciente => (
                        <Pacientes 
                            key = {paciente.id}
                            paciente = {paciente}
                            setPaciente = {setPaciente}
                            eliminarPacientes = {eliminarPacientes}
                        />
                    ))}
                </>
            ) : (

                <>
                    <h2 className="font-black text-3xl text-center"> Listado de Pacientes </h2>

                    <p className="text-lg mt-5 mb-5 text-center">
                        No hay Citas, Comience {''}
                        <span className="text-indigo-600 font-bold">Creando Una</span>
                    </p>
                </>
            )}
        </div>
    )
}

export default Listadopacientes
