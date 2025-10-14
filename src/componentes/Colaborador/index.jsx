import "./colaborador.css"

export default function Colaborador({nome, imagem, cargo, corPrimaria, corDeFundo}) {

    const nomeEstilo = {color: corPrimaria}

    const corFundo ={backgroundColor: corDeFundo} 

    return(  
        <div className="colaborador">
            <div className="cabecalho" style={corFundo}>
                <img src={imagem} alt={nome} />
            </div>
            <div className="rodape">
                <h4 style={nomeEstilo}>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
} 