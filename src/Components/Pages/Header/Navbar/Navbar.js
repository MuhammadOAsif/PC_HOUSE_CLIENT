import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import CustomLink from "../../../Hooks/Custom/CustomLink/CustomLink";
import auth from "../../../../firebase.init";

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
      <div className="font-serif">
        <div className="w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg">
          <div className="flex items-center justify-between w-full h-full px-2">
            <div className="flex items-center">
              <h4 className="mr-4 text-2xl text-pink-600 no-underline">
                PC_HOUSE
              </h4>
              <ul className="hidden gap-2 md:flex">
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
            <div className="hidden pr-4 md:flex">
              {user ? (
                <ul>
                  <li>
                    <CustomLink to="/">
                      <button onClick={handleSignOut} className="px-8 py-3">
                        LOGOUT
                      </button>
                    </CustomLink>
                  </li>
                </ul>
              ) : (
                <ul>
                  <li>
                    <CustomLink to="/login">
                      <button className="px-12 py-3">LOGIN</button>
                    </CustomLink>
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
            <div className="flex flex-col my-4">
              {user ? (
                <CustomLink to="/">
                  <button
                    onClick={handleSignOut}
                    className="px-8 py-3 mb-4 text-pink-600 bg-transparent"
                  >
                    LOGOUT
                  </button>
                </CustomLink>
              ) : (
                <CustomLink to="/login">
                  <button className="px-8 py-3 mb-4 text-pink-600 bg-transparent">
                    SIGN IN
                  </button>
                </CustomLink>
              )}
              <CustomLink to="/signup">
                <button className="px-8 py-3">SIGNUP</button>
              </CustomLink>
            </div>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
