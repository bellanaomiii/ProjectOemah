import { Route, Routes } from 'react-router-dom';
import About from './Components/About.jsx';
import Catalog from './Components/Catalog.jsx';
import Contacts from './Components/Contacts.jsx';
import Nav from './Components/Nav'; 

function App() {
  return (
    <div className="bg-amber-900">
      <Nav /> 
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/contact" element={<Contacts />} />
      </Routes>
    </div>
  );
}

export default App;
