

const CallToAction = () => {
  return (
    <div className='flex flex-col items-center justify-center w-[80%] md:w-1/2 mx-auto border-[1px] border-indigo-500   p-8 rounded-lg shadow-lg my-10'>
      <h2 className='text-2xl md:text-5xl font-bold my-2'>Never <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-800 to-pink-400">miss a drop!</span></h2>
      <p className='text-center mb-3 text-black/30 text-[12px]'>subscribe to our super rare and exclusive drops & collectibles</p>
     <div className="flex flex-col md:flex-row gap-3 items-center justify-between w-full md:w-3/4">
        <input 
          type="email" 
          placeholder="Enter your email" 
          className="w-full p-2 border border-indigo-500 rounded-md focus:border-none focus:outline-none focus:ring-[1px] focus:ring-pink-500"
        />
        <button className="ml-2 bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-4 py-2 rounded-2xl hover:opacity-90 transition duration-300">
          Subscribe
        </button>
     </div>
    </div>
  )
}

export default CallToAction