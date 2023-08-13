import React from "react";
import { auth } from "../firebase";

const style = {
  button: "bg-red-500 px-2 py-2 hover:bg-red-200 hover:text-black font-monse text-white rounded lg",
};

const LogOut = () => {
  const signOut = () => {
    signOut(auth);
  };

  return (
    <button  onClick={() => auth.signOut()} className={style.button}>
      Logout
    </button>
  );
};

export default LogOut;
