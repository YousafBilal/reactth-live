import React from 'react'
import './App.css'
import Home from './pages/home'
import Admin from './pages/adminpage'
import CheckResult from './pages/checkResult'
import NameId from './pages/nameId'
import Record from './pages/record'
import {Route ,Routes} from "react-router-dom"
import ShowData from './pages/showData'



export default function App() {
  

 return(
  <>
  <Routes>
      <Route path="/" element={<Home/>}/> 
      <Route path="/admin" element={ <Admin/>}/>  
      <Route path="/nameId" element={<NameId/>}/>
      <Route path="/record" element={<Record/>}/>
      <Route path="/checkResult" element={<CheckResult/>}/>
      <Route path="/showData" element={<ShowData/>}/>

      </Routes>
   
  </>
 )


}

// import React, { useState, useEffect } from 'react';

// export default function App() {
//   const [input1Value, setInput1Value] = useState([] );
//   const [input2Value, setInput2Value] = useState([]);
//   const [input3Value, setInput3Value] = useState([]);
//   const [input4Value, setInput4Value] = useState([]);

// //   useEffect(() => {

// const handle=()=>{

//     localStorage.setItem('input1', input1Value);
//     localStorage.setItem('input2', input2Value);
//     localStorage.setItem('input3', input3Value);
//     localStorage.setItem('input4', input4Value);
// }

  
// //   }, [input1Value, input2Value, input3Value, input4Value]);
  
//   return (
//     <div>
//         <h1>Hello</h1>
//       <input value={input1Value} onChange={(e) => setInput1Value(e.target.value)} />
//       <input value={input2Value} onChange={(e) => setInput2Value(e.target.value)} />
//       <input value={input3Value} onChange={(e) => setInput3Value(e.target.value)} />
//       <input value={input4Value} onChange={(e) => setInput4Value(e.target.value)} />
//       <button onClick={handle}>Submit</button>
//     </div>
//   );
// }