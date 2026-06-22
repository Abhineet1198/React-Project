import { useState, useCallback,useEffect,useRef} from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    let characters = lowerCase + upperCase;
    if (numberAllowed) {
      characters += numbers;
    }
    if (charAllowed) {
      characters += specialChars;
    }

    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length + 1);
      generatedPassword += characters.charAt(randomIndex);
    }

    setPassword(generatedPassword);
  }, [length, numberAllowed, charAllowed, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  const copyPasswordToClipboard = useCallback(() => {
    if (passwordRef.current) {
      passwordRef.current.select();
      document.execCommand("copy");
      alert("Password copied to clipboard!");
    }
  }, [passwordRef]);



  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md px-4 my-8 text-orange-500 bg-gray-700">
        <h1 className="text-white text-center text-2xl font-bold mb-4">
          Password Generator
        </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            className="w-full px-3 py-1 outline-none bg-white border-gray-300 rounded-md"
            placeholder="password"
            value={password}
            readOnly
            ref={passwordRef}
          />
          <button 
          className="bg-blue-700 text-white px-3 py-1" 
          onClick={copyPasswordToClipboard}>copy</button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min="6"
              max="100"
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length: {length} </label>


          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              checked={numberAllowed}
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label>Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              checked={charAllowed}
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label>Special Characters</label>
          </div>
        </div>
        <button
          className="bg-blue-700 text-white px-3 py-1 mt-4 w-full rounded-md"
          onClick={passwordGenerator}
        >
          Generate Password
        </button>
        </div>
    </>
  );
}

export default App;
