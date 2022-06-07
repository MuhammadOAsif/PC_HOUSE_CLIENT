import { useEffect, useState } from "react";

const ManageInventories = ({ item }) => {
  const { img, name, price, quantity, supplierName, shortDescription } = item;
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("https://boiling-mountain-69201.herokuapp.com/items")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure you want to delete item?");
    if (proceed) {
      const url = `https://boiling-mountain-69201.herokuapp.com/items/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged === true) {
            console.log("DELETED");
            const remaining = items.filter((item) => item._id !== id);
            setItems(remaining);
          }
        });
    }
  };
  return (
    <div className="transition duration-700 ease-in-out border delay-350 bg-pink-50 hover:text-white hover:-translate-y-1 hover:scale-110 hover:bg-pink-500 transform-gpu">
      <img className="w-[100%]" src={img} alt="" />
      <div className="p-2">
        <p>Name: {name}</p>
        <p>Price: {price}</p>
        <p>Quantity: {quantity}</p>
        <p>Supplier Name: {supplierName}</p>
        <p>{shortDescription}</p>
      </div>
      <button onClick={() => handleDelete(item._id)} className="w-full button">
        DELETE
      </button>
    </div>
  );
};

export default ManageInventories;
