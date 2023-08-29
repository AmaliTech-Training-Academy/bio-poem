import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

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
    profileImage,
  } = req.body;

  const createdQuestionnaire = await prisma.questionnaire.create({
    data: {
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
    },
  });

  res.status(201).json({ success: true, data: createdQuestionnaire });
};

export default createQuestionnaire;
