import { BrowserRouter, Route, Switch } from "react-router-dom";
import Alternate from "./components/Alternate";
import Home from "./components/Home";

function App() {
  return (
    <div className="micro-app">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/2/alternate" component={Alternate} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
