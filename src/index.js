import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
// import Cskrcb from "./Reacttask/Cskrcb";

// import Mainconnect from "./Component/Mainconnect";
// import Design from "./Class";
import Socialbtn from "./Reacttask/Socialbtn";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <Design></Design> */}
    {/* <Mainconnect /> */}
    {/* <Cskrcb></Cskrcb> */}

    {/* <Socialbtn></Socialbtn> */}
  </React.StrictMode>
);

reportWebVitals();
