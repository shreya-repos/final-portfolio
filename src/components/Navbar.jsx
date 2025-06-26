import ThemeToggle from './ThemeToggle';
import LikeCounter from './LikeCounter';
import { FaGithub } from "react-icons/fa";

const Navbar = ({theme,setTheme}) => {

    return (
        <nav className='flex w-screen justify-end gap-6 p-4'>
                <ThemeToggle theme={theme} setTheme={setTheme}/>
                <LikeCounter />
                <button>
                    <a href="https://github.com/shreya-repos">
                        <FaGithub size={35} />
                    </a>
                </button>
        </nav>
    )
}

export default Navbar;