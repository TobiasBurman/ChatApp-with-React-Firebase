import React from "react";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import SignIn from "./SignIn";
import LogOut from "./LogOut";

const style = {
  navbar: "bg-gray-800 h-20 flex justify-between items-center p-4",
  heading: "text-white text-3xl mt-4",
};

const Navbar = () => {
  const [user] = useAuthState(auth);
  console.log(user);
  return (
    <div className={style.navbar}>
      <h1 className={style.heading}>Chat</h1>
      {!user ? <SignIn /> : <LogOut />}
    </div>
  );
};

export default Navbar;
