import { Link } from "react-router-dom";

function TextDrawer() {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/grafico1">Primeira tabela</Link>
            <Link to="/grafico2">Segunda tabela</Link>
            <Link to="/grafico3">Terceira tabela</Link>
        </div>
    )
}

export default TextDrawer;