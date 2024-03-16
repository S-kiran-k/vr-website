
function included() {
  return (
    <section>
        <div className="2xl:container">
              <div className="w-[80%] mx-auto grid grid-cols-1 py-3 ">
                  <div>
                      <h1 className="text-2xl font-bold text-[#212529]">Included VR Kit</h1>
                  </div>
              </div>
            <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-3">
                <div className="flex flex-col justify-center items-center">
                    <img className="h-[250px] w-[200px] " src="https://venkatmastercoder.github.io/VR-Website/Assets/vr-kit-1-img.png" alt="img1"/>
                      <p className="text-[#47525d] text-[20px]">Two Touch Controllers</p>
                </div>
                  <div className="flex flex-col justify-center items-center">
                      <img className="h-[250px] w-[200px] " src="https://venkatmastercoder.github.io/VR-Website/Assets/vr-kit-2-img.png" alt="img2" />
                      <p className="text-[#47525d] text-[20px]">VR Headset</p>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                      <img className="h-[250px] w-[200px] " src="https://venkatmastercoder.github.io/VR-Website/Assets/vr-kit-3-img.png" alt="img1" />
                      <p className="text-[#47525d] text-[20px]">Charging Cable</p>
                  </div>
                  
            </div>
        </div>
    </section>
  )
}

export default included