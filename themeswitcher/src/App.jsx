import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Themeprovider } from "./Contexts/Theme";
import { useEffect } from "react";
import ThemeBtn from "./Components/Theme";
import Card from "./Components/Card";


function App() {
  const [thememode,setthememode] = useState("light")

const lighttheme = () => {
  setthememode("light")
} 
const darktheme = () => {
  setthememode("dark")
} 

useEffect(()=>{
  document.querySelector('html').classList.remove("light","dark")
  document.querySelector('html').classList.add(thememode)
},[thememode])




  return (
    <>
    <Themeprovider value={{thememode,lighttheme,darktheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
           
            <Card />
          </div>
        </div>
      </div>
      </Themeprovider>
    </>
  );
}

export default App;
