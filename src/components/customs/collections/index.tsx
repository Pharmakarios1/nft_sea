const NftCollection = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center my-8">NFT Collection</h1>
      <p className="text-center text-lg mb-4">
        Explore our exclusive NFT collection featuring unique digital assets.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {/* Example NFT Cards */}
        {[...Array(8)].map((_, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-4">
            <img
              src={`https://loremflickr.com/300/200?random=${index}`}
              alt={`NFT ${index + 1}`}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <h2 className="text-xl font-semibold mt-2">NFT #{index + 1}</h2>
            <p className="text-gray-600">Description of NFT #{index + 1}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NftCollection;
