import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { toast } from "react-toastify";
function AddItem({ addItem, setAddItem }) {
  const removeItem = (id) => {
    // addItem.filter(item.id !== id);
    const updateItem = addItem.filter((item) => item.id !== id);
    setAddItem(updateItem);
    toast.success("remove to favorites!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  return (
    <div className="bg-white p-5 rounded-2xl">
      <div className="border rounded border-black p-4  ">
        <div className="flex mt-2  border-b-1 justify-center">
          <div className="flex items-center gap-2 mb-4">
            <FaRegHeart className="text-blue-400" />
            <h2 className="text-lg font-semibold text-blue-400 ">
              Favorite Items
            </h2>
          </div>
        </div>

        {addItem.length === 0 ? (
          <>
            <div className="text-center mb-4">
              <p className="mt-14 font-bold">No favorites yet</p>
              <p className="mt-6">
                Click the heart icon on any item to add it to your <br />
                favorites
              </p>
            </div>
            <div className=" py-4 flex items-center justify-between border-t-1">
              <h3 className=" text-2xl ">Total Bids Amount:</h3>
              <span className="font-extrabold">$0</span>
            </div>
          </>
        ) : (
          <div className="mt-6 ">
            {addItem.map((item) => (
              <div
                key={Math.random()}
                className="flex items-center gap-4 pt-4 border-black border rounded-2xl p-2"
              >
                <img
                  src={item.image}
                  alt=""
                  className="w-16 h-16 object-cover rounded border-1"
                />
                <div>
                  <p>{item.title}</p>
                  <p className="text-sm text-gray-600">
                    ${item.currentBidPrice}
                  </p>
                  <p>Bids:{item.bidsCount}</p>
                </div>
                <div
                  onClick={() => removeItem(item.id)}
                  className="text-2xl text-right"
                >
                  x
                </div>
              </div>
            ))}
          </div>
        )}

        {addItem.length > 0 && (
          <div className="flex gap-4 mt-12 font-semibold justify-between border-t-1">
            <div className="">
              <span>Total bids Amount</span>
            </div>

            <span>
              $
              {addItem
                .reduce(
                  (total, item) => total + Number(item.currentBidPrice),
                  0
                )
                .toFixed(2)}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default AddItem;
