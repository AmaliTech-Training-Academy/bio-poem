import cloudinary from 'cloudinary'

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.SECRET_KEY,
  });
  
  const cloudinaryUploadImage = async (fileToUploads: string) => {
    try {
      return new Promise((resolve, reject) => {
        cloudinary.uploader.upload(fileToUploads, (result: any, error: any) => {
          if (error) {
            reject(error);
          } else {
            resolve({
              url: result.secure_url,
              asset_id: result.asset_id,
              public_id: result.public_id,
            });
          }
        }, { resource_type: "auto" });
      });
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
  
  module.exports = { cloudinaryUploadImage, };