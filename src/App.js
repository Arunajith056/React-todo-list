import "./App.css";
import Header from "./components/Header/Header";
import Showlist from "./components/Showlist/Showlist";
import Footer from "./components/Footer/Footer";
import Additem from "./components/additem/Additem";



function App() {
  return (
    <div className="App">
      <div className="app_body">
        <Header />
        <br />
        <Additem />
        <br />
        <Showlist />
        <br />

        <Footer />
      </div>
    </div>
  );
}

export default App;