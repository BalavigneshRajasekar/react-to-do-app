import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ToDo from "./ToDo";

function App() {
  return (
    <div className="App">
      <div>
        <h4 className="text-center text-success">My ToDo</h4>
        <ToDo></ToDo>
      </div>
    </div>
  );
}

export default App;
