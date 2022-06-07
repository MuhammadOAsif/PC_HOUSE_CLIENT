import React from "react";
import { useNavigate } from "react-router-dom";
const HomeProduct = ({ item }) => {
  const navigate = useNavigate();
  const { _id, name, img, price, quantity, supplierName, shortDescription } =
    item;
  const navigateToUpdateItems = (_id) => {
    navigate(`/inventoryItem/${_id}`);
  };
  return (
    <div>
      <div className="border h-[700px]">
        <img className="" src={img} alt="" />
        <div className="p-2">
          <p>Name: {name}</p>
          <p>Price: {price}</p>
          <p>Quantity: {quantity}</p>
          <p>Supplier Name: {supplierName}</p>
          <p>{shortDescription}</p>
        </div>
      </div>
      <button
        onClick={() => navigateToUpdateItems(_id)}
        className="w-full button"
      >
        UPDATE
      </button>
    </div>
  );
};
export default HomeProduct;
