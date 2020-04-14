import React from 'react';
import logo from './logo.svg';
import './App.css';
import { csv } from 'd3'
import {useEffect, useState} from 'react';

const App = () => {
  const  [ data, setData ] = useState([]);

  useEffect(() => {
    csv('viz/CATALOG.csv').then(data => {
      // setData(data);
      console.log(data['Time']);
    });
  }, []);
  // console.log(data);



  return (
    <div className="App">
      
    </div>
  );
}

export default App;
