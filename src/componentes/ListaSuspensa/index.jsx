import "./listaSuspensa.css";

export default function ListaSuspensa(props) {

    return(
        <div className="lista-suspensa">
            <label htmlFor={props.name}>{props.label}</label>
            <select 
                name={props.name} 
                id={props.name} 
                required={props.obrigatorio}
                onChange={evento => props.alterado(evento.target.value)} 
                value={props.valor}
            >
                <option value=""></option>
                {props.itens.map(item => (
                    <option key={item}>{item}</option>
                ))}
            </select>
        </div>
    );
};