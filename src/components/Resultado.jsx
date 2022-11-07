import useClima from "../hooks/useClima";
import Loading from "./Loading";

const Resultado = () => {
  const { resultado, noResultado } = useClima();

  console.log(noResultado, 'Desde resultado');
  const { temp, temp_max, temp_min } = resultado.main;
  const { name } = resultado;

  const kelvin = 273.15;
  console.log('Desde resultado');
  return (

        <div>
          <div className="contenedor">
            <h2 className="temp">{name}</h2>

            <p className="temp">{parseInt(temp - kelvin)}°C</p>
            <div className="temp_min_max">
              <p>Max: {parseInt(temp_max - kelvin)}°C</p>
              <p>Min: {parseInt(temp_min - kelvin)}°C</p>
            </div>
          </div>
        </div>
      
  );
};

export default Resultado;
