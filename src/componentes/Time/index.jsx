import "./time.css"
import Colaborador from "../Colaborador"
import hexToRgba from 'hex-to-rgba';

export default function Time({cor, deletar, colaboradores, nome, mudarCor, id}) {

    const fundo = cor ? { backgroundColor: hexToRgba(cor, "0.5") } : {};

    const borda = {borderColor: cor}

    return(
        colaboradores.length > 0 && <section className="time" style={fundo}>
            <input 
                type="color" 
                className="input-cor" 
                value={cor} 
                onChange={evento => mudarCor(evento.target.value, id)}
            />
            <h3 style={borda}>{nome}</h3>
            <div className="colaboradores">
                {colaboradores.map(colaborador => {
                    return <Colaborador 
                        key={colaborador.id}
                        id={colaborador.id}
                        nome={colaborador.nome}
                        cargo={colaborador.cargo}
                        imagem={colaborador.imagem}
                        corDeFundo={cor}
                        deletar={deletar}
                    />
                })}
            </div>
        </section>
    )
}