import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./../../../firebase.init";

const MyItem = () => {
  const [myItems, setMyItems] = useState([]);
  console.log(myItems);
  const [email] = useAuthState(auth);
  useEffect(() => {
    const url = `https://rocky-castle-41434.herokuapp.com/myItems/${email}`;
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => setMyItems(data));
  }, []);
  return (
    <div className="pt-32">
      <h1 className="text-4xl text-center text-[#38CC77] font-semibold">
        MY ITEMS
      </h1>
    </div>
  );
};

export default MyItem;
