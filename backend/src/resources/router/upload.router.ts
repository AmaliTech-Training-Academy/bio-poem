import express from 'express';
import uploadImage from '../../resources/controller/upload.controller';
import upload from '../../middleware/multerConfig';
const router = express();

router.patch('/:username/profile-image', upload.single("image"), uploadImage);

export default router;
