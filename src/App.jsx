import "./App.css";
import AddItem from "./components/AddItem/AddItem";
import Blogs from "./components/Blogs/Blogs";

function App() {
  return (
    <>
      <h2>hello world</h2>
      <div>
        <h2 className="text-2xl">Active Auctions</h2>
        <p className="text-gray-600">Discover and bid on extraordinary items</p>
        <div className="main-container flex gap-10">
          <div className="left-container w-[70%]  ">
            <Blogs></Blogs>
          </div>
          <div className="right-container w-[30%]">
            <AddItem></AddItem>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
