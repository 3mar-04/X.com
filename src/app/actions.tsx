"use server";

import { imagekit } from "./utils";

export const shareAction = async (
  formData: FormData,
  setting: { type: "original" | "wide" | "square"; sensitive: boolean }
) => {
  const file = formData.get("file") as File;
  // const desc = formData.get("desc") as string;

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const transformation =`w-600 , ${setting.type==="square" ? "ar-1-1" :setting.type === "wide" ? "ar-16-9":"ar-"} `
  imagekit.upload(
    {
      file: buffer,
      fileName: file.name,
      folder: "/posts",
      transformation: {
        pre: transformation,
      },
      customMetadata:{
        sensitive: setting.sensitive,
      }
    },
    function (error, result) {
      if (error) {
        console.log(error);
      } else {
        console.log(result);
      }
    }
  );
};
