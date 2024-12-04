"use client";
import { useAuth } from "@/context/AuthContext";
import SignInGoogle from "../ui/SignInGoogle";

const MyTasks = () => {
  const { user } = useAuth();

  return (
    <section className="flex flex-col w-full items-center justify-center gap-4">
      {user ? <h1>Hello, {user.displayName}</h1> : <SignInGoogle />}
    </section>
  );
};

export default MyTasks;
