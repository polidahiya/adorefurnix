import { v2 as cloudinary } from "cloudinary";
cloudinary.config({
  cloud_name: process.env.cloudinary_cloud_name,
  api_key: process.env.cloudinary_api_key,
  api_secret: process.env.cloudinary_api_secret,
});

// Helper function to upload a single image
export const uploadImage = (buffer) => {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      { folder: "Adorefurnix" },
      (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      }
    );
    uploadStream.end(buffer);
  });
};

// delete image from url
export const Deleteiamgefromurl = (url) => {
  const parts = url.split("/");
  const fileName = parts[parts.length - 1];
  const publicId = fileName.split(".")[0];
  console.log(url, publicId);
  cloudinary.uploader.destroy("Adorefurnix/" + publicId);
};
