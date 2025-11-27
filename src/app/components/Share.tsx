import Image from "./Image";
import React from "react";

const Share = () => {
  return (
    <div className="p-4 flex gap-4">
      {/* AVATAR */}
      <div className=" relative w-10 h-10 rounded-full overflow-hidden">
        <Image
          path="/general/avatar.jpg"
          alt="logo"
          w={100}
          h={100}
        ></Image>
      </div>
      {/* OTHERS */}
      <div className=" flex-1 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <input className="bg-transparent outline-none placeholder:text-textGray text-xl " type="text" name="" id="" placeholder="What is happening?!" />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center flex-wrap gap-4">
            <Image path="/icons/image.svg" alt="image" w={20} h={20}/>
            <Image path="/icons/gif.svg" alt="image" w={20} h={20}/>
            <Image path="/icons/poll.svg" alt="image" w={20} h={20}/>
            <Image path="/icons/emoji.svg" alt="image" w={20} h={20}/>
            <Image path="/icons/schedule.svg" alt="image" w={20} h={20}/>
            <Image path="/icons/location.svg" alt="image" w={20} h={20}/>
        </div>
          <button  className="bg-white text-black font-bold rounded-full py-2 px-4 ">
            Postw
          </button>
        </div>
      </div>
    </div>
  );
};

export default Share;
