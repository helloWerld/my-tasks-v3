"use client";
import { useAuth } from "@/context/AuthContext";
//import { motion } from "framer-motion";
import { MdClose } from "react-icons/md";

const SignOut = () => {
  const { signOutUser } = useAuth();

  return (
    <button className="btn" onClick={signOutUser}>
      <MdClose /> Sign out
    </button>
  );
};

export default SignOut;
