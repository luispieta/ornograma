import { useState } from 'react'
import Banner from './componentes/Banner/index.jsx'
import Formulario from './componentes/Formulario/index.jsx'

export default function App() {
  
  const [colaborador, setColaborador] = useState([])

  const novoColaboradorCadastrado = (colaboradores) => {
    console.log(colaboradores)
    setColaborador([...colaborador, colaboradores])
  }
  
  return (
    <div>
      <Banner/>
      <Formulario colaboradorCadastrado={colaborador => novoColaboradorCadastrado(colaborador)}/>
    </div>
  )
}