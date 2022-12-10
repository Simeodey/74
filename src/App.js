import { useCallback, useMemo, useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState('a');

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
          <i className={`fas fa-${isNumber?'check' : 'times'}`} />
        </span> 
      </div>
    </div>
  );
}

export default App;
