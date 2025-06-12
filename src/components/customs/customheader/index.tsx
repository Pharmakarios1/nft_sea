import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { MdArrowOutward } from "react-icons/md";

const CustomHeader = () => {
  const [mobileMenu, setMobileMenu] = useState(true);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMobileMenu(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const imgStyles = {
    nft1: " hidden md:block w-16 h-16 absolute top-0 right-0 w-44 h-44 object-cover rounded-lg shadow-lg transform -rotate-0 -translate-y-30 lg:-translate-y-15",
    nft2: "hidden md:block w-16 h-16 absolute bottom-40 right-0 w-44 h-44 object-cover rounded-lg shadow-lg transform rotate-0 md:translate-y-30",
    nft3: "hidden md:block w-16 h-16 absolute bottom-10 left-10 lg:top-0 lg:left-0 md:w-64 md:h-64 object-cover md:rounded-full shadow-lg -skew-0 translate-y-20",
  };
  return (
    <div className="w-full lg:h-screen bg-gradient-to-r from-red-100 to-sky-200 py-10">
      <div className="w-[90%]  lg:w-[80%] h-[100%] pt-10 md:pt-20 mx-auto grid md:grid-cols-2 ">
        <div className="h-full flex flex-col gap-5">
          <h1 className="text-4xl md:text-[2.5rem] lg:text-6xl font-semibold text-center md:text-left ">
            High Quality NFT Collection
          </h1>
          <p className="text-black/30 text-[20px] text-center md:text-left">
            A 890 piece custom{" "}
            <span className="orbitron bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent mr-2">
              Nfthub's
            </span>
            collection is joining the NFT space on Opensea.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <Button
              variant="secondary"
              className="w-40 text-white rounded-full bg-gradient-to-r from-indigo-800 to-pink-500 cursor-pointer"
            >
              view in OPENSEA <MdArrowOutward />
            </Button>
          </div>
        </div>
        <div className="relative flex">
          <img
            src="/nft.avif"
            alt=""
            className={mobileMenu ? "" : imgStyles.nft1}
          />
          <img
            src="/nft1.jpg"
            alt=""
            className={mobileMenu ? "hidden" : imgStyles.nft2}
          />
          <img
            src="/ape.webp"
            alt=""
            className={mobileMenu ? "hidden" : imgStyles.nft3}
          />
        </div>
      </div>
    </div>
  );
};

export default CustomHeader;
