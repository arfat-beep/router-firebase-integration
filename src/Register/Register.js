import React from "react";

const Register = () => {
  return (
    <div>
      <h3>Please Register now</h3>
      <form onSubmit={(e) => e.preventDefault()} action="">
        <input type="text" name="" placeholder="Your name" id="" />
        <br />
        <input type="email" name="" placeholder="Your email" id="" />
        <br />
        <input type="password" name="" placeholder="Password" id="" />
        <br />
        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Register;
