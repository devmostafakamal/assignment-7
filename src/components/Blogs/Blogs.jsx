import React, { useState } from "react";
import { useEffect } from "react";
import { FaHeart } from "react-icons/fa";
function Blogs() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  //   console.log(blogs);
  return (
    <div>
      <div>
        <table className="min-w-full bg-white border border-gray-200 rounded-xl overflow-hidden">
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
                  {<FaHeart />}
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
