import { Request, Response } from 'express';
import poem from '../model/create.model';
import usersModel from '../model/users.model';

const recentPoems = async (req: Request, res: Response) => {
  // Default values for page and limit if not provided or not valid numbers
  const currentPage = parseInt(req.query.page as string, 10) || 1;
  const itemsPerPage = parseInt(req.query.limit as string, 10) || 12;

  try {

    const user = await usersModel.find()

    // Find recent poems and populate the user data
    const recentPoems = await poem
      .find({})
      .sort({ createdAt: -1 })
      .limit(itemsPerPage)
      .populate({
        path: 'user', // Assuming the field in 'poem' model that references the user is named 'userId'
        select: 'profileImage username', // Select the fields you want to include
      })
      .exec();

      console.log(recentPoems);
      

    res.status(200).json({ success: true, recentPoems });
  } catch (error) {
    console.error('Error fetching recent poems:', error);
    res
      .status(500)
      .json({ message: 'An error occurred while fetching recent poems' });
  }
};

export default recentPoems;
