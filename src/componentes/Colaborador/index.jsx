import "./colaborador.css"

export default function Colaborador({nome, imagem, cargo, corPrimaria}) {

    const nomeEstilo = {color: corPrimaria}

    return(
        <div className="colaborador">
            <div className="cabecalho">
                <img src={imagem} alt={nome} />
            </div>
            <div className="rodape">
                <h4 style={nomeEstilo}>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
} 