import React, {useState, useEffect} from "react";


const UseEffectCleanup = () => {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  const changeWindowHeight = () => {
    setWindowHeight(window.innerHeight);
  }

  useEffect(() => {
    window.addEventListener('resize', changeWindowHeight);

    return () => {
      window.removeEventListener('resize', changeWindowHeight);
    }
  }, [windowHeight]);

  return <>
    <h1>useEffect Cleanup</h1>
    <h2>{windowHeight}px</h2>
  </>
}

export default UseEffectCleanup;