import { useState } from 'react'
import Banner from './componentes/Banner/index.jsx'
import Formulario from './componentes/Formulario/index.jsx'
import Time from './componentes/Time/index.jsx'
import Rodape from './componentes/Rodape/index.jsx'

export default function App() {

  const times = [
    {
      nome: "Ataque",
      corPrimaria: "#ff00aaff",
      corSegundaria: "#e8bdd9"
    },
    {
      nome: "Dano",
      corPrimaria: "#ff0000ff",
      corSegundaria: "#e8bdbdff"
    },
    {
      nome: "Defesa",
      corPrimaria: "#1100ffff",
      corSegundaria: "#c3bde8ff"
    },
    {
      nome: "Suporte",
      corPrimaria: "#ffea00ff",
      corSegundaria: "#e8e7bdff"
    },
    {
      nome: "Flanco atirador",
      corPrimaria: "#22ff00ff",
      corSegundaria: "#bfe8bdff"
    }
  ]
  
  const [colaboradores, setColaboradores] = useState([])

  const novoColaboradorCadastrado = (colaborador) => {
    console.log(colaboradores)
    setColaboradores([...colaboradores, colaborador])
  }
  
  return (
    <div>
      <Banner/>
      <Formulario 
        nomeTimes={times.map(time => time.nome)} 
        colaboradorCadastrado={colaboradores => novoColaboradorCadastrado(colaboradores)}
      />
      {times.map(time => 
        <Time 
          key={time.nome} 
          nome={time.nome} 
          corPrimaria={time.corPrimaria} 
          corSegundaria={time.corSegundaria}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
        />
      )}
      <Rodape/>
    </div>
  )
}