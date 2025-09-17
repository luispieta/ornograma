import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";
import "./formulario.css";

export default function Formulario () {

    const times = [
        "Ataque", 
        "Dano",
        "Defesa",
        "Suporte",
        "Flanco atirador"
    ];

    const salvar = (evento) => {
        evento.preventDefault();
        console.log("O registro foi salvado!")
    }

    return(
        <section className="formulario">
            <form onSubmit={salvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto obrigatorio={true} label="Nome" name="nome" placeholder="Digite seu nome"/>
                <CampoTexto obrigatorio={true} label="Cargo" name="cargo" placeholder="Digite seu cargo"/>
                <CampoTexto label="Imagem" name="imagem" placeholder="Digite sua imagem"/>
                <ListaSuspensa obrigatorio={true} label="Time" name="time" itens={times}/>
                <Botao>
                    Criar card
                </Botao>
            </form>
        </section>
    );
}