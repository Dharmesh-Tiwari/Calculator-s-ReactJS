import { Outlet, Link } from "react-router-dom";
import "./App.css";

const Layout=()=>
{
    return(
       <>
       <ul id="list">
       <li><Link  style={{color:"white",textDecoration:"none",fontWeight:"500"}} to="/"> Home</Link></li>
        |
        <li><Link style={{color:"white",textDecoration:"none"}} to="/Calculator1">Normal Calculator</Link></li>
        |
        <li><Link  style={{color:"white",textDecoration:"none"}} to="/Calculator2">Standard Calculator</Link></li>
        |
       </ul>
        <hr color="red"/>

        <Outlet />
      <hr />
      <p>Thank you!!!</p>

     </>
    );
}

export default Layout;