import "./App.css";
import Header from "./components/HeaderComponent";
import Footer from "./components/FooterComponent";
import RegionSelector from "./components/RegionSelectorComponent";
function App() {
  return (
    <div>
      <Header />
      <RegionSelector />
      <Footer />
    </div>
  );
}

export default App;
