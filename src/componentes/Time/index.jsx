import "./time.css"
import Colaborador from "../Colaborador"
import hexToRgba from 'hex-to-rgba';

export default function Time({cor, deletar, colaboradores, nome, mudarCor}) {

    const fundo = { backgroundColor: hexToRgba(cor, "0.5") };

    const borda = {borderColor: cor}

    return(
        colaboradores.length > 0 && <section className="time" style={fundo}>
            <input 
                type="color" 
                className="input-cor" 
                value={cor} 
                onChange={evento => mudarCor(evento.target.value, nome)}
            />
            <h3 style={borda}>{nome}</h3>
            <div className="colaboradores">
                {colaboradores.map(colaborador => {
                    return <Colaborador 
                        key={colaborador.nome}
                        nome={colaborador.nome}
                        cargo={colaborador.cargo}
                        imagem={colaborador.imagem}
                        cor={cor}
                        corDeFundo={cor}
                        deletar={deletar}
                    />
                })}
            </div>
        </section>
    )
}