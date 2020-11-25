import React, { useState, useEffect } from "react";
import pix from "../../img/f60.jpg";
import axios from "axios";
// import axios from "./axios";

function Header() {
  const [dataChange, setDataChange] = useState([]);
  const [inputs, setInputs] = useState({});

  const handleInputs = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const clickMe = (e) => {
    e.preventDefault();
    console.log(inputs);
  };

  const getData = async () => {
    const res = await axios.get("");
    console.log(res.data);
    if (res.data) {
      return setDataChange(res.data);
    }
  };

  const postData = async () => {
    const res = await axios.post("/", inputs);
    console.log(res);
    if (res.data) {
      return getData();
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div>
        <form>
          <input
            placeholder="Name"
            name="name"
            type="text"
            onChange={handleInputs}
          />
          <input
            placeholder="Email"
            name="email"
            type="email"
            onChange={handleInputs}
          />
          <input
            placeholder="Detail"
            name="detail"
            type="text"
            onChange={handleInputs}
          />
          <input
            placeholder="Image"
            name="img"
            type="file"
            onChange={handleInputs}
          />
          <button>Submit</button>
        </form>
      </div>

      {dataChange.map((post) => (
        <aside key={post.id}>
          <h3>{post.name} </h3>
          <p>{post.email}</p>
          <img src={pix} />
          <p>{post.detail}</p>
        </aside>
      ))}
    </>
  );
}

export default Header;
