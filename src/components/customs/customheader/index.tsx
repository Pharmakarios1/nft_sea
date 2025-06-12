import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { MdArrowOutward } from "react-icons/md";

const CustomHeader = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
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
    nft1: "w-16 h-16 absolute top-0 right-0 w-44 h-44 object-cover rounded-lg shadow-lg transform -rotate-33 translate-y-10",
    nft2: "w-16 h-16 absolute bottom-10 right-0 w-44 h-44 object-cover rounded-lg shadow-lg transform rotate-12 -translate-x-30",
    nft3: "w-16 h-16 absolute top-0 left-0 w-44 h-44 object-cover rounded-lg shadow-lg skew-5 translate-y-10",
  };
  return (
    <div className="w-full lg:h-screen bg-gradient-to-r from-red-100 to-sky-200">
      <div className="w-[70%] md:w-[90%] lg:w-[70%] h-[100%] pt-28 mx-auto grid md:grid-cols-2 ">
        <div className="h-full flex flex-col gap-5">
          <h1 className="text-4xl md:text-[2.5rem] lg:text-6xl font-semibold ">
            High Quality NFT Collection
          </h1>
          <p className="text-black/30 text-[22px]">
            A 890 oiece custom Nfthub's collection is joining the NFT space on
            Opensea.
          </p>
          <Button
            variant="secondary"
            className="w-40 text-white rounded-full bg-gradient-to-r from-indigo-800 to-pink-500 cursor-pointer"
          >
            view in OPENSEA <MdArrowOutward />
          </Button>
        </div>
        <div className="relative flex">
          <img
            src="/nft.avif"
            alt=""
            className={mobileMenu ? "hidden" : imgStyles.nft1}
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
