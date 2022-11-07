import axios from "axios";
import { useState, createContext } from "react";

const ClimaContext = createContext()

const ClimaProvider = ({children}) => {

    console.log('Desde clima provider');
    
    const [busqueda, setBusqueda] = useState({
        ciudad: '',
        pais: ''
    })
    const [resultado, setResultado] = useState({})
    const [cargando, setCargando] = useState(false)
    const [noResultado, setNoResultado] = useState('')

    const datosBusqueda = e => {
        setBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }


    const consultarClima = async datos => {
    setCargando(true)
    setNoResultado('')
    setResultado({})
        
        try {
            const {ciudad, pais} = datos

            const appId = "c1ae368108e49a561a3f9eb7fef6fac5"
            const url = `http://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=1&appid=${appId}`

            const {data} = await axios(url)
            const {lat, lon} = data[0]

            const urlClima = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`

            const {data: clima} = await axios(urlClima)
           
           
            setResultado(clima)
            
        } catch (error) {
            setNoResultado('No se encontro la ciudad')
        } finally {
            setCargando(false)

        }
        

        
        // Con promises
        // await fetch(urlClima)
            // .then(respuesta => respuesta.json())
            // .then(resultado => console.log(resultado));
        
        // Con Async Await
        // const respuesta = await fetch(urlClima)
        // const resultado = await respuesta.json()

        

    }

    return (
        <ClimaContext.Provider
            value={{
                busqueda,
                datosBusqueda,
                consultarClima,
                resultado,
                cargando,
                noResultado
            }}
        >

            {children}

        </ClimaContext.Provider>

    )
}

    export {
        ClimaProvider
    }

export default ClimaContext
