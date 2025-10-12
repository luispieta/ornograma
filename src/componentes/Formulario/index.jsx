import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";
import "./formulario.css";
import { useState } from "react";

export default function Formulario (props) {

    const [nome, setNome] = useState("")
    const [cargo, setCargo] = useState("")
    const [imagem, setImagem] = useState("")
    const [time, setTime] = useState("")


    const salvar = (evento) => {
        evento.preventDefault()
        props.colaboradorCadastrado({nome, cargo, imagem, time})
        setNome("")
        setCargo("")
        setImagem("")
    }

    return(
        <section className="formulario">
            <form onSubmit={salvar}>
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
                    itens={props.nomeTimes}
                    valor={time}
                    alterado={valor => setTime(valor)}
                />
                <Botao>
                    Criar card
                </Botao>
            </form>
        </section>
    );
}