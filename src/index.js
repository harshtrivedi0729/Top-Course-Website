import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ToastContainer } from "react-toastify";
// apde j "TOAST" container che tene apde add kariyu....toast atle one type of notification tool
// apde "TOAST" container sathe aa compulsory add karvi pade che 
// "TOAST-CONTAINER" ni sathe haji aek file  import karvi pade che te aa "TOAST" ni 'CSS' file hoy che ......j niche mujab che 
import 'react-toastify/dist/ReactToastify.css';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // TOP LEVEL "<div> </div>" banavi ne j ama badha components niche dekhadiya te mujab nakhava "TOAST-CONTAINER" ADD KARIYU
  // apde ""
  <div>
    <App />
    <ToastContainer/>
  </div>


);
