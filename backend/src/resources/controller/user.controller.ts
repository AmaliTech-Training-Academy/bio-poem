import { Request, Response } from 'express';
import usersModel from '../../resources/model/users.model';

const userCredentials = async (req: Request, res: Response) => {
  const { username } = req.body;
  try {
    // Check if the username is already taken
    const similarUsername = await usersModel.findOne({ username });
    if (similarUsername)
      return res.status(401).json({ message: 'Username already taken' });

    // Create a new user
    const newUser = new usersModel({ username });

    await newUser.save();

    res.status(200).json({ message: 'Username submitted successfully' });
  } catch (error) {
    console.error('Error creating user:', error);
    res
      .status(500)
      .json({ message: 'An error occurred while creating the user' });
  }
};

export default userCredentials;
