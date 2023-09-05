import { Request, Response } from 'express';
import cloudinaryUploadImage from '../../utils/cloudinary.upload';
import fs from 'fs';
import usersModel from '../../resources/model/users.model';
import path from 'path';

const uploadImage = async (req: Request, res: Response) => {
  const { username } = req.params;

  try {
    const uploader = async (filePath: string) => cloudinaryUploadImage(filePath); // Make the uploader function asynchronous

    const urls = "";
    const files = req.files; 

    for (const file of files) { 
      const newPath = await uploader(path);
      urls.push(newPath);
      fs.unlinkSync(path);
    }

    // Assuming you want to update the user's profile with the image URLs
    const user = await usersModel.findById(username);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    user.profileImage = urls;
    await user.save();

    res.status(200).json({ success: true, message: 'Images uploaded successfully', urls });
  } catch (error) {
    console.error('Error uploading images:', error);
    res.status(500).json({ success: false, message: 'An error occurred while uploading images' });
  }
};

export default uploadImage;
