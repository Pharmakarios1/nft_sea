const HowItWorks = () => {
  return (
    <div className="w-full md:w-[80%] mx-auto mt-5">
      <h2 className="text-xl md:text-3xl text-center font-bold">
        How
        <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-tr from-indigo-600 to-pink-500">
          It Works
        </span>
      </h2>
      <div className="flex flex-col gap-5 ">
        <div className="grid grid-cols-1 md:grid-cols-2  place-items-center gap-10 md:gap-5 p-5 my-5 shadow-pink-400 shadow-lg rounded-md">
          <img
            src="/metamask.png"
            alt=""
            className="w-full h-full rounded-3xl"
          />
          <div className="">
            <h1 className="md:text-start md:w-[200px] text-2xl">
              Set up and connect your wallet
            </h1>
            <p className="text-black/70 text-[16px] md:text-start font-light">
              Use Trustwallet or Metamask to connect to multiple chains on the
              app
            </p>
            <p className="mt-5 text-black/70 text-[16px] md:text-start font-light ">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit rem
              voluptates, aperiam quis nisi eos sequi nesciunt, assumenda eum
              impedit ullam fugiat animi. Sunt voluptatibus, officia itaque
              quaerat explicabo quasi!
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-5 p-5  my-5 shadow-indigo-400 shadow-lg rounded-md">
          <img
            src="/digital.jpg"
            alt=""
            className="w-full h-full order-2 rounded-3xl"
          />
          <div className="">
            <h1 className="md:text-start md:w-[200px] text-2xl">
              Create your own Digital Collectible
            </h1>
            <p className="text-black/70 text-[16px] md:text-start font-light">
              Use Trustwallet or Metamask to connect to multiple chains on the
              app
            </p>
            <p className="mt-5 text-black/70 text-[16px] md:text-start font-light">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit rem
              voluptates, aperiam quis nisi eos sequi nesciunt, assumenda eum
              impedit ullam fugiat animi. Sunt voluptatibus, officia itaque
              quaerat explicabo quasi!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
