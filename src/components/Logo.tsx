import { MessageCircle } from "lucide-react";
import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href="#hero"
      title="JCWPP - Página inicial"
      aria-label="JCWPP - Página inicial"
      className="flex items-center gap-3 bg-green-500 hover:bg-green-600 hover:scale-105 transition-all duration-200 cursor-pointer text-white w-fit py-2 px-4 rounded-lg shadow-md shadow-green-400"
    >
      <MessageCircle size={30} className="text-white" aria-hidden="true" />
      <span className="text-2xl font-bold tracking-wide" aria-label="JCWPP">
        JCWPP
      </span>
    </Link>
  );
};

export default Logo;
