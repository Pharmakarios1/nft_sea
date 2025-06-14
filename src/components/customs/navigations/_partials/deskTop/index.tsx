import { CiInstagram } from "react-icons/ci";
import { FaDiscord, FaDribbble, FaTwitter } from "react-icons/fa6";

const DeskTop = () => {
  return (
    <div className="hidden md:block w-[90%] lg:w-[80%] mx-auto h-[60px]">
      <div className="flex items-center justify-between h-[100%] ">
        <h2 className="text-2xl orbitron">NFThub</h2>

        <div className="flex items-center gap-4 font-bold border-[1px] border-slate-300 rounded-lg px-4 py-2">
          <a href="/">Home</a>
          <a href="/collection">Collection</a>
          <a href="/choose">Choose</a>
          <a href="/about">About</a>
          <a href="/roadmap">Roadmap</a>
          <a href="/blog">Blog</a>
        </div>
        <div className="flex items-center gap-4">
          <a href="/twitter">
            <FaTwitter className="text-sky-400" />
          </a>
          <a href="/discord " className="text-blue-700">
            <FaDiscord />
          </a>
          <a href="/instagram">
            <CiInstagram className="bg-gradient-to-t from-indigo-800 to-pink-500 " />
          </a>
          <a href="/dribbble">
            <FaDribbble  className="text-pink-500"/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DeskTop;
