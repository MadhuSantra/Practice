import React, { useState } from "react";

function Password() {
  const [showPassword, setShowPassword] = useState(true);
  //   const hideUnhide = () => {
  //     setShowPassword(!showPassword);
  //   };

  return (
    <>
      <input
        type={`${showPassword ? "text" : "password"}`}
        placeholder="Password"
      />
      <button onClick={() => setShowPassword(!showPassword)}>
        {showPassword ? "Hide password" : "Unhide password"}
      </button>
    </>
  );
}

export default Password;
