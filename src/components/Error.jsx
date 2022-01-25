
const Error = ({mensaje}) => {
    return ( 
        <div className = "bg-red-800 text-white text-center uppercase font-bold py-3 rounded mb-5">
            <p> {mensaje} </p> 
        </div>
    )
};

export default Error;
