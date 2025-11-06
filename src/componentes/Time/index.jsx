import "./time.css"
import Colaborador from "../Colaborador"

export default function Time({corPrimaria, deletar, colaboradores, corSegundaria, nome}) {

    const fundo = {backgroundColor: corSegundaria}

    const borda = {borderColor: corPrimaria}

    return(
        colaboradores.length > 0 && <section className="time" style={fundo}>
            <h3 style={borda}>{nome}</h3>
            <div className="colaboradores">
                {colaboradores.map(colaborador => {
                    return <Colaborador 
                        key={colaborador.nome}
                        nome={colaborador.nome}
                        cargo={colaborador.cargo}
                        imagem={colaborador.imagem}
                        corPrimaria={corPrimaria}
                        corDeFundo={corPrimaria}
                        deletar={deletar}
                    />
                })}
            </div>
        </section>
    )
}