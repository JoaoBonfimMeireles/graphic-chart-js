import { Link } from "react-router-dom";

function Drawer() {
    return (
        <div className="drawer lg:drawer-open max-w-[400px] left-0 relative mr-[-765px]">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-side max-h-[650px]">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-50 h-full bg-base-200 flex ">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/grafico1">Primeira tabela</Link>
                    </li>
                    <li>
                        <Link to="/grafico2">Segunda tabela</Link>
                    </li>
                    <li>
                        <Link to="/grafico3">Terceira tabela</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Drawer;
