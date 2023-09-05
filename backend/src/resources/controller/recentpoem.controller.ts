import { Request, Response } from 'express';
import poem from '../model/create.model';

const recentPoems = async (req: Request, res: Response) => {
  // Default values for page and limit if not provided or not valid numbers
  const currentPage = parseInt(req.query.page as string, 10) || 1;
  const itemsPerPage = parseInt(req.query.limit as string, 10) || 12;
  console.log(currentPage);
  console.log(itemsPerPage);
  
  try {
    const recentPoem = await poem.find({}).sort({ createdAt: -1 }).limit(12);

    res.status(200).json({ success: true, recentPoems: recentPoem });
  } catch (error) {
    console.error('Error fetching recent poems:', error);
    res
      .status(500)
      .json({ message: 'An error occured while fetching rencent poems' });
  }
};

export default recentPoems;
