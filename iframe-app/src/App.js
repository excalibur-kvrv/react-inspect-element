import { useEffect, useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TaggedElement from './TaggedElement';

function App() {
  const [enableTagging, setTagging] = useState(false);
  const appRef = useRef(null);
  const messageHandler = (evt) => {
    if (evt.origin !== "http://localhost:3000") return;
    setTagging(!enableTagging);
    evt.source.postMessage("recieved", evt.origin);
  };

  useEffect(() => {
    const app = appRef.current
    if (app) {
      window.addEventListener("message", messageHandler, false);
      return () => {
        window.removeEventListener("message", messageHandler, false);
      }
    }
  });

  return (
    <div className="App" ref={appRef}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TaggedElement 
          component={
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
          }
          enableTagging={enableTagging}
        />
        <TaggedElement 
          component={
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          }
          enableTagging={enableTagging}
        />
      </header>
    </div>
  );
}

export default App;
