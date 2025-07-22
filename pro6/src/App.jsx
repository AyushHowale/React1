import { useState, useCallback, useEffect, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [length, setlength] = useState(0);
  const [number, setnumber] = useState(false);
  const [character, setcharacter] = useState(true);
  const [password, setpassword] = useState(" ");

  const passwordgenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (number) str += "1234567890";
    if (character) str += "!@#$%^&*";
    //Main code for password generation
    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setpassword(pass);
  }, [length, number, character, setpassword]);

  const passref = useRef(null)

  const copyPasswordToClipboard = useCallback(() => {
    passref.current?.select();
    window.navigator.clipboard.writeText(password)
  }, [password]);

  useEffect(() => {
    passwordgenerator();
  }, [length, number, character, passwordgenerator]);

  return (
    <>
      <div className="w-full max-w-md mx-auto rounded-lg px-4 my-8 text-orange-500 bg-yellow-200 h-full text-center ">
        <h1 className="text-white text-center my-3 font-bold text-3xl">
          Password Generator
        </h1>
        <div className="flex shadow rounded-lg overeflow-hidden mb-4">
          <input
            type="text"
            placeholder="password"
            value={password}
            readOnly
            className="outline-none w-full py-1 px-3 bg-white"
          />
          <button
            className="bg-blue-600 text-white rounded-lg w-15 cursor-pointer"
            onClick={copyPasswordToClipboard}
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={8}
              max={20}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setlength(e.target.value);
              }}
            />
            <label className="text-lg">Length:{length}</label>
            <input
              type="checkbox"
              defaultChecked={number}
              onChange={() => {
                setnumber((prev) => !prev);
              }}
            />
            <label className="text-lg">Numbers</label>
            <input
              type="checkbox"
              defaultChecked={character}
              onChange={() => {
                setcharacter((prev) => !prev);
              }}
            />
            <label className="text-lg"> Characters </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
