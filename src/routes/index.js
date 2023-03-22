import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error404 from '../pages/Error/Error';
import House from '../pages/House/House'
import Logement from '../pages/Logement/Logement'
import About from '../pages/About/About'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                    <Route exact path="/" element={<House />} />
                    <Route path="/*" element={<Error404 />}/>
                    <Route exact path="/logement/:id" element={<Logement />}/>
                    <Route exact path="/apropos" element={<About />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;

