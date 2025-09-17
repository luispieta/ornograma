import "./campoTexto.css"

export default function CampoTexto (props){

    const placeholderModificada = `${props.placeholder}...`;

    return(
        <div className="campo-texto">
            <label htmlFor={props.name}>{props.label}</label>
            <input 
                type="text" 
                name={props.name} 
                id={props.name}
                placeholder={placeholderModificada}
                required={props.obrigatorio}
            />
        </div>
    );
}