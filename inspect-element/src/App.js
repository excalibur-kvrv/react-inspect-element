/* eslint-disable jsx-a11y/iframe-has-title */
import './App.css';
import { useState, useRef } from "react";

function App() {
  const [inspect, setInspect] = useState(false);
  const iframeRef = useRef(null);
  const onClickHandler = () => {
    setInspect(!inspect);
    const iframe = iframeRef && iframeRef.current;
    iframe.contentWindow.postMessage("test", "*");
  };


  return (
    <div className="App">
      <div className='App-header'>
        <button onClick={onClickHandler}>Inspect</button>
        { inspect ? "Inspecting iframe": ""}
      </div>
      <iframe src="http://0.0.0.0:3006" ref={iframeRef} height="900px" width="400px"></iframe>
    </div>
  );
}

export default App;
