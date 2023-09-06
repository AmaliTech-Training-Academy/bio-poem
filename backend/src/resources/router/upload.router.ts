import express from 'express';
import uploadImage from '../../resources/controller/upload.controller';
import upload from '../../middleware/multerConfig';
const router = express();
// import file from ''

router.patch('/:username/profile-image', upload.single("profileImage"), uploadImage);

export default router;
