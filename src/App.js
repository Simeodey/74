import { useCallback, useMemo, useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState('');

  const isNumber = useMemo(()=>{
    return !isNaN(Number(input))
  },[input])

  const handleInput = useCallback((e)=>{
    setInput(e.target.value)
  },[])
  return (
    <div className="App">
     <div className="control has-icons-right">
        <input
          className="input is-large"
          type="text"
          placeholder="Enter number..."
          onInput={handleInput}
        />
        <span className="icon is-small is-right">
          {input && (isNumber?<i className="fas fa-check" />:<i className="fas fa-times" />)}
        </span> 
      </div>
    </div>
  );
}

export default App;
