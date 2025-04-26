import "./App.css";
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Projects from './components/Projects';
import { useState,useEffect } from "react";

function App() {

  const [ theme , setTheme] = useState(localStorage.getItem("theme") || "white")
      
  useEffect( () => {
    if(theme === "pink"){
      document.documentElement.classList.add("pink-theme");
      document.documentElement.classList.remove("white-theme");
    }
    else{
      document.documentElement.classList.add("white-theme");
      document.documentElement.classList.remove("pink-theme");
    }
    localStorage.setItem("theme",theme);
  },[theme]);

  return (
    <div className ="flex flex-col w-full h-full overflow-hidden">
      <Navbar theme={theme} setTheme={setTheme}/>
      <div className='mx-[17rem] flex flex-row w-full justify-center items-center gap-[35rem]'>
        <Skills theme={theme}/>
        <Projects theme ={theme}/>
      </div>
    </div>
  );
}

export default App;
