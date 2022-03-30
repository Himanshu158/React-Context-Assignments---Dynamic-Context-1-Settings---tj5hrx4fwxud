// import React from "react"
// import { useContext } from "react"
// import { UserContext } from "../context/userContext"

// export const Settings = () => {

//     // to be implemented in context
//     const { changeGreeting } = useContext(UserContext)

//     return (
//         <div style={{ border: '5px solid red', padding: '8px' }} id="settings">
//             <h4>Settings</h4>
//             <input type={'text'} />
//         </div>
//     )
// }
import React from "react";
import { useContext, useState } from "react";
import { UserContext } from "../context/userContext";

export const Settings = () => {
  // to be implemented in context
  const { greeting, setGreeting } = useContext(UserContext);
  //const [set, setSet] = useState("");
  const handle = (e) => {
    //console.log(e.target.value);
    let val = e.target.value;
    //setSet(val);
    setGreeting(val);
    console.log(greeting);
    //changeGreeting(set);
  };

  return (
    <div style={{ border: "5px solid red", padding: "8px" }} id="settings">
      <h4>Settings</h4>
      <input type={"text"} onChange={(e) => handle(e)} />
    </div>
  );
};
