import React from "react";
import { FaHeart } from "react-icons/fa";

function AddItem({ addItem }) {
  return (
    <div className="border rounded bg-gray-100 p-4">
      <div className="flex mt-5 gap-2 items-center">
        <FaHeart />
        <h2 className="text-lg font-semibold">Favorite Items</h2>
      </div>

      {addItem.length === 0 ? (
        <>
          <p className="mt-14">No favorites yet</p>
          <p className="mt-6">
            Click the heart icon on any item <br /> to add it to your favorites
          </p>
          <h3 className="mt-3 text-2xl">Total amount = 0</h3>
        </>
      ) : (
        <div className="mt-6 space-y-4">
          {addItem.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 border-t pt-4"
            >
              {/* <img
                src={item.image}
                alt=""
                className="w-16 h-16 object-cover rounded"
              /> */}
              <div>
                <p>{item.title}</p>
                <p className="text-sm text-gray-600">${item.currentBidPrice}</p>
                <p>{item.bidsCount}</p>
              </div>
              <div>x</div>
            </div>
          ))}
        </div>
      )}

      {addItem.length > 0 && (
        <div className="flex gap-4 mt-12 font-semibold">
          <span>Total bids Amount</span>
          <span>
            $
            {addItem
              .reduce((total, item) => total + Number(item.currentBidPrice), 0)
              .toFixed(2)}
          </span>
        </div>
      )}
    </div>
  );
}

export default AddItem;
