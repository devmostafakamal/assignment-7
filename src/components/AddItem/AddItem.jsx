import React from "react";
import { FaHeart } from "react-icons/fa";
function AddItem() {
  return (
    <>
      <div className="border rounded bg-gray-100">
        <div className="flex mt-5 gap-2 items-center">
          {<FaHeart />}
          <h2>Favorite Items</h2>
        </div>

        <p className="mt-14">No favorites yet</p>
        <p className="mt-6">
          Click the heart icon on any item <br /> to add it to your favorites
        </p>
        <div className="flex gap-4 mt-12">
          <span>Total bids Amount</span>
          <span>$0000</span>
        </div>
      </div>
    </>
  );
}

export default AddItem;
