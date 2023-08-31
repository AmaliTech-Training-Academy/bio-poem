import { Request, Response } from 'express';
import poem from '../../resources/model/create.model';

console.log('poem::', poem);


const createQuestionnaire = async (req: Request, res: Response) => {
  const {
    _id,
    firstName,
    adjectives,
    importantRelation,
    loves,
    feelings,
    fears,
    accomplishments,
    expectations,
    residence,
    lastName,
    backgroundTheme,
    profileImage,
  } = req.body;
  console.log('_id', _id)

  try {
    const existingPoem = await poem.findById(_id);
    console.log('existingPoem', existingPoem)

    if (existingPoem)
      return res
        .status(401)
        .json({ message: 'Poem for this user already exists' });

    const createdQuestionnaire = await poem.create({
      firstName,
      adjectives,
      importantRelation,
      loves,
      feelings,
      fears,
      accomplishments,
      expectations,
      residence,
      lastName,
      backgroundTheme,
      profileImage,
    });

    res.status(201).json({
      success: true,
      message: "You've made it! Bio Poem Created Successfully",
      data: createdQuestionnaire,
    });
  } catch (error) {
    console.error('Error creating questionnaire:', error);
    res.status(500).json({
      success: false,
      message: 'An error occurred while creating the bio poem questionnaire',
    });
  }
};

export default createQuestionnaire;
