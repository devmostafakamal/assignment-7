import { useState } from "react";
import "./App.css";
import AddItem from "./components/AddItem/AddItem";
import Blogs from "./components/Blogs/Blogs";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [addItem, setAddItem] = useState([]);
  const handleData = (item) => {
    setAddItem([...addItem, item]);
  };
  // console.log(addItem);
  return (
    <>
      <ToastContainer></ToastContainer>
      <h2>hello world</h2>

      <div>
        <h2 className="text-2xl">Active Auctions</h2>
        <p className="text-gray-600">Discover and bid on extraordinary items</p>
        <div className="main-container flex gap-10">
          <div className="left-container w-[70%]  ">
            <Blogs handleData={handleData}></Blogs>
          </div>
          <div className="right-container w-[30%]">
            <AddItem addItem={addItem} setAddItem={setAddItem}></AddItem>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
