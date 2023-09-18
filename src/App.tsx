import React, {useState} from 'react';
import './index.css';
//@ts-ignore

const App = () => {
  const [state, setState] = useState<number>(0)
  return (
    <div>
      Hello, my frend! It is an App-component.
      
      <h3>{state}</h3>
      <button onClick={()=>setState(state+1)}>clickMe</button>
    </div>
  );
};

export default App;