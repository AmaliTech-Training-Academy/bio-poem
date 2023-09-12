import { Request, Response } from 'express';
import poem from '../model/create.model';
import calculatePopularity from '../../utils/calculatePopularity';

const getPopularPoems = async (req: Request, res: Response) => {
  try {
    // Retrieve all poems from the database with upvotes greater than one
    const poems = await poem
      .find({ upvotes: { $gt: 1 } })
      .sort({ popularity: -1 })
      .limit(10);

    const popularPoems = poems.map((p) => ({
      _id: p._id,
      firstName: p.firstName,
      adjectives: p.adjectives,
      importantRelation: p.importantRelation,
      loves: p.loves,
      feelings: p.feelings,
      fears: p.fears,
      accomplishments: p.accomplishments,
      expectations: p.expectations,
      residence: p.residence,
      lastName: p.lastName,
      backgroundTheme: p.backgroundTheme,
      upvotes: p.upvotes,
      downvotes: p.downvotes,
      popularity: calculatePopularity(p.upvotes, p.downvotes),
    }));

    // Sort poems by popularity in descending order
    popularPoems.sort((a, b) => b.popularity - a.popularity);

    const popuPoems = popularPoems.map((p) => {
      const { popularity, ...poemWithoutPopularity } = p;
      return poemWithoutPopularity;
    });

    res.status(200).json({ success: true, popuPoems });
  } catch (error) {
    console.error('Error fetching popular poems:', error);
    res
      .status(500)
      .json({ message: 'An error occurred while fetching popular poems' });
  }
};

export default getPopularPoems;
