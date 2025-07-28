import { createContext,useContext } from "react";

export const Themecontext = createContext({
    thememode: "light",
    darktheme: () => {},
    lighttheme: () => {},
})

export const Themeprovider = Themecontext.Provider


//custom hook as usetheme 
export default function usetheme() {
    return useContext(Themecontext)

}