import "./campoTexto.css"

export default function CampoTexto (props){

    const placeholderModificada = `${props.placeholder}...`;

    return(
        <div className="campo-texto">
            <label htmlFor={props.htmlFor}>{props.label}</label>
            <input type="text" name={props.name} id="nomeStr" placeholder={placeholderModificada}/>
        </div>
    );
}