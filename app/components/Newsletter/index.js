import React from 'react'

const Newsletter = () => {
  return (
    <section className="block">
      <div className="max-w-[1200px] w-full m-auto">
        <div className="gap-x-6 gap-y-0 flex flex-wrap mt-0 mr-6 ml-6">
          <div className="flex-auto w-full">
            <div className="opacity-100 transition-transform text-white">
              <div className="relative">
                <h3 className="mb-3 text-[48px]">Get Newsletter</h3>
                <p className="text-[21px]">
                  Get updated with news, tips & tricks
                </p>
              </div>
              <form action="" className="w-[60%] pl-[43px] block mt-0">
                <div className="flex">
                  <input
                    type="text"
                    className="w-full h-[60px] rounded-[20px] border-[#e5e5e5] border-2 p-4"
                    placeholder="Your email here"
                  />
                  <button
                    type="submit"
                    className="bg-[#fd562a] text-white font-bold text-[18px] px-[30px] py-[15px] rounded-[20px] ml-4"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Newsletter