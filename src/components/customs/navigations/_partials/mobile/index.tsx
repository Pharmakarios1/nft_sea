import { useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div
        className={`md:hidden relative border-gradient-to-r from-red-200 w-full h-full  to-fuchsia-200 `}
      >
        <div className="orbitron text-2xl p-4 flex justify-between">
          <span className="flex gap-1 bg-clip-text text-transparent bg-gradient-to-r from-indigo-900 to-fuchsia-700">
            nerko nfthub
          </span>
          <button
            onClick={toggleMenu}
            className="text-2xl text-transparent bg-clip-text cursor-pointer bg-gradient-to-tl from-indigo-700 to-pink-400 border-[1px] border-pink-300 rounded-lg px-2 py-1  transition duration-300"
          >
            {isOpen ? <MdClose className="text-pink-500"/> : <MdMenu className="text-pink-500"/>}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden flex flex-col flex-1 items-center justify-between w-full mx-auto h-screen bg-pink-300 text-indigo-900">
          <div className="flex flex-col items-center gap-4 pt-20 font-bold">
            <a href="/">Home</a>
            <a href="/collection">Collection</a>
            <a href="/choose">Choose</a>
            <a href="/about">About</a>
            <a href="/roadmap">Roadmap</a>
            <a href="/blog">Blog</a>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileNav;
