import "../styles/extensionBar.css";
import { useState } from "react";

function ExtensionBar() {
  const [changeColor, setChangeColor] = useState("");

 
  return (
    <div className="extension-bar">
     <h2 className="extension-bar-title">
      Extensions List
     </h2>

     <div className="extension-activities">
      <button onClick={()=> setChangeColor("all")} className={`btn btn-all ${changeColor=== "all" ? "change-background": ""}`}>All</button>
      <button onClick={() => setChangeColor("active")} className={`btn btn-active ${changeColor=== "active" ? "change-background": ""}`}>Active</button>
      <button onClick={() => setChangeColor("inactive")} className={`btn btn-inactive  ${changeColor==="inactive" ? "change-background": ""}`}>Inactive</button>
     </div>
    </div>
  )
}

export default ExtensionBar;