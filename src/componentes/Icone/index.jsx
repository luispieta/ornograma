import "./icone.css"

export default function Icone({imagem, nome}) {
    return(
        <div className="icone">
            <ul>
                <li>
                    <img src={imagem} alt={nome} />
                </li>
            </ul>
        </div>
    )
}