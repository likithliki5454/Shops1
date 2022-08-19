import { Outlet, Link } from "react-router-dom";
import './App.css'
const Onboard = () => {
  return (
   <div>
    
        <ul id="headr">
          <li id="titl">
            <Link  to="/Signup">Trainees to ...</Link>
          </li>
          <li >
            <Link id="titlog" to="/Login">Login</Link>
          </li>
        </ul>
    


        {/* <div className="post">
        <div id="img">
          <img src="/edited.jpg"></img>
        </div>
    </div> */}

      <Outlet />





    </div>
  )
};

export default Onboard;