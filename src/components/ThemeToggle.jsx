import { IoIosSunny } from "react-icons/io";
import { IoIosBowtie } from "react-icons/io";
import '../App.css';

const ThemeToggle = ({theme,setTheme}) => {
    
    return (
        <button onClick={() => setTheme( theme === "pink" ? "white" : "pink")}>
            {
                theme === "pink" ? (<IoIosBowtie size={35} />) : (<IoIosSunny size={30}/>)
            }
        </button>  
    )
}

export default ThemeToggle