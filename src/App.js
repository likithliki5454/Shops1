
import {BrowserRouter,Route,Routes,} from "react-router-dom";
import Onboard from "./Log@sign/Onboard";
import Login from "./Log@sign/Login";
import Signup from "./Log@sign/Signup";
import Create from "./Log@sign/Create";
import Menu from "./Mainmenu/Menu";



function App() {

return (

  <BrowserRouter>
  <Routes>

    <Route path="/" element={<Onboard />}>
      <Route path="Login" element={<Login />} />
      <Route path="Signup" element={<Signup />} />
      <Route path="Create" element={<Create />} />
      <Route path="Menu" element={<Menu/>} />
    </Route>
  </Routes>

</BrowserRouter>

);
}

export default App;







/////////----------how to push the new array to the state variable----////////////////

// import React,{useState} from 'react'

// const App = () => {
//   const [myArray, updateMyArray] = useState([1]);

//   const onClick = (e) => {
//     let x=e.target.value
//       updateMyArray([...myArray, x]);
//   };
//   return [
//       <div>
// <button onClick={onClick} value='abc'>click</button>
//       <div>{myArray.map( e =>
//         <div>{ e }</div>
  
//       )}
//       </div>
//       </div>
//   ];
// }

// export default App;





// import React, { useEffect, useState } from "react";
// import ReactDOM from "react-dom";



// function App() {
//   // React State
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     // Access count value from session storage
//     var pageView1 = sessionStorage.getItem("pageView");
    
//     if (pageView1 == null) {
//       // Initialize page views count
//       pageView1 = 0;
//     } else {
//       // Increment count
//       pageView1 = Number(pageView1) + 1;
//     }
//     // Update session storage
//     setCount(pageView1);
//     sessionStorage.setItem("pageView", pageView1);
    
//   }, []); //No dependency to trigger in each page load

//   return (
//     <div className="app">
//       <div>Page View Count is:</div>
//       {count}
//     </div>
//   );
// }

// export default App;