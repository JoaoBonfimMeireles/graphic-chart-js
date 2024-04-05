import { Link } from "react-router-dom";

export default function Home() {
    return(
        <div>
            tetse
            <Link to="/">Home</Link>
            <Link to="/grafico1">Primeira tabela</Link>
            <Link to="/grafico2">Segunda tabela</Link>
            <Link to="/grafico3">Terceira tabela</Link>
        </div>
    )
}