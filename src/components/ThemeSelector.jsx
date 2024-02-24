import { useContext } from 'react';
import './ThemeSelector.css';
import { ThemeContext } from '../contexts/ThemeContext';
import light from '../Assets/light.svg'
import dark from '../Assets/dark.svg'
const themeColors = ["warning","success","danger","primary"]

export default function ThemeSelector(){
    const {changeColor,mode,changeMode} = useContext(ThemeContext)
    const toggleMode = () => {
        changeMode(mode === "dark" ? "light" : "dark")
        console.log(mode);
    }
    return(
    <div className="container theme-selector">
        <div className="mode-toggle">
            <img 
            onClick={toggleMode}
            src={mode === 'dark' ? dark : light } 
            alt="dark light mode" 
            
            />
        </div>
        <div className="theme-links">
            {
                themeColors.map(color => (
                    <span
                    key={color}
                    className={`bg-${color}`}
                    onClick={() => changeColor(color)}
                    >
                    </span>
                ))
            }
        </div>
    </div>
    )
}