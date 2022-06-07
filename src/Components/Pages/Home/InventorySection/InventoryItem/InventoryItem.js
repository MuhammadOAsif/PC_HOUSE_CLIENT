import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaArrowAltCircleRight } from "react-icons/fa";
const InventoryItem = () => {
  const { id } = useParams();
  const [items, setItems] = useState([]);
  const { _id, img, name, price, quantity, supplierName, shortDescription } =
    items;

  useEffect(() => {
    fetch(`https://boiling-mountain-69201.herokuapp.com/items/${id}`)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  const handleItemDelivered = (quantity) => {
    const newQuantity = parseInt(items.quantity) - 1;
    const itemQuantity = { newQuantity };
    console.log(itemQuantity);
    const url = `https://boiling-mountain-69201.herokuapp.com/items/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(itemQuantity),
    })
      .then((response) => response.json())
      .then((data) => setItems(data));
  };

  return (
    <div className="container">
      <div className="block pt-32 ">
        <p className="text-end">
          <Link to={"/inventory/manageInventory"}>
            <button className="btn button">
              <span className="flex">
                <span>MANAGE INVENTORY</span>
                <span className="pt-2 pl-5">
                  <FaArrowAltCircleRight />
                </span>
              </span>
            </button>
          </Link>
        </p>
      </div>
      <div className="mx-auto transition duration-700 ease-in-out border xl:w-1/2 xl:mt-20 delay-350 bg-pink-50 hover:text-white hover:-translate-y-1 hover:scale-110 hover:bg-pink-500 transform-gpu ">
        <img className="" src={img} alt="" />
        <div className="p-3">
          <p>Product ID: {_id}</p>
          <p>Name: {name}</p>
          <p>Price: {price}</p>
          <p>Quantity: {quantity}</p>
          <p>Supplier Name: {supplierName}</p>
          <p>{shortDescription}</p>
        </div>
        <div>
          <input
            className="w-full m-3 mx-auto text-xl form-control"
            type="number"
            name="STORED"
            id=""
          />
          <div className="flex gap-2">
            <button
              onClick={() => handleItemDelivered(items._id)}
              className="w-full button"
            >
              DELIVERED
            </button>
            <button className="w-full button">STORED</button>
          </div>
        </div>
      </div>
      <div className="pt-16 ">
        <Link to="/inventory">
          <p className="text-center">
            <button className="btn button">INVENTORY PAGE AGAIN</button>
          </p>
        </Link>
      </div>
    </div>
  );
};

export default InventoryItem;
