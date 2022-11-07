import './App.css';
import Header from './Layouts/Header/Header';
import Header_Logo from "./Assets/Img/Header_Logo/Header_Logo.png"
import Home from './Containers/Home/Home';

function App() {
  return (
    <>
      <Header Header_Logo={Header_Logo} />
      <Home />
    </>
  );
}

export default App;
