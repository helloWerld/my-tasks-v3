"use client";
import { useAuth } from "@/context/AuthContext";
import SignInGoogle from "../ui/SignInGoogle";
import AddTaskModal from "./AddTaskModal";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

const MyTasks = () => {
  const { user } = useAuth();

  return (
    <section className="flex flex-col w-full h-screen items-center justify-start gap-4 px-8">
      <TaskList />
      {user ? <AddTask /> : <SignInGoogle />}
      <AddTaskModal />
    </section>
  );
};

export default MyTasks;
