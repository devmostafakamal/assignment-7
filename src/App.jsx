import "./App.css";
import Blogs from "./components/Blogs/Blogs";

function App() {
  return (
    <>
      <h2>hello world</h2>

      <div className="main-container flex ">
        <div className="left-container w-[70%] ">
          <Blogs></Blogs>
        </div>
        <div className="right-container w-[30%]">
          <h2>Favorite Items</h2>
        </div>
      </div>
    </>
  );
}

export default App;
