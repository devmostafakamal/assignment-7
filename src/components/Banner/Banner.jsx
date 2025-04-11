import React from "react";

function Banner() {
  return (
    <>
      <div className="relative h-[450px] w-full overflow-hidden">
        {/* Background image flipped */}
        <img
          src="/assets/Banner-min.jpg"
          alt="Background-image"
          className="absolute top-0 left-0 w-full h-full object-cover scale-x-[-1] object-right"
        />

        {/* Content on the left side, stays untouched */}
        <div className="relative z-10 w-[30%] pt-[12%] pl-[4%]">
          <h1 className="text-3xl text-white font-bold mb-4">
            Bid on Unique Items from Around the World
          </h1>
          <p className="text-[#d3c5c5] mb-4">
            Discover rare collectibles, luxury goods, and vintage treasures in
            our curated auctions
          </p>
          <button className="btn rounded-3xl px-[25px]">
            Explore Auctions
          </button>
        </div>
      </div>
    </>
  );
}

export default Banner;
