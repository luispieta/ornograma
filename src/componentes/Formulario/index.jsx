import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";
import "./formulario.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid"

export default function Formulario ({colaboradorCadastrado, times, cadastroTimes}) {

    const [nome, setNome] = useState("")
    const [cargo, setCargo] = useState("")
    const [imagem, setImagem] = useState("")
    const [time, setTime] = useState("")
    const [nomeTime, setNomeTime] = useState("")
    const [corTime, setCorTime] = useState("")


    const salvarColaborador = (evento) => {
        evento.preventDefault()
        colaboradorCadastrado({
            id: uuidv4(),
            nome, 
            cargo, 
            imagem, 
            time
        })
        setNome("")
        setCargo("")
        setImagem("")
        setTime("")
    }

     const salvarTime = (evento) => {
        evento.preventDefault()
        cadastroTimes({
            id: uuidv4(),
            nomeTime, 
            corTime
        })
        setNomeTime("")
        setCorTime("")
    }

    return(
        <section className="formulario">
            <form onSubmit={salvarColaborador}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Nome" 
                    name="nome" 
                    placeholder="Digite seu nome"
                    valor={nome}
                    alterado={valor => setNome(valor)}
                />
                <CampoTexto 
                    obrigatorio={true} 
                    label="Cargo" 
                    name="cargo" 
                    placeholder="Digite seu cargo"
                    valor={cargo}
                    alterado={valor => setCargo(valor)}
                />
                <CampoTexto 
                    label="Imagem" 
                    name="imagem" 
                    placeholder="Digite sua imagem"
                    valor={imagem}
                    alterado={valor => setImagem(valor)}
                />
                <ListaSuspensa 
                    obrigatorio={true}
                    label="Time" 
                    name="time" 
                    itens={times.map(time => time.nome)}
                    valor={time}
                    alterado={valor => setTime(valor)}
                />
                <Botao>
                    Criar colaborador
                </Botao>
            </form>
            <form onSubmit={salvarTime}>
                <h2>Preencha os dados para criar um novo time</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Nome" 
                    name="nome" 
                    placeholder="Digite seu Time"
                    valor={nomeTime}
                    alterado={valor => setNomeTime(valor)}
                />
                <CampoTexto 
                    obrigatorio={true} 
                    label="Cor" 
                    name="cor" 
                    placeholder="Digite sua cor"
                    valor={corTime}
                    alterado={valor => setCorTime(valor)}
                />
                <Botao>
                    Criar time
                </Botao>
            </form>
        </section>
    )
}