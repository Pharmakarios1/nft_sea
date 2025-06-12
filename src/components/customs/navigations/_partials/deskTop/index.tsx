import { Dribbble, Facebook, Instagram, Twitter, X } from "lucide-react";

const DeskTop = () => {
  return (
    <div className="hidden md:block w-[70%] md:w-[90%] lg:w-[70%] mx-auto h-[60px]">
      <div className="flex items-center justify-between h-[100%] font-bold">
        <h2 className="text-2xl orbitron">NFThub</h2>

        <div className="flex items-center gap-4">
          <a href="/">Home</a>
          <a href="/collection">Collection</a>
          <a href="/choose">Choose</a>
          <a href="/about">About</a>
          <a href="/roadmap">Roadmap</a>
          <a href="/blog">Blog</a>
        </div>
        <div className="flex items-center gap-4">
          <a href="/login">
            <Twitter />
          </a>
          <a href="/login">
            <Facebook />
          </a>
          <a href="/signup">
            <Instagram />
          </a>
          <a href="/signup">
            <Dribbble />
          </a>
        </div>
      </div>
    </div>
  );
};

export default DeskTop;
