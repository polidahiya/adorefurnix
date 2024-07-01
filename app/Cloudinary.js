import { v2 as cloudinary } from "cloudinary";
cloudinary.config({
  cloud_name: "drnfvc0jt",
  api_key: "928453627132392",
  api_secret: "V2_dFHYxOmT9cSsPYuJHkIKYIGo",
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
