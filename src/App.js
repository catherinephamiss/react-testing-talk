import React from "react";
import "./App.css";
import Header from "./components/common_parts/header";
import LogIn from "./components/pages/LogInForm";
function App() {
  return (
    <div className="App">
      <Header />
      <LogIn />
    </div>
  );
}

export default App;
