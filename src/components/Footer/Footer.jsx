import React from "react";

function Footer() {
  return (
    <>
      <div className="text-center mt-32 bg-white shadow-2xl">
        <h2 className="font-bold text-blue-200 text-2xl">
          Auction<span className="text-amber-300">Gallary</span>
        </h2>
        <div className="flex gap-2 items-center justify-center mt-3 font-bold">
          <p>Bid.</p>
          <p>Win.</p>
          <p>Won.</p>
        </div>
        <div className="mt-4">
          <ul className="flex items-center justify-center gap-10">
            <li>Home</li>
            <li>Auctions</li>
            <li>Categories</li>
            <li>How to works</li>
          </ul>
        </div>

        <p className="mt-4">© 2025 AuctionHub. All rights reserved.</p>
      </div>
    </>
  );
}

export default Footer;
