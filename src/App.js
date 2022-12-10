import { useCallback, useMemo, useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState('');

  const isNumber = useMemo(()=>{
    return !isNaN(Number(text))
  },[text])

  const handleInput = useCallback((e)=>{
    setText(e.target.value)
  },[])
  return (
    <div className="App">
     <div className="control has-icons-right">
        <input
          className="input is-large"
          type="text"
          placeholder="Enter number..."
          onChange={handleInput}
        />
        <span className="icon is-small is-right">
          {text && (isNumber?<i className="fas fa-check" />:<i className="fas fa-times" />)}
        </span> 
      </div>
    </div>
  );
}

export default App;
