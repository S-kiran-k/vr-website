
function contactus() {
  return (
    <section>
        <div className="2xl:container py-8">
              <div className="mx-auto grid grid-cols-1 md:grid-cols-2 bg-[#222b36] py-10">
                <div className="hidden md:block ">
                    <img className="h-[318px] w-[540px]" src="https://venkatmastercoder.github.io/VR-Website/Assets/vr-set-img.png" alt="img1"/>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-white text-[32px]">Virtually Anything is Possible</h1>
                      <div className="md:hidden">
                          <img className="h-[318px] w-[540px]" src="https://venkatmastercoder.github.io/VR-Website/Assets/vr-set-img.png" alt="img1" />
                      </div>

                    <button className="px-5 py-2 border text-white border-white rounded">Contact US</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default contactus