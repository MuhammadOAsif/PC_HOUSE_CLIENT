import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const AddNewItem = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const url = `https://rocky-castle-41434.herokuapp.com/items`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result) {
          toast("Your new item has been added");
          setTimeout(() => {
            window.location.reload();
          }, 5000);
        }
      });
  };
  return (
    <div className="w-full mx-auto font-sans pt-36 xl:pt-56 xl:pb-56 xl:w-1/2">
      <div className="shadow-lg">
        <div className="w-full p-5 mx-auto xl:w-5/6">
          <h2 className="pb-5 text-center text-[#1FAA59]">ADD NEW ITEM</h2>
          <form
            className="d-flex flex-column"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              className="p-2 mb-2 text-xl border-2"
              placeholder="Photo URL"
              type="text"
              {...register("img")}
            />
            <input
              className="p-2 mb-2 text-xl border-2"
              placeholder="Name"
              {...register("name", { required: true })}
            />
            <input
              className="p-2 mb-2 text-xl border-2"
              placeholder="Price"
              type="number"
              {...register("price", { required: true })}
            />
            <input
              className="p-2 mb-2 text-xl border-2"
              placeholder="Quantity"
              type="number"
              {...register("quantity", { required: true })}
            />
            <input
              className="p-2 mb-2 text-xl border-2"
              placeholder="Supplier Name"
              {...register("supplierName", { required: true })}
            />
            <textarea
              className="p-2 mb-2 text-xl border-2"
              placeholder="Short Description"
              {...register("shortDescription", { required: true })}
            />
            <input className="btn button" type="submit" value="ADD NEW ITEM" />
            <Link to="/inventory/manageInventory">
              <button className="w-full mt-3 btn button">
                DELETE YOUR PREVIOUS ITEM
              </button>
            </Link>
          </form>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default AddNewItem;
