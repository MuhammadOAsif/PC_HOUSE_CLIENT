import React from "react";
import useItems from "../Hooks/useItems/useItems";

const Processor = () => {
  const [items] = useItems();
  return (
    <div>
      <h1 className="text-center text-[#1C8D73] pt-36">LATEST PROCESSOR</h1>
      <div className="grid pt-16 xl:w-5/6 xl:grid-cols-3 xl:mx-auto gap-x-5 gap-y-10">
        {items.slice(11, 16).map((item) => (
          <div>
            <div key={item._id} className="border h-[750px]">
              <img src={item.img} alt="" />
              <div className="p-2">
                <p>Name: {item.name}</p>
                <p>Price: {item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Supplier Name: {item.supplierName}</p>
                <p>{item.shortDescription}</p>
              </div>
            </div>
            <button className="w-full button">UPDATE</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Processor;
