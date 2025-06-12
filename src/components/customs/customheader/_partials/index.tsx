const HeroMobileNft = () => {
  return (
    <div className="md:hidden">
      <div className="flex flex-col mt-10 relative">
        <img src="/ape.webp" alt="" className="rounded-md w-full" />

        <img
          src="/nft.avif"
          alt=""
          className="absolute bottom-10 left-0 rounded-full w-20"
        />
        <img
          src="/nft1.jpg"
          alt=""
          className="absolute top-0 right-0 rounded-full w-20"
        />
      </div>
    </div>
  );
};

export default HeroMobileNft;
