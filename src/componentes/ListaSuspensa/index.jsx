import { useState } from "react";
import "./listaSuspensa.css";

export default function ListaSuspensa(props) {

    const [valor, setValor] = useState("Selecione");

    const selecionar = (evento) => {
        setValor(evento.target.value);
        console.log(evento.target.value);
    }

    return(
        <div className="lista-suspensa">
            <label htmlFor={props.name}>{props.label}</label>
            <select onChange={selecionar} value={valor} name={props.name} id={props.name} required={props.obrigatorio}>
                {props.itens.map(item => (
                    <option key={item}>{item}</option>
                ))}
            </select>
        </div>
    );
};