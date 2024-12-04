"use client";
import { useAuth } from "@/context/AuthContext";
//import { motion } from "framer-motion";
import SignOut from "./SignOut";
import ThemeControl from "./ThemeControl";

const NavBar = () => {
  const { user } = useAuth();

  return (
    <div className="flex flex-row items-center w-full min-w-full justify-end px-6 py-4 bg-transparent">
      <div className="dropdown dropdown-end">
        {user ? (
          user.photoURL && (
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  src={user.photoURL}
                  alt={`${user.displayName} profile picture`}
                  className="w-10 h-10 rounded-full self-center"
                />
              </div>
            </div>
          )
        ) : (
          <></>
        )}
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-200 rounded-box z-[1] mt-3 w-52 shadow space-y-2"
        >
          <li>{user ? <ThemeControl /> : <></>}</li>
          <li>{user ? <SignOut /> : <></>}</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
