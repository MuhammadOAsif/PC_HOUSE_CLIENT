import React from "react";
import useItems from "../../../../Hooks/useItems/useItems";
import Inventories from "../Inventories/inventories";

const Inventory = () => {
  const [items] = useItems();
  console.log(items);
  return (
    <div>
      <h1 className="text-center text-[#1C8D73] pt-36">Our Most Items</h1>
      <div className="pt-16 xl:grid xl:w-5/6 xl:grid-cols-3 xl:mx-auto xl:gap-x-8 xl:gap-y-12">
        {items.slice(0, 8).map((item) => (
          <Inventories key={item._id} item={item}></Inventories>
        ))}
      </div>
    </div>
  );
};

export default Inventory;
