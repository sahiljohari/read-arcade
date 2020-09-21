import React from "react";
import { GlobalProvider } from "./store/context";
import "./App.css";

import Homepage from "./pages/Homepage/Homepage";

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <Homepage />
      </div>
    </GlobalProvider>
  );
}

export default App;
