import React from "react";
import useFirebase from "../Hooks/useFirebase";

const Products = () => {
  const { user } = useFirebase();
  return (
    <div>
      <h2>Knock knock !! who's there</h2>
      <h5>{user?.uid ? user.displayName : "vooooooooot"}</h5>
    </div>
  );
};

export default Products;
