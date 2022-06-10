import React from "react";
import "./App.css";

const App = () => {
  return <div className="App">{process.env.REACT_APP_MODE}</div>;
  //return <div className="App">{process.env.NODE_ENV === "development" ? process.env.REACT_APP_DEV_MODE : process.env.REACT_APP_PRO_MODE}</div>;
};

export default App;
