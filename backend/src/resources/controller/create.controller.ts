import { Request, Response } from 'express';
import poem from '../../resources/model/create.model';
import usersModel from '../../resources/model/users.model';

const createQuestionnaire = async (req: Request, res: Response) => {
  const {
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
    const { username } = req.body; // Get the username from the request body

    // Check if a poem already exists for this user
    const existingPoem = await poem.findOne({ username });

    if (existingPoem)
      return res
        .status(401)
        .json({ message: 'Poem for this user already exists' });

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
