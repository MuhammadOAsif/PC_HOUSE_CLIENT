import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import CustomLink from "../../../Hooks/Custom/CustomLink/CustomLink";
import auth from "../../../../firebase.init";
import { MenuIcon } from "@heroicons/react/outline";
import { XIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const handleClose = () => setNav(!nav);
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <section>
      <div className="font-sans text-[#242B2E]">
        <div className="w-screen h-[60px] z-20  fixed bg-slate-200">
          <div className="flex items-center justify-between w-full h-full px-2">
            <div className="flex items-center align-middle">
              <Link className="no-underline" to={"/"}>
                <h4 className="ml-6 text-2xl text-[#1C8D73] no-underline">
                  <span className=" text-[#0D0D0D]">PC_</span>HOUSE
                </h4>
              </Link>
              <ul className="hidden gap-2 md:flex pt-2">
                {user ? (
                  <div className="flex">
                    <li>
                      <CustomLink to="/home">HOME</CustomLink>
                    </li>
                    <li>
                      <CustomLink to="/inventory">INVENTORY</CustomLink>
                    </li>
                    <li>
                      <CustomLink to="/inventory/manageInventory">
                        MANAGE ITEMS
                      </CustomLink>
                    </li>
                    <li>
                      <CustomLink to="/inventory/manageInventory/addNewItem">
                        ADD ITEM
                      </CustomLink>
                    </li>
                    <li>
                      <CustomLink to="/myItems">MY ITEMS</CustomLink>
                    </li>
                  </div>
                ) : (
                  <div className="flex">
                    <li>
                      <CustomLink to="/home">HOME</CustomLink>
                    </li>
                    <li>
                      <CustomLink to="/blogs">BLOGS</CustomLink>
                    </li>
                    <li>
                      <CustomLink to="/review">REVIEW</CustomLink>
                    </li>
                    <li>
                      <CustomLink to="/support">SUPPORT</CustomLink>
                    </li>
                  </div>
                )}
              </ul>
            </div>
            <div className="hidden pr-4 md:flex mt-3">
              {user ? (
                <ul>
                  <li>
                    <Link className="pt-2" to="/">
                      <button onClick={handleSignOut} className="px-8 py-3">
                        LOGOUT
                      </button>
                    </Link>
                  </li>
                </ul>
              ) : (
                <ul>
                  <li>
                    <Link className="pt-2 " to="/login">
                      <button className="px-12 py-3 bg-[#1C8D73]">LOGIN</button>
                    </Link>
                  </li>
                </ul>
              )}
            </div>
            <div className="mr-4 md:hidden" onClick={handleClick}>
              {!nav ? <MenuIcon className="w-5" /> : <XIcon className="w-5" />}
            </div>
          </div>

          <ul className={!nav ? "hidden" : "absolute bg-zinc-200 w-full px-8"}>
            {user ? (
              <div>
                <li className="w-full border-b-2 border-zinc-300">
                  <CustomLink onClick={handleClose} to="/home">
                    HOME
                  </CustomLink>
                </li>
                <li className="w-full border-b-2 border-zinc-300">
                  <CustomLink to="/inventory">INVENTORY</CustomLink>
                </li>
                <li className="w-full border-b-2 border-zinc-300">
                  <CustomLink to="/inventory/manageInventory">
                    MANAGE ITEMS
                  </CustomLink>
                </li>
                <li className="w-full border-b-2 border-zinc-300">
                  <CustomLink to="/inventory/manageInventory/addNewItem">
                    ADD ITEM
                  </CustomLink>
                </li>
                <li className="w-full border-b-2 border-zinc-300">
                  <CustomLink to="/myItems">MY ITEMS</CustomLink>
                </li>
              </div>
            ) : (
              <div>
                <li className="w-full border-b-2 border-zinc-300">
                  <CustomLink onClick={handleClose} to="/home">
                    HOME
                  </CustomLink>
                </li>
                <li className="w-full border-b-2 border-zinc-300">
                  <CustomLink to="/blogs">BLOGS</CustomLink>
                </li>{" "}
                <li className="w-full border-b-2 border-zinc-300">
                  <CustomLink to="/review">REVIEW</CustomLink>
                </li>
                <li className="w-full border-b-2 border-zinc-300">
                  <CustomLink to="/support">SUPPORT</CustomLink>
                </li>
              </div>
            )}
            <div className="flex flex-col my-4 mt-2">
              {user ? (
                <Link to="/">
                  <button
                    onClick={handleSignOut}
                    className="px-8 py-3 mb-4 text-[#03C6C7] bg-transparent"
                  >
                    LOGOUT
                  </button>
                </Link>
              ) : (
                <Link to="/login">
                  <button className="px-8 py-3 mb-4 text-[#03C6C7] bg-transparent">
                    SIGN IN
                  </button>
                </Link>
              )}
              <Link to="/signup">
                <button className="px-8 py-3">SIGNUP</button>
              </Link>
            </div>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
