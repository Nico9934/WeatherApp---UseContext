import useClima from "../hooks/useClima"
import Formulario from "./Formulario"
import Loading from "./Loading"
import Resultado from "./Resultado"


const AppClima = () => {

  const {resultado, noResultado, cargando} = useClima()

  return (
    <>
        <main className="dos-columnas">
            <Formulario />
            { cargando ? <Loading /> :
              resultado?.name ? <Resultado /> :
              noResultado ? <p>{noResultado}</p> : <p>Aqui se muestra el resultado</p>
            }

            {/* { cargando ? <Loading /> : null }
            { resultado.name && <Resultado /> }
            { noResultado && <p>{noResultado}</p> } */}
            
        </main>
    </>
  )
}

export default AppClima