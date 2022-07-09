import React from "react";
import { datum } from "./../data/houseData";

const RentFilter = () => {
  const data = datum.map((data) => data);
  return (
    <div className=" grid grid-cols-2 md:grid-cols-5 my-5 gap-1">
      <select class="select select-bordered w-full max-w-xs">
        <option disabled selected>
          Location
        </option>
        {datum.map((data) => (
          <option>{data.location}</option>
        ))}
      </select>
      <select class="select select-bordered w-full max-w-xs">
        <option disabled selected>
          Date
        </option>
        <option>Han Solo</option>
        <option>Greedo</option>
      </select>
      <select class="select select-bordered w-full max-w-xs">
        <option disabled selected>
          Price
        </option>
        <option>Han Solo</option>
        <option>Greedo</option>
      </select>
      <select class="select select-bordered w-full max-w-xs">
        <option disabled selected>
          Property Type
        </option>
        <option>Han Solo</option>
        <option>Greedo</option>
      </select>
      <button className="btn  bg-[#82acf3] border-none">Search</button>
    </div>
  );
};

export default RentFilter;
