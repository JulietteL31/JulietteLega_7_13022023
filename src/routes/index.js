import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutBlank from '../layouts/Blank';
import LayoutDefault from '../layouts/Default';
import Error404 from '../pages/Error/Error';
import House from '../pages/House/House'
import Logement from '../pages/Logement/Logement'
import About from '../pages/About/About'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>

                <Route element={<LayoutDefault />}>
                    <Route path="/" element={<House />} />
                </Route>

                <Route element={<LayoutBlank/>}>
                    <Route path="*" element={<Error404 />}/>
                </Route>

                <Route element={<LayoutDefault />}>
                    <Route path="/logement/:id" element={<Logement />}/>
                </Route>

                <Route element={<LayoutDefault />}>
                    <Route path="/apropos" element={<About />} />
                </Route>

            </Routes>
        </BrowserRouter>
    );
};

export default Router;

