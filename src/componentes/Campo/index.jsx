import { useState } from "react";
import "./campo.css"

export default function Campo ({type = "text", obrigatorio, label, name, placeholder, valor, alterado}){

    const placeholderModificada = `${placeholder}...`;

    const digitado = (evento) => {
        alterado(evento.target.value)
    }

    return(
        <div className={`campo campo-${type}`}>
            <label htmlFor={name}>{label}</label>
            <input
                type={type}
                name={name} 
                id={name}
                placeholder={placeholderModificada}
                required={obrigatorio}
                onChange={digitado}
                value={valor}
            />
        </div>
    );
}