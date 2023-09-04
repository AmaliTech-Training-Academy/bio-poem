import { Request, Response } from 'express';
import poem from '../model/create.model';
import calculatePopularity from '../../utils/calculatePopularity';

const getPopularPoems = async (req: Request, res: Response) => {
  try {
    // Retrieve all poems from the database with upvotes greater than one
    const poems = await poem.find({ upvotes: { $gt: 1 } }).sort({ popularity: -1 }).limit(10);

    const popularPoems = poems.map((p) => ({
      _id: p._id,
      popularity: calculatePopularity(p.upvotes, p.downvotes),
    }));

    // Sort poems by popularity in descending order
    popularPoems.sort((a, b) => b.popularity - a.popularity);

    res.status(200).json({ success: true, popularPoems });
  } catch (error) {
    console.error('Error fetching popular poems:', error);
    res
      .status(500)
      .json({ message: 'An error occurred while fetching popular poems' });
  }
};

export default getPopularPoems;
