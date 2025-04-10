import React from "react";
import { FaRegHeart } from "react-icons/fa";

function AddItem({ addItem, setAddItem }) {
  const removeItem = (id) => {
    // addItem.filter(item.id !== id);
    const updateItem = addItem.filter((item) => item.id !== id);
    setAddItem(updateItem);
  };
  return (
    <div className="border rounded border-black p-4 ">
      <div className="flex mt-5 gap-2 items-center border-b-1 justify-center">
        <FaRegHeart />
        <h2 className="text-lg font-semibold">Favorite Items</h2>
      </div>

      {addItem.length === 0 ? (
        <>
          <div className="text-center border-b-1">
            <p className="mt-14">No favorites yet</p>
            <p className="mt-6">
              Click the heart icon on any item <br /> to add it to your
              favorites
            </p>
          </div>
          <div className="flex justify-between items-center mt-3">
            <h3 className=" text-2xl ">Total Bids Amount:</h3>
            <span className="font-extrabold">$0</span>
          </div>
        </>
      ) : (
        <div className="mt-6 space-y-4">
          {addItem.map((item) => (
            <div
              key={Math.random()}
              className="flex items-center gap-4 pt-4 border-black border"
            >
              <img
                src={item.image}
                alt=""
                className="w-16 h-16 object-cover rounded"
              />
              <div>
                <p>{item.title}</p>
                <p className="text-sm text-gray-600">${item.currentBidPrice}</p>
                <p>{item.bidsCount}</p>
              </div>
              <div onClick={() => removeItem(item.id)}>x</div>
            </div>
          ))}
        </div>
      )}

      {addItem.length > 0 && (
        <div className="flex gap-4 mt-12 font-semibold justify-between border-t-1">
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
