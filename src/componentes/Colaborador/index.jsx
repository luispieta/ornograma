import "./colaborador.css"
import Icone from "../Icone"

export default function Colaborador({nome, imagem, cargo, corPrimaria, corDeFundo, deletar}) {

    const nomeEstilo = {color: corPrimaria}

    const corFundo ={backgroundColor: corDeFundo} 

    return(  
        <div className="colaborador">
            <div className="deletar" onClick={deletar}>
                <Icone imagem="public\imagens\lixeira.png" nome="Lixeira" />
            </div>
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