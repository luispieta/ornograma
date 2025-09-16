import "./listaSuspensa.css";

export default function ListaSuspensa(props) {
    return(
        <div className="lista-suspensa">
            <label htmlFor={props.name}>{props.label}</label>
            <select name={props.name} id={props.name}>
                {props.itens.map(item => (
                    <option value={item} key={item}>{item}</option>
                ))}
            </select>
        </div>
    );
};