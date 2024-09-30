import React, { useEffect } from 'react'
import "./index.css";
import { useDispatch,useSelector } from 'react-redux';
import { getAdvice } from './store/action';
import { DotLoader } from "react-spinners";

const App = () => {
  const dispatch = useDispatch();
  const advice = useSelector((state) => state.advice.data?.slip?.advice);
  const isLoading = useSelector((state) => state.advice.isLoading);
  
  useEffect(() => {
    dispatch(getAdvice())
  },[])

  const handleClick = () => {
    dispatch(getAdvice())
  }
  return (
    <div className="app">
      <div className="card">
        <h1 className="heading">
          {
            isLoading ? <DotLoader color = "#FF7070" /> : 
            advice || "No advice available"
          }
        </h1>
        <button className="button" onClick={handleClick}>
          <span>GIVE ME ADVICE!</span>
        </button>
      </div>
    </div>
  )
}

export default App