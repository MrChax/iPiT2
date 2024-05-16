import { NavBar } from './components/NavBar/NavBar.jsx';
import { Index } from './components/Index/Index.jsx';
import { QuienesSomos } from './components/QuienesSomos/QuienesSomos.jsx';
import { Ingreso } from './components/Ingresar/Ingreso.jsx';
import { CrearCuenta } from './components/CrearCuenta/CrearCuenta.jsx'; // Add this import
import { BrowserRouter, Route, Routes } from "react-router-dom";



function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/quienes-somos" element={<QuienesSomos />} />
        <Route path="/ingresar" element={<Ingreso />} />
        <Route path="/crear-cuenta" element={<CrearCuenta />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
