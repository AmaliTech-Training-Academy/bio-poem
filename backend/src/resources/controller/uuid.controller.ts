import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';

const generatedLink = (req: Request, res: Response) => {
  const generatedUuid = uuidv4();

  // Use backticks (`) to create a template string and interpolate the generatedUuid
  const link = `https://homepage.com/homepage?uuid=${generatedUuid}`;

  res.status(200).json({ link });
};

export default generatedLink;
