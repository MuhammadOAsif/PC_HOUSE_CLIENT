import React from "react";
import { useNavigate } from "react-router-dom";
import "./inventories.css";
const Inventory = ({ item }) => {
  const navigate = useNavigate();
  const { _id, img, name, price, quantity, supplierName, shortDescription } =
    item;

  const navigateToUpdateItems = (_id) => {
    navigate(`/inventoryItem/${_id}`);
  };
  return (
    <div className="w-100">
      <div className="transition duration-700 ease-in-out border delay-350 bg-pink-50 hover:text-white hover:-translate-y-1 hover:scale-110 hover:bg-pink-500 transform-gpu">
        <div>
          <img className="image-size-i" src={img} alt="" />
          <div className="p-2">
            <p>Name: {name}</p>
            <p>Price: {price}</p>
            <p>Quantity: {quantity}</p>
            <p>Supplier Name: {supplierName}</p>
            <p>{shortDescription}</p>
          </div>
          <button
            onClick={() => navigateToUpdateItems(_id)}
            className="w-full button"
          >
            UPDATE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
