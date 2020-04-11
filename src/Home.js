import React from "react";
import { Link } from "react-router-dom";
import "./App";

function Home() {
  return (
    <div>
      <h1 className='host-for-center' >
        <Link to="/Host"><button className="host">Host</button></Link>
      </h1>
      <h1 className='guest-for-center'>
  
        <Link to="/gest"> <button className="gest">guest</button></Link>
      </h1>
    </div>
  );
}
export default Home;
