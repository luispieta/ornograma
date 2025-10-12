import "./time.css"
import Colaborador from "../Colaborador"

export default function Time(props) {

    const fundo = {backgroundColor: props.corSegundaria}

    const borda = {borderColor: props.corPrimaria}

    return(
        props.colaboradores.length > 0 && <section className="time" style={fundo}>
            <h3 style={borda}>{props.nome}</h3>
            <div className="colaboradores">
                {props.colaboradores.map(colaborador => 
                    <Colaborador 
                        nome={colaborador.nome}
                        cargo={colaborador.cargo}
                        imagem={colaborador.imagem}
                        corPrimaria={props.corPrimaria}
                    />
                )}
            </div>
        </section>
    )
}