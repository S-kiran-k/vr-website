
function products() {
  return (
    <section>
        <div className="2xl:container py-5 space-y-2">
            <div className="mx-auto w-[80%] grid grid-cols-1 ">
                <div>
                    <h1 className="text-[#1f2933] py-3 font-bold text-4xl">Products</h1>
                </div>
            </div>

            <div className="mx-auto w-[80%] grid grid-cols-1 md:grid-cols-2 gap-7 ">
                    <div className="bg-img1 flex flex-col justify-end items-start space-x-3 gap-2">
                      <h1 className="pl-3 text-4xl text-white">VR Headset</h1>
                      <p className="text-white text-lg">Rs 75,000</p>
                      <button className="text-white mb-4 text-center border-2 border-solid  border-white px-5 py-2 rounded text-lg"> Buy Now</button>
                    </div>
                    <div className="bg-img2 flex flex-col justify-end items-start space-x-3 gap-2">
                      <h1 className="pl-3 text-4xl text-white">VR Headset and Two Touch Controllers</h1>
                      <p className="text-white text-lg">Rs 90,000</p>
                        <button className="text-white mb-4 text-center border-2 border-solid  border-white px-5 py-2 rounded text-lg"> Buy Now</button>
                    </div>
            </div>
            <div className="mx-auto w-[80%] grid grid-cols-1">
                <div className="flex justify-end items-end">
                      <button className="px-8 py-3 bg-[#1754a1] rounded text-white">View All</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default products