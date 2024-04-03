import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home/Index";
import TableOne from "./Components/Pages/TablesComponents/TableOne/TableOne";
import TableTwo from "./Components/Pages/TablesComponents/TableTwo/TableTwo";
import TableThree from "./Components/Pages/TablesComponents/TableThree/TableThree";

const RoutesComponent = () => {
    return (
        <BrowserRouter basename="/meu-app">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/grafico1" element={<TableOne />} />
                <Route path="/grafico2" element={<TableTwo />} />
                <Route path="/grafico3" element={<TableThree />} />
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesComponent;
