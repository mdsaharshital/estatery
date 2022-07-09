import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { datum } from "./../../components/data/houseData";
import { BiBed } from "react-icons/bi";
import { MdOutlineBathroom } from "react-icons/md";
import { GoLocation } from "react-icons/go";
import { BiBuildingHouse } from "react-icons/bi";
import Footer from "../../components/Footer/Footer";
import RentFilter from "../../components/RentFilter/RentFilter";

const Rent = () => {
  return (
    <div className="">
      <Navbar />
      {/*  */}
      <div className="container mx-auto my-10">
        <RentFilter />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-10">
          {datum.map((data) => (
            <>
              <div class="card w-96 bg-base-100 shadow-xl ">
                <figure>
                  <img src={data.image} alt="houese" />
                </figure>
                <div class="card-body ">
                  <h1 className="">
                    <span className="text-2xl font-bold text-[#82acf3]">
                      {" "}
                      ${data.price}
                    </span>
                    <span className="text-slate-400">/mo</span>
                  </h1>
                  <h2 class="card-title cursor-pointer font-bold mt-4">
                    <BiBuildingHouse />
                    {data.name}
                    <div class="badge badge-secondary bg-[#82acf3] outline-none border-0 text-white uppercase">
                      {data.type}
                    </div>
                  </h2>
                  <p className="text-[#82acf3] font-bold flex items-center">
                    <GoLocation />
                    {data.location}
                  </p>
                  <div class="card-actions justify-end">
                    <div class="badge badge-outline border-[#82acf3] border-1">
                      <BiBed /> - {data.bed}
                    </div>
                    <div class="badge bg-[#82acf3] border-none">
                      <MdOutlineBathroom /> - {data.bathroom}
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Rent;
