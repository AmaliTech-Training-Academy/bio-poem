import express from 'express';
import uploadImage from '../../resources/controller/upload.controller';
const router = express();

router.patch('/profile-image', uploadImage);

export default router;
