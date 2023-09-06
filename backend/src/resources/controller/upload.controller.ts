import { Request, Response } from 'express';
import cloudinary from '../../utils/cloudinary.upload';
import upload from '../../middleware/multerConfig';

const uploadProfile = (req: Request, res: Response) => {
  try {

    cloudinary.uploader.upload(req.file.path, function (err: any, result: any) {
      if (err) {
        return res.status(500).json({
          success: false,
          message: 'Error uploading profile image',
        });
      }

      res.status(200).json({
        success: true,
        message: 'Image Uploaded Successfully',
        data: result,
      });
    });
  } catch (error) {
    console.error('Error uploading image:', error);
    res.status(500).json({
      success: false,
      message: 'An error occurred while uploading the image',
    });
  }
};

export default uploadProfile;
