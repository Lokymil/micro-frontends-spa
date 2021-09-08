import { BrowserRouter } from "react-router-dom";
import "./App.css";
import MicroFrontend from "./components/MicroFrontend";

const { REACT_APP_MICRO_1_HOST, REACT_APP_MICRO_2_HOST } = process.env;

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>I am header</header>
        <MicroFrontend host={REACT_APP_MICRO_1_HOST} code="Micro1" />
        <MicroFrontend host={REACT_APP_MICRO_2_HOST} code="Micro2" />
      </div>
    </BrowserRouter>
  );
}

export default App;
