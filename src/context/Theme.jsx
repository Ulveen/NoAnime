import { createContext } from "react"

export const THEME = {
    light:{
        mode: "Light",
        backgroundColor: "#fff8dc",
        color: "black",
        box:{
            border: "2px solid black",
        },
        title:{
            backgroundColor: "skyblue",
            color: "black"
        }
    },
    dark:{
        mode: "Dark",
        color: "white",
        backgroundColor: "black",
        box:{
            border: "2px solid white"
        },
        title:{
            backgroundColor: "darkblue",
            color: "white"
        }
    }
}
export const Theme = createContext(THEME.dark)