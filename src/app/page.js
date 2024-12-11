import MyTasks from "@/components/main/MyTasks";
import Header from "@/components/main/Header";
import Divider from "@/components/ui/Divider";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <Header />
      <Divider />
      <MyTasks />
    </div>
  );
}
