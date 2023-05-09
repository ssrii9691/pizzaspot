import logo from "./logo.svg";
import "./App.css";
import Click from "./components/Headerpart/Click";
import Home from "./components/Headerpart/Home";
import { Route, Routes } from "react-router-dom";
import Menu from "./components/Mainpart/Menu";
import NonVegetarianPizza from "./components/Mainpart/NonVegetarianPizza";
import VegetarianPizza from "./components/Mainpart/VegetarianPizza";
import Sides from "./components/Mainpart/Sides";



function App() {
  return (
    <>
    <Click/>
    <Home/>
    <Routes>
      <Route exact path="/" element={<Menu/>}/>
      <Route exact path="/nonVegPizza" element={<NonVegetarianPizza/>}/>
      <Route exact path="/VegPizza" element={<VegetarianPizza/>}/>
      <Route exact path="/sides" element={<Sides/>}/>

    </Routes>
    </>
  );
}

export default App;
