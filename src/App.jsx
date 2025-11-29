import { useState } from 'react'
import Banner from './componentes/Banner/index.jsx'
import Formulario from './componentes/Formulario/index.jsx'
import Time from './componentes/Time/index.jsx'
import Rodape from './componentes/Rodape/index.jsx'
import { v4 as uuidv4 } from 'uuid'

export default function App() {

  const [times, setTimes] = useState([
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

  const [colaboradores, setColaboradores] = useState([])

  function mudarCorTime(cor, id) {
    setTimes(times.map(time => {
      if(time.id === id) {
        time.cor = cor;
      }
      return time
    }))
  }
  
  const novoColaboradorCadastrado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }
  
  function deletarColaborador(id) {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id))
  }

  function cadastrarTime(novoTime) {
    setTimes([...times, novoTime])
  }

  return (
    <div>
      <Banner/>
      <Formulario 
        cadastroTimes={cadastrarTime}
        times={times} 
        colaboradorCadastrado={colaboradores => novoColaboradorCadastrado(colaboradores)}
      />
      {times.map(time => 
        <Time 
          key={time.id} 
          id={time.id} 
          nome={time.nome} 
          cor={time.cor} 
          mudarCor={mudarCorTime}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
          deletar={deletarColaborador}
        />
      )}
      <Rodape/>
    </div>
  )
}