import React from 'react';
import ReactDOM from 'react-dom';
import Card from "./Card";
import app from "./app.jsx";
import "./index.css";

ReactDOM.render(
  <>
  <h1 className="heading" >List of top 5 netflix series</h1>
       {app.map(function n(val){
 return(
  <Card 
  key={val.id}
  imgsrc={val.imgsrc}
  title={val.title}
  sname={val.sname}
  link={val.link}
  />
 );
       })}
  </>,
  document.getElementById('root')
);