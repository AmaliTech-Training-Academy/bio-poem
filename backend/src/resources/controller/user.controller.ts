import { Request, Response } from 'express';
import usersModel from '../../resources/model/users.model';

const userCredentials = async (req: Request, res: Response) => {
  const { username } = req.body;
  try {
    // Check if the username is already taken
    const similarUsername = await usersModel.findOne({ username });

    if (!username)
      return res.status(400).json({ message: 'Username is required' });

    if (similarUsername)
      return res.status(401).json({ message: 'Username already taken' });

    // Create a new user
    const newUser = new usersModel({ username });

    // Save the new user to the database
    const savedUser = await newUser.save();

    // Extract the userId from the saved user document
    const userId = savedUser._id;

    res
      .status(200)
      .json({ userId, message: 'Username submitted successfully' });
  } catch (error) {
    console.error('Error creating user:', error);
    res
      .status(500)
      .json({ message: 'An error occurred while creating the user' });
  }
};

export default userCredentials;
