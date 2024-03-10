import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import App from './App.jsx';
import About from '../pages/about/index.jsx'
import Contact from "../pages/contact/index.jsx";
import Products from "../pages/products/index.jsx";
import Assistance from "../pages/assistance/index.jsx";
import Colors from "../pages/colors-inspirations/index.jsx"; 

function AppRoutes() {
    return (
        <>
            <HashRouter>
                <Routes>
                    <Route path='*' element={<Navigate to='/home' />} />
                    <Route path='/home' element={<App />} />
                    <Route path='/sobre' element={<About />} />
                    <Route path='/contato' element={<Contact />} />
                    <Route path='/produtos' element={<Products />}/>
                    <Route path='/assistencia' element={<Assistance />}/>
                    <Route path='/cores-inspiracoes' element={<Colors/>} />
                </Routes>
            </HashRouter>
        </>
    )
}

export default AppRoutes
