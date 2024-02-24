import { createContext, useReducer} from "react";
import ThemeReducer from "../reducers/ThemeReducers";

export const ThemeContext = createContext()

export function ThemeProvider({children}){
    
    const [state,dispatch] = useReducer(ThemeReducer,{
        color:"warning",
        mode:"dark"
    })
    const changeColor=(value) => {
        dispatch({
            type:"CHANGE_COLOR",
            payload:value
        })
    }

    const changeMode=(value) => {
        dispatch({
            type:"CHANGE_MODE",
            payload:value
        })
    }
    return(
    <ThemeContext.Provider value={{...state,changeMode ,changeColor }}>
        {children}
    </ThemeContext.Provider>
    )
}