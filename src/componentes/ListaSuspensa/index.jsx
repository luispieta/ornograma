import "./listaSuspensa.css";

export default function ListaSuspensa({obrigatorio, label, name, itens = [], valor, alterado}) {

    return(
        <div className="lista-suspensa">
            <label htmlFor={name}>{label}</label>
            <select 
                name={name} 
                id={name} 
                required={obrigatorio}
                onChange={evento => alterado(evento.target.value)} 
                value={valor}
            >
                <option key="vazio" value=""></option>
                {itens.map((item, index) => (
                    <option key={index} value={item}>
                        {item}
                    </option>
                ))}
            </select>
        </div>
    );
};