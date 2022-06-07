import React from "react";
import { Link } from "react-router-dom";
import useItems from "../../../../Hooks/useItems/useItems";
import ManageInventories from "../ManageInventories/ManageInventories";
import { FaArrowAltCircleRight } from "react-icons/fa";

const ManageInventory = () => {
  const [items] = useItems();
  return (
    <div>
      <div className="block pt-32 pr-5">
        <p className="text-end">
          <Link to={"/inventory/manageInventory/addNewItem"}>
            <button className="btn button">
              <span className="flex">
                <span>ADD NEW ITEM</span>
                <span className="pt-2 pl-5">
                  <FaArrowAltCircleRight />
                </span>
              </span>
            </button>
          </Link>
        </p>
      </div>
      <h1 className="pt-5 text-center text-[#1C8D73]">
        LATEST ITEMS OUR WAREHOUSE
      </h1>
      <div className="grid pt-16 xl:w-3/4 xl:grid-cols-3 xl:mx-auto gap-x-5 gap-y-10">
        {items.slice(6, 2000).map((item) => (
          <ManageInventories key={item._id} item={item}></ManageInventories>
        ))}
      </div>
    </div>
  );
};

export default ManageInventory;
