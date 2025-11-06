import React from "react";
import "./Book.css";
import{useState } from 'react'

function Book(props) {
  const [count, setCount] = useState(0);
  function inc() {
    if (count < 10) {
      setCount(count + 1);
    }else{
      alert("Limit Reached")
    }
  }
  function dec() {
    if(count > 0) {
      setCount(count - 1);
    }else{
      alert("Cannot go below 0");
    }
  }
  return (
    <div id="book">
        <img src="https://imgs.search.brave.com/AB_CDLUkAHEJK3p4MS91TMBS8JGDdyiwKSLDR7YqTw8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTU3/MjQ5ODc4My92ZWN0/b3Ivc2Nob29sLW1h/dGgtYm9vay1pbGx1/c3RyYXRpb24uanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPTBJ/MGdEZjFkbHB1M25G/Tnd0WUlsRFJhWjVq/M0cxbnIyWlVPYkli/dmJ3OUk9" alt="Book Cover" height={100} width={100} />
        <h1>Title:{props.title}</h1>
        <h1>Price:{props.price}</h1>
        <div> 
            <button onClick={inc}>+</button>
            <span>{count}</span>
            <button onClick={dec}>-</button>
        </div>
    </div>
  )
}

export default Book