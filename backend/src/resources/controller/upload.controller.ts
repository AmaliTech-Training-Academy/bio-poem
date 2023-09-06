import { Request, Response } from 'express';
import cloudinary from '../../utils/cloudinary.upload';
import usersModel from '../../resources/model/users.model';

const uploadProfile = async (req: Request, res: Response) => {
  try {
    const { username } = req.params;

    // if (!req.file) return res.status(400).json({ message: 'No file provided' });
    
    // Upload the image to Cloudinary
    const result = await cloudinary.uploader.upload(req.file.path);

    // Check if the user exists
    const user = await usersModel.findById(username);

    if (!user) return res.status(404).json({ message: 'User not found' });

    // Store the Cloudinary URL in the user's profileImage field
    user.profileImage = result.secure_url; // Assuming 'secure_url' is the URL of the uploaded image

    // Save the user document with the updated profileImage field
    await user.save();

    res.status(200).json({
      success: true,
      message: 'Image Uploaded Successfully',
      data: result,
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
