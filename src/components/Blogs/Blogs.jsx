import React, { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";
function Blogs({ handleData }) {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  const [liked, setLiked] = useState({});
  const handleColor = (id, blog) => {
    if (!liked[id]) {
      handleData(blog);
      setLiked((prev) => ({
        ...prev,
        [id]: true,
      }));
    }
    toast.success("Added to favorites!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  // console.log(blog.id)
  return (
    <div>
      <div className="border rounded bg-white">
        <table className="min-w-full  border border-gray-200 rounded-xl overflow-hidden ">
          <thead className="bg-gray-100 text-gray-700 text-left">
            <tr>
              <th className="p-3">Image</th>
              <th className="p-3">Description</th>
              <th className="p-3">Bid Price</th>
              <th className="p-3">Time Left</th>
              <th className="p-3">Bid Now</th>
            </tr>
          </thead>
          <tbody className="border rounded bg-gray-100">
            {blogs.map((blog) => (
              <tr key={blog.id} className="border-t">
                <td className="p-3">
                  <img
                    src={blog.image}
                    alt=""
                    className="w-16 h-16 object-cover rounded"
                  />
                </td>
                <td className="p-3">{blog.description}</td>
                <td className="p-3">${blog.currentBidPrice}</td>
                <td className="p-3">{blog.timeLeft}</td>
                <td className="p-3 text-white-500 text-center">
                  <button
                    className={` ${
                      liked[blog.id] ? " cursor-not-allowed" : "cursor-pointer"
                    }`}
                    onClick={() => handleColor(blog.id, blog)}
                    disabled={liked[blog.id]}
                  >
                    {liked[blog.id] ? (
                      <img
                        className="text-red-500"
                        width={20}
                        src="/assets/heart (1).png"
                      />
                    ) : (
                      <img width={20} src="/assets/heart.png" />
                    )}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Blogs;
