import { useState } from 'react'
import Banner from './componentes/Banner/index.jsx'
import Formulario from './componentes/Formulario/index.jsx'
import Time from './componentes/Time/index.jsx'
import Rodape from './componentes/Rodape/index.jsx'
import { v4 as uuidv4 } from 'uuid'

export default function App() {

  const [times, setTime] = useState([
    {
      id: uuidv4(),
      nome: "Ataque",
      cor: "#ff00aaff",
    },
    {
      id: uuidv4(),
      nome: "Dano",
      cor: "#ff0000ff",
    },
    {
      id: uuidv4(),
      nome: "Defesa",
      cor: "#1100ffff",
    },
    {
      id: uuidv4(),
      nome: "Suporte",
      cor: "#ffea00ff",
    },
    {
      id: uuidv4(),
      nome: "Flanco atirador",
      cor: "#22ff00ff",
    }
  ])

  function mudarCorTime(cor, id) {
    setTime(times.map(time => {
      if(time.id === id) {
        time.cor = cor;
      }
      return time
    }))
  }
  
  const [colaboradores, setColaboradores] = useState([])

  const novoColaboradorCadastrado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }
  
  function deletarColaborador(id) {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id))
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
          key={time.id} 
          mudarCor={mudarCorTime}
          nome={time.nome} 
          id={time.id} 
          cor={time.cor} 
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
          deletar={deletarColaborador}
        />
      )}
      <Rodape/>
    </div>
  )
}