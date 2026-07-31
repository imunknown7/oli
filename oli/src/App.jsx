import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Artist from "./pages/Artist";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

function App() {
    return (
        <BrowserRouter>
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/artist/:artistName" element={<Artist />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
