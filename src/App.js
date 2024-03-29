import "./App.css";
import Navbar from "./components/Navbar";
// import Forms from "./components/Forms";
import About from "./components/About";

function App() {
  return (
    <>
      <Navbar title="Text Utils" />
      {/* passing title as props   */}
      {/* calling component from another file in component folder */}
      {/* container class in bootstrap puts the elements in center  */}
      <div className="container">
        {/* <Forms text="Enter your text here"/> */}
        <About />
      </div>
    </>
  );
}

export default App;