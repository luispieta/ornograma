import { useState } from "react";
import "./campoTexto.css"

export default function CampoTexto (props){

    const placeholderModificada = `${props.placeholder}...`;

    const [valor, setValor] = useState("")

    const digitado = (evento) => {
        props.alterado(evento.target.value)
    }

    return(
        <div className="campo-texto">
            <label htmlFor={props.name}>{props.label}</label>
            <input 
                type="text" 
                name={props.name} 
                id={props.name}
                placeholder={placeholderModificada}
                required={props.obrigatorio}
                onChange={digitado}
                value={props.valor}
            />
        </div>
    );
}