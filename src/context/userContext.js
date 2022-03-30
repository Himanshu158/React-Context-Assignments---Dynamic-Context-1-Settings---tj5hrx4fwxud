// import React, { createContext } from "react";


// const UserContext = createContext()

// const Wrapper = (props) => {

//     const greeting = "Hello"
  
//     return (
//         <UserContext.Provider value={{ greeting }}>
//             {props.children}
//         </UserContext.Provider>
//     )
// }
// export { Wrapper, UserContext }
import React, { createContext, useState } from "react";

const UserContext = createContext();

const Wrapper = (props) => {
  const [greeting, setGreeting] = useState("Hello");
  //const greeting = state;
  //let greeting = "pass11";
  // const changeGreeting = (e) => {
  //   console.log("greeting");
  //   //setGreeting(e);
  // };

  return (
    <UserContext.Provider value={{ greeting, setGreeting }}>
      {props.children}
    </UserContext.Provider>
  );
};
export { Wrapper, UserContext };
