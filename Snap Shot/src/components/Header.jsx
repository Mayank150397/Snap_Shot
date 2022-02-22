import React, { useState, useEffect } from "react";
import "./Header.css";
import { FaSistrix } from "react-icons/fa";
import axios from "axios";

function Header() {
  const [text, setText] = useState("car");
  console.log("tex=", text);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://pixabay.com/api/?key=25767824-e003a60f6373366d6a4e42be7&q=${text}`
      )
      .then(function (res) {
        console.log("data is:", res.data.hits);
        setProducts(res.data.hits);
      })
      .catch((error) => console.log(`Error : ${error}`));
  });
  //  const [data, setData] = useState("")

  return (
    <div>
      <div className="container">
        <h1>SanpShot</h1>
        <form action="" className="search">
          <input
            type="text"
            placeholder="Search..."
            onChange={(e) => setText(e.target.value)}
          />
          <button>
            {" "}
            <FaSistrix />{" "}
          </button>
        </form>
      </div>
      <div className="gallery">
        {products.map((products) => (
          <div key={products.id}>
            <img src={products.previewURL} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Header;
