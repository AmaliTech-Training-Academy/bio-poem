import { Request, Response } from 'express';
import poem from '../model/create.model';

const downvotes = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const poemToDownVote = await poem.findById(id);

    if (!poemToDownVote)
      return res.status(404).json({ message: 'Poem not found' });

    poemToDownVote.downvotes = +1;

    poemToDownVote.save();

    res.status(200).json({ message: 'Poem down voted successfully' });
  } catch (error) {}
};
export default downvotes
