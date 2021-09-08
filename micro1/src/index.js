import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

window.renderMicro1 = (containerId) => {
  ReactDOM.render(<App />, document.getElementById(containerId));
};

window.unmountMicro1 = (containerId) => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};

if (!document.getElementById("Micro1-container")) {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById("root")
  );
}
