import React from "react";
import Motherboard from "../../../images/icon/motherboard.png";
import Processor from "../../../images/icon/processor.png";
import Ram from "../../../images/icon/ram.png";
import CPUCooler from "../../../images/icon/cooling-fan.png";
import bgImg from "../../../images/background image/bg-img.png";
import useItems from "../../Hooks/useItems/useItems";
import HomeProduct from "./HomeProduct";
import pcService from "../../../images/homePageImage/pc service.jpg";
import "./Home.css";
import { Link } from "react-router-dom";
import CustomLink from "../../Hooks/Custom/CustomLink/CustomLink";
import Loading from "../../Hooks/Custom/Loading/Loading";
import auth from "../../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";

const Home = () => {
  const [items] = useItems();
  const [user] = useAuthState(auth);

  if (!items) {
    <Loading></Loading>;
  }

  return (
    <section>
      <div className="xl:pt-0 pt-[20%]">
        <div>
          <img className="image-size" src={bgImg} alt="/" />
        </div>

        <div
          className="absolute flex flex-col xl:py-8 md:min-w-[760px] bottom-[20%]
            mx-1 md:left-1/2 transform md:-translate-x-1/2 rounded-xl text-center  shadow-2xl"
        >
          <h3 className="font-sans text-slate-300 xl:text-5xl">
            BUY AND SELL PC HERE
          </h3>
          <br />
          <h2 className="text-slate-300">Featured Category</h2>
          <br />
          <div className="flex flex-wrap justify-between px-4">
            <CustomLink to={"/motherboard"}>
              <p className="flex px-4 py-2 text-orange-500">
                <img className="w-5 h-5 mr-2" src={Motherboard} alt="" />
                MotherBoard
              </p>
            </CustomLink>
            <CustomLink to={"/processor"}>
              <p className="flex px-4 py-2 text-orange-500">
                <img className="w-5 h-5 mr-2" src={Processor} alt="" />
                Processor
              </p>
            </CustomLink>
            <CustomLink to={"/ram"}>
              <p className="flex px-4 py-2 text-orange-500">
                <img className="w-5 h-5 mr-2" src={Ram} alt="" />
                Ram
              </p>
            </CustomLink>
            <CustomLink to={"/cpuCooler"}>
              <p className="flex px-4 py-2 text-orange-500">
                <img className="w-5 h-5 mr-2" src={CPUCooler} alt="" />
                CPU Cooler
              </p>
            </CustomLink>
            {user ? (
              ""
            ) : (
              <Link to="/signup">
                <button className="py-2 px-6 rounded-md">Get Started</button>
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* WELCOME */}
      <div className="container p-5 xl:mt-0 mt-[100%]">
        <div className="grid xl:grid-cols-2">
          <div className="order-2 order-xl-1">
            <h3 className="pt-10 font-sans text-slate-700">
              WELCOME TO PC WAREHOUSE
            </h3>

            <div className="w-20">
              <hr />
            </div>
            <br />
            <div>
              <p className="font-thin text-slate-800">
                PC Warehouse has been serving its customers for over 30 years.
                We specialize in computer, Laptop, Monitor, IPad, etc Buy and
                Sell, security camera systems, and IT support for businesses. We
                build networks that are reasonably priced, yet carry the uptime
                and performance characteristics of a large enterprise.
              </p>
              <br />
            </div>

            <Link to={"/"}>
              <button className="px-8 py-3 font-sans">Read More</button>
            </Link>
          </div>
          <div className="order-1 order-xl-2">
            <img src={pcService} alt="" />
          </div>
        </div>

        {user ? (
          <div>
            <div className="pt-16">
              <h1 className="mt-5 text-center text-[#02B290]">
                TODAY TOP DEAL FULL SETUP
              </h1>
            </div>
            <div className="p-2 mt-5 gap-x-5 gap-y-20 card">
              {items.slice(0, 6).map((item) => (
                <HomeProduct key={item._id} item={item}></HomeProduct>
              ))}
            </div>
            <div className="pt-16 mx-auto xl:w-80">
              <Link to={"/inventory/manageInventory"}>
                <button className="w-full btn button">See all items</button>
              </Link>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </section>
  );
};

export default Home;
