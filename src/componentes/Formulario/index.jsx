import CampoTexto from "../CampoTexto";
import "./formulario.css"

export default function Formulario () {
    return(
        <section className="formulario">
            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto htmlFor="nome" label="Nome" name="nome" placeholder="Digite seu nome"/>
                <CampoTexto htmlFor="cargo" label="Cargo" name="cargo" placeholder="Digite seu cargo"/>
                <CampoTexto htmlFor="imagem" label="Imagem" name="imagem" placeholder="Digite sua imagem"/>
                <CampoTexto htmlFor="time" label="Time" name="time" placeholder="Digite seu time"/>
            </form>
        </section>
    );
}