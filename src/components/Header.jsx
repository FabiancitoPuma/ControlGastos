import ControlPresupuesto from "./ControlPresupuesto"
import NuevoPresupuesto from "./NuevoPresupuesto"


// eslint-disable-next-line react/prop-types
const Header = ({
                gastos,
                presupuesto,
                setGastos,
                setPresupuesto,
                // eslint-disable-next-line react/prop-types
                setIsValidPresupuesto,
                isValidPresupuesto}) => {
  return (
    <header>
        <h1>Planificador de Gastos</h1>
          {isValidPresupuesto?(
           <ControlPresupuesto
            gastos={gastos}
            presupuesto={presupuesto}
           />
          ):(
              <NuevoPresupuesto
              presupuesto={presupuesto}
              setPresupuesto={setPresupuesto}
              isValidPresupuesto={isValidPresupuesto}
              setIsValidPresupuesto={setIsValidPresupuesto}
            />
          )}
    </header>
  )
}

export default Header
