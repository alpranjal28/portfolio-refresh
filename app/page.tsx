import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { HomeIcon, MessageSquare, User } from "lucide-react";

export default function Home() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <HomeIcon className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/about",
      icon: <User className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: (
        <MessageSquare className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
      </div>
    </main>
  );
}
