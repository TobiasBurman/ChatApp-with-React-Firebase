import React from "react";
import Navbar from "./components/Navbar";

import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Chat from "./components/Chat";

const style = {
  appContainer: "max-w-[728px] mx-auto text-center",
  sectionContainer:
    "flex flex-col h-[90vh] h-14 bg-gradient-to-r from-sky-400 to-indigo-300 mt-10 shadow-xl border relative overflow-auto rounded-xl",
};

function App() {
  const [user] = useAuthState(auth);
  console.log(user);
  return (
    <>
      <div className={style.appContainer}>
        <div className={style.sectionContainer}>
          <Navbar />
          {user ? <Chat /> : null}
        </div>
      </div>
    </>
  );
}

export default App;
