// import fs from 'fs';
// import path from 'path';
import { Request, Response } from 'express';
import cloudinary from '../../utils/cloudinary.upload';

// const folderPath = '../../../image-assets'
const uploadImagesToCloudinary = (req: Request, res: Response) => {
  const { image } = req.params;

  cloudinary.api.resource(image, (error, result) => {
    if (error) {
      console.error('Error retrieving image:', error);
      res.status(500).json({ error: 'Image retrieval failed' });
    } else {
      res.contentType(result.format)
      res.send(result.url)
    }
  });
  //   fs.readdir(folderPath, (err, files) => {
  //     if (err) {
  //       console.log('Error reading folder:', err);
  //       return;
  //     }

  //     files.forEach((fileName) => {
  //       const imagePath = path.join(folderPath, fileName);

  //       cloudinary.uploader.upload(imagePath, (error, result) => {
  //         if (error) {
  //           console.log(`Error uploading ${fileName}:`, error);
  //         } else {
  //           console.log(`Image ${fileName} uploaded successfully.`);
  //           console.log(result);
  //         }
  //       });
  //     });
  //   });
};

export default uploadImagesToCloudinary;
