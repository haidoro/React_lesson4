import React from 'react';
import './App.css';


const Hello = (props) => {
  return(
    <div>
      <h2>Hello!{props.name}</h2>
      <p>functionalコンポーネントを作成した</p>
    </div>
  )
}


export default Hello;
