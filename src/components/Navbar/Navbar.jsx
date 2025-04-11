import React from "react";

function Navbar() {
  return (
    <>
      <div>
        <div className="navbar-container flex items-center justify-between bg-[#FFFFFF] shadow-md pt-6 pb-6">
          <div className="nav-left">
            <h1 className="text-3xl">
              <span className="text-blue-400 font-semibold">Auction</span>
              <span className="text-yellow-500 font-semibold">Gellery</span>
            </h1>
          </div>
          <div className="nav-middle flex ">
            <ul className="flex gap-16 text-2xl">
              <li>Home</li>
              <li>Auctions</li>
              <li> Categories</li>
              <li>How to works</li>
            </ul>
          </div>
          <div className="nav-right flex items-center gap-3 ">
            <div>
              <img
                width={30}
                src="/assets/icons8-notification-47.png"
                alt=""
                className="shadow-2xl bg-gray-400 rounded-2xl"
              />
            </div>

            <div className="w-10   ">
              <img
                className="rounded-full"
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
