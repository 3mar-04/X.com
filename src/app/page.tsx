"use client";

import Link from "next/link";
import Feed from "./components/Feed";
import Share from "./components/Share";
import Hello from "./components/Image";
import IKImg from "./components/Image";

const Homepage = () => {
  return (
    <div className="">
      <div className="flex px-4 pt-4 justify-between text-textGray font-bold border-b-[1px] border-borderGray">
        <Link
          className="pb-3 flex items-center justify-center border-b-4 border-iconBlue  "
          href="/"
        >
          For You
        </Link>
        <Link
          className="pb-3 flex items-center justify-center  "
          href="/"
        >
          Following 
        </Link>
        <Link
          className="pb-3 hidden md:flex  items-center justify-center  "
          href="/"
        >
          HTML 
        </Link>
        <Link
          className="pb-3 hidden md:flex items-center justify-center  "
          href="/"
        >
          CSS 
        </Link>
        <Link
          className="pb-3 hidden md:flex items-center justify-center  "
          href="/"
        >
          JavaScript 
        </Link>
      </div>
        
      <Share />
      <Feed />
      <Feed />
      <Feed />
      <Feed />
    </div>
  );
};

export default Homepage;
