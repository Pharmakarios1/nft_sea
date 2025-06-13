import Marquee from "react-fast-marquee";
const NftCollection = () => {
  const images = [
    "/nft1.jpg",
    "/nft.avif",
    "/ape.webp",
    "/nft1.jpg",
    "/nft.avif",
    "/ape.webp",
    "/nft1.jpg",
    "/nft.avif",
    "/ape.webp",
    "/nft1.jpg",
    "/nft.avif",
    "/ape.webp",
  ];
  return (
    <div className="w-full min-h-[100%] bg-gradient-to-r from-indigo-100 to-pink-200 px-10 py-10 lg:px-33">
      <h1 className=" orbitron text-4xl font-bold text-center my-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-900">
        NFT Collection
      </h1>
      <p
        className="text-center text-md mb-4 bg-radial-gradient(
        circle at 50% 50%, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05)
        ) text-slate-900 p-4 rounded-lg shadow-md"
      >
        Explore our exclusive NFT collection featuring unique digital assets.
      </p>

      {/* Example NFT Cards */}
      <div className="w-full py-4 bg-white rounded-lg shadow-lg ">
        <Marquee speed={3} gradient={false} pauseOnHover={true}>
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`NFT ${index + 1}`}
              className="relative mx-4 w-32 sm:w-40 md:w-48 lg:w-56 h-auto  overflow-y-hidden object-cover rounded-xl shadow-md transition-transform hover:scale-105"
            />
          ))}
        </Marquee>
      </div>

      <div className="text-center mt-6">
        <p className="text-gray-600">
          Discover more NFTs on our{" "}
          <a
            href="https://opensea.io/collection/nfthub-collection"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:underline"
          >
            OpenSea Collection
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default NftCollection;
