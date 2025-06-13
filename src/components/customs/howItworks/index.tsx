const HowItWorks = () => {
  return (
    <div className="w-[90%] mx-auto mt-5">
      <div className="container p-10">
        <h2 className="text-xl md:text-3xl text-center font-bold">
          How
          <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-tr from-indigo-600 to-pink-500">
            It Works
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 mx-auto place-items-center gap-16 md:gap-0 w-full p-5 md:w-[80%] my-5 shadow-pink-400 shadow-lg rounded-md">
            <img src="/wallet.jpg" alt="" className="w-full h-full" />
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
          <div className="grid grid-cols-1 md:grid-cols-2 mx-auto gap-16 md:gap-0 w-full p-5 md:w-[80%] my-5 shadow-indigo-400 shadow-lg rounded-md">
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
        </h2>
      </div>
    </div>
  );
};

export default HowItWorks;
