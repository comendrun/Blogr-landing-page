import "./App.css";
import Body from "./Components/Body/Body";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { useState, useEffect } from "react";



function App() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth>1100);

  function detectSize() {
    if (window.innerWidth > 1100) {
      setIsDesktop(true);
    } else {
      setIsDesktop(false);
    }
  }

  useEffect(() => {
    window.addEventListener("resize", detectSize);
    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [isDesktop]);

  return (
    <div className="App flex flex-col gap-32 m-0 p-0">
    
      <Header />
      <Body isDesktop={isDesktop} />
      <Footer />
    </div>
  );
}

export default App;
