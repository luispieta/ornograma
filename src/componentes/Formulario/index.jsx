import CampoTexto from "../CampoTexto.jsx";
import ListaSuspensa from "../ListaSuspensa.jsx";
import "./formulario.css";

export default function Formulario () {

    const times = [
        "Ataque", 
        "Dano",
        "Defesa",
        "Suporte",
        "Flanco atirador"
    ];

    return(
        <section className="formulario">
            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto label="Nome" name="nome" placeholder="Digite seu nome"/>
                <CampoTexto label="Cargo" name="cargo" placeholder="Digite seu cargo"/>
                <CampoTexto label="Imagem" name="imagem" placeholder="Digite sua ima'gem"/>
                <ListaSuspensa label="Time" name="time" itens={times}/>
            </form>
        </section>
    );
}