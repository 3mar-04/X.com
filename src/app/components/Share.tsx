"use client";

import { shareAction } from "../actions";
import Image from "./Image";
import NextImage from "next/image";
import React, { useState } from "react";
import ImageEditor from "./ImageEditor";

const Share = () => {
const [media, setMedia] = useState<File | null>(null);
const [isEditerOpen, setisEditerOpen] = useState(false);

const [setting, setSetting] = useState<{
  type: "original" | "wide" | "square";
  sensitive: boolean;
}>({
  type: "original",
  sensitive: false,
});

const handleMediaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  if (e.target.files && e.target.files[0]) {
    setMedia(e.target.files[0]);
  }
};

const previewURL = media ? URL.createObjectURL(media) : null;
return (
  <form className="p-4 flex gap-4" action={formData=>shareAction(formData , setting)}>
    {/* AVATAR */}
    <div className=" relative w-10 h-10 rounded-full overflow-hidden">
      <Image path="/general/avatar.jpg" alt="logo" w={100} h={100}></Image>
    </div>
    {/* OTHERS */}
    <div className=" flex-1 flex flex-col gap-4">
      <div className="flex-1 flex gap-4 flex-col">
        <input
          className="bg-transparent outline-none placeholder:text-textGray text-xl "
          type="text"
          name="desc"
          id=""
          placeholder="What is happening?!"
        />
        {/* PREVIEW IMAGE */}
        {previewURL && (
          <div className="relative rounded-xl overflow-hidden ">
            <NextImage
              src={previewURL}
              alt="Image"
              width={600}
              height={600}
              className={`w-full ${
                setting.type === "original"
                  ? "h-full object-contain"
                  : setting.type === "square"
                  ? "aspect-square object-cover"
                  : "aspect-video object-cover"
              }`}
            />
            <div
              className="absolute top-2 left-2 bg-black opacity-50 text-white px-4 rounded-full font-bold text-sm cursor-pointer"
              onClick={() => setisEditerOpen(true)}
            >
              EDIT
            </div>
          </div>
        )}

        {isEditerOpen && previewURL && (
          <ImageEditor
            onClose={() => {
              setisEditerOpen(false);
            }}
            previewURL={previewURL}
            setting={setting}
            setsetting={setSetting}
          />
        )}
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center flex-wrap gap-4">
          <input
            type="file"
            name="file"
            id="file"
            onChange={handleMediaChange}
            className="hidden"
          />
          <label htmlFor="file">
            <Image path="/icons/image.svg" alt="image" w={20} h={20} />
          </label>
          <Image path="/icons/gif.svg" alt="image" w={20} h={20} />
          <Image path="/icons/poll.svg" alt="image" w={20} h={20} />
          <Image path="/icons/emoji.svg" alt="image" w={20} h={20} />
          <Image path="/icons/schedule.svg" alt="image" w={20} h={20} />
          <Image path="/icons/location.svg" alt="image" w={20} h={20} />
        </div>
        <button className="bg-white text-black font-bold rounded-full py-2 px-4 ">
          Post
        </button>
      </div>
    </div>
  </form>
);
};

export default Share;
