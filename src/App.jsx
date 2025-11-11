import { useState } from 'react'
import Banner from './componentes/Banner/index.jsx'
import Formulario from './componentes/Formulario/index.jsx'
import Time from './componentes/Time/index.jsx'
import Rodape from './componentes/Rodape/index.jsx'

export default function App() {

  const [times, setTime] = useState([
    {
      nome: "Ataque",
      cor: "#ff00aaff",
    },
    {
      nome: "Dano",
      cor: "#ff0000ff",
    },
    {
      nome: "Defesa",
      cor: "#1100ffff",
    },
    {
      nome: "Suporte",
      cor: "#ffea00ff",
    },
    {
      nome: "Flanco atirador",
      cor: "#22ff00ff",
    }
  ])

  function mudarCorTime(cor, nome) {
    setTime(times.map(time => {
      if(time.nome === nome) {
        time.cor = cor;
      }
      return time
    }))
  }
  
  const [colaboradores, setColaboradores] = useState([])

  const novoColaboradorCadastrado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }
  
  function deletarColaborador() {
    console.log("Colaborador deletado")
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
          mudarCor={mudarCorTime}
          nome={time.nome} 
          cor={time.cor} 
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
          deletar={deletarColaborador}
        />
      )}
      <Rodape/>
    </div>
  )
}