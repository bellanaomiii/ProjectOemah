import Catalog from "./Components/Catalog";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";

function App() {
  return (
      <div className="bg-white">
        <Nav/>
        <Catalog/>
        <Footer/>
      </div>
  );
}

export default App;
