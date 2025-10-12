import Icone from "../Icone"
import "./rodape.css"

export default function Rodape() {
    return(
        <footer className="footer">
            <div className="icones">
                <a href="https://github.com/luispieta" target="_blank">
                    <Icone imagem="/public/imagens/github.png" nome="Github"/>
                </a>
                <a href="https://linkedin.com/in/luis-felipe-pieta-aa8221240" target="_blank">
                    <Icone imagem="/public/imagens/linkedin.png" nome="Linkedin"/>
                </a>
                <a href="https://instagram.com/nisul_pieta" target="_blank">
                    <Icone imagem="/public/imagens/instagram.png" nome="Instagram"/>
                </a>
            </div>
            <div className="organograma-icone">
                <img src="/imagens/orgonagrama.png" alt="Organograma das equipes" />
            </div>
            <div className="frase">
                <p>Desenvolvido por Luis Felipe Pieta.</p>
            </div>
        </footer>
    )
}