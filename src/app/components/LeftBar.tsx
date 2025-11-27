import Link from "next/link";
import React from "react";
import Image from "./Image";

const menuLinks = [
  { id: 1, name: "Homepage", link: "/", icon: "/icons/home.svg" },
  { id: 2, name: "Explore", link: "/", icon: "/icons/explore.svg" },
  { id: 3, name: "Notification", link: "/", icon: "/icons/notification.svg" },
  { id: 4, name: "Messages", link: "/", icon: "/icons/message.svg" },
  { id: 5, name: "Bookmarks", link: "/", icon: "/icons/bookmark.svg" },
  { id: 6, name: "Jobs", link: "/", icon: "/icons/job.svg" },
  { id: 7, name: "Communities", link: "/", icon: "/icons/community.svg" },
  { id: 8, name: "Premium", link: "/", icon: "/icons/logo.svg" },
  { id: 9, name: "Profile", link: "/", icon: "/icons/profile.svg" },
  { id: 10, name: "More", link: "/", icon: "/icons/more.svg" },
];

const LeftBar = () => {
  return (
    <div className="h-screen sticky top-0 flex flex-col justify-between pt-2 pb-8  ">
      {/* Logo Menu Button */}
      <div className="flex flex-col gap-4 text-lg items-center xxl:items-start">
        {/* LOGO */}
        <Link href={"#"} className="p-2 rounded-full hover:bg-[#181818]">
          <Image path="icons/logo.svg" alt="#"  w={24} h={24}></Image>
        </Link>
        {/* Menu List */}
        <div className="flex flex-col gap-4 ">
          {menuLinks.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              className="flex p-2 rounded-full hover:bg-[#181818] items-center gap-4 "
            >
              <Image
                w={24}
                h={24}
                path={item.icon}
                alt={item.name}
              ></Image>
              <span className="hidden xxl:inline">{item.name}</span>
            </Link>
          ))}
          {/* BUTTON */}
        </div>
        <Link
          href={"#"}
          className=" bg-white text-black rounded-full font-bold flex w-12 h-12 items-center justify-center xxl:hidden "
        >
          <Image
            w={24}
            h={24}
            path="icons/post.svg"
            alt="Post"
            className="text-white"
          ></Image>
        </Link>
        <Link
          href={"#"}
          className="hidden xxl:block bg-white text-black rounded-full font-bold py-2 px-20 "
        >
          Post
        </Link>
      </div>
      {/* User */}
      <div className="flex items-center justify-between rounded-full ">
        <div className="flex items-center justify-center gap-">
          <div className="w-10 h-10 relative rounded-full overflow-hidden">
            <Image
              path="/general/avatar.jpg"
              alt="logo"
              tr={true}
              w={100}
              h={100}
            />
          </div>
          <div className=" flex-col hidden xxl:flex">
            <span className="font-bold ">Omar Sabri</span>
            <span className="text-sm text-textGray">@omarsabri.4</span>
          </div>
        </div>
        <div className="hidden xxl:block cursor-pointer">...</div>
      </div>
    </div>
  );
};

export default LeftBar;
