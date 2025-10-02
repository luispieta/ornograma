import "./time.css"

export default function Time(props) {

    const fundo = {backgroundColor: props.corSegundaria}

    const borda = {borderColor: props.corPrimaria}

    return(
        <section className="time" style={fundo}>
            <h3 style={borda} >{props.nome}</h3>
        </section>
    )
}