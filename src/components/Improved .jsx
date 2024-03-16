
function Improved () {
  return (
    <section> 
        <div className="2xl:container py-10 space-y-5">
            <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2">
                  <div className="md:hidden">
                      <img className="h-[463px] w-[540px]" src="https://venkatmastercoder.github.io/VR-Website/Assets/vr-optics-img.png" alt="img-1" />
                  </div>
                <div className="flex flex-col items-start justify-start">
                      <h1 className="text-[#212529] text-[32px] font-bold mt-9">Improved Optics</h1>
                      <p className="text-[#818c99]">at sem. Curabitur aliquet quam id dui posuere blandit. Lorem ipsum dolor sit amet,
                         consectetur adipiscing elit.</p>
                      <button className="bg-[#1a2137] px-3 py-2 rounded text-white mt-4"> Read More</button>
                </div>
                  <div className="sm:hidden md:block flex justify-center items-center">
                      <img className="h-[463px] w-[540px]" src="https://venkatmastercoder.github.io/VR-Website/Assets/vr-optics-img.png" alt="img-1" />
                </div>
            </div>

              <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2">
                  <div className="">
                      <img className="h-[463px] w-[540px]" src="https://venkatmastercoder.github.io/VR-Website/Assets/vr-controllers-img.png" alt="img-1" />
                  </div>
                  <div className="flex flex-col items-start justify-start">
                      <h1 className="text-[#212529] text-[32px] font-bold mt-9">Improved Gestures</h1>
                      <p className="text-[#818c99]">at sem. Curabitur aliquet quam id dui posuere blandit. Lorem ipsum dolor sit amet,
                          consectetur adipiscing elit.</p>
                      <button className="bg-[#1a2137] px-3 py-2 rounded text-white mt-4"> Read More</button>
                  </div>
                  <div className="hidden">
                      <img className="h-[463px] w-[540px]" src="https://venkatmastercoder.github.io/VR-Website/Assets/vr-controllers-img.png" alt="img-1" />
                  </div>
              </div>
        </div>
    </section>
  )
}

export default Improved 