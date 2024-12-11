"use client";
import { useAuth } from "@/context/AuthContext";
import Logo from "../../../public/logo.png";
import { shadows } from "../ui/fonts";

const Header = () => {
  const { user } = useAuth();

  const truncateName = (userName) => {
    const splitName = userName.split(" ");
    return splitName[0];
  };

  return (
    <div className="flex flex-row h-28 items-center justify-center gap-4 bg-base-100">
      <img src={Logo.src} alt="my tasks logo" className="w-14 h-14" />
      <h1 className={`${shadows.className} antialiased text-6xl`}>
        {user ? (
          <span className="capitalize">
            {truncateName(user.displayName)}'s Tasks
          </span>
        ) : (
          <span>My Tasks</span>
        )}
      </h1>
    </div>
  );
};

export default Header;
