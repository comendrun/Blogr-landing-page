import "./App.css";
import Body from "./Components/Body/Body";
import Header from "./Components/Header/Header";
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div className="App flex flex-col gap-32">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
