import { useState } from "react";
import "./App.css";
import AddItem from "./components/AddItem/AddItem";
import Blogs from "./components/Blogs/Blogs";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";

function App() {
  const [addItem, setAddItem] = useState([]);
  const handleData = (item) => {
    setAddItem([...addItem, item]);
  };
  // console.log(addItem);
  return (
    <>
      <div className="max-w-[1520px] mx-auto">
        <Navbar></Navbar>
        <Banner></Banner>
        <ToastContainer></ToastContainer>
        <div className="py-32 px-16 bg-[#c2bdbd] shadow-md">
          <h2 className="text-2xl mb-3">Active Auctions</h2>
          <p className="text-gray-600 mt-4">
            Discover and bid on extraordinary items
          </p>
          <div className="main-container flex gap-10 mt-4 ">
            <div className="left-container w-[70%] p-5 rounded-2xl shadow-2xl bg-[#FFFFFF] ">
              <Blogs handleData={handleData}></Blogs>
            </div>
            <div className="right-container">
              <AddItem addItem={addItem} setAddItem={setAddItem}></AddItem>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
