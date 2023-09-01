import { Request, Response } from 'express';
import poem from '../model/create.model';

const getPopularPoems = async (req: Request, res: Response) => {
  try {
    // Retrieve all poems from the database
    const poems = await poem.find({});
    res.status(200).json(poems);
  } catch (error) {
    console.error('Error fetching popular poems:', error);
    res
      .status(500)
      .json({ message: 'An error occurred while fetching popular poems' });
  }
};

export default getPopularPoems;
