import { Request, Response } from 'express';
import poem from '../../resources/model/create.model';

const createQuestionnaire = async (req: Request, res: Response) => {
  const {
    username,
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
  } = req.body;

  try {
    // Check if the username is already taken
    const similarUsername = await poem.findOne({ username });
    if (similarUsername) {
      return res.status(401).json({ message: 'Username already Taken' });
    }

    // made the username unique in the model, so I dont I need the check for similarUserName
    // Check if a poem with the same combination of firstName, and lastName exists
    const existingPoem = await poem.findOne({ username });
    if (existingPoem) {
      return res
        .status(401)
        .json({ message: 'Poem for this user already exists' });
    }

    // Create a new poem if all checks pass
    const createdQuestionnaire = await poem.create({
      username,
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
