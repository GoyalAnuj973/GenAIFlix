import React from "react";
// import Header from "./Header";

import LoginForm from "./LoginForm";
import { BG_URL } from "../utils/constants";

const Login = () => {
 
  return (
    <div>
      <div>
        <img
          className="h-[100vh] w-full"
          src={BG_URL}
          alt="background_image"
        />
      </div>
          <LoginForm/>
    
    </div>
  );
};

export default Login;
