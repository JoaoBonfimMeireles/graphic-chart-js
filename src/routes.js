import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home/Index";
import TableOne from "./Components/Pages/TableOne/TableOne";
import TableTwo from "./Components/Pages/TableTwo/TableTwo";
import TableThree from "./Components/Pages/TableThree/TableThree";

const RoutesComponent = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/grafico1" element={<TableOne />} />
                <Route exact path="/grafico2" element={<TableTwo />} />
                <Route exact path="/grafico3" element={<TableThree />} />
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesComponent;
