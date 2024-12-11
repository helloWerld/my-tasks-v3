"use client";
import { useAuth } from "@/context/AuthContext";
import SignInGoogle from "../ui/SignInGoogle";

const MyTasks = () => {
  const { user } = useAuth();

  return (
    <section className="flex flex-col w-full h-screen items-center justify-center gap-4">
      {user ? <></> : <SignInGoogle />}
    </section>
  );
};

export default MyTasks;
