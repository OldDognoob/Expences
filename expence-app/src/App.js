import React from 'react'
import Header from "./components/Header";
import Balance from "./components/Balance";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <div className="app-wrapper">
        <Header/>
        <Balance/>
      </div>
      
    </div>
  )
}
export default App;


