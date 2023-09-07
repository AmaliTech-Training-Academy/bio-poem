import express from 'express';
import user from '../controller/user.controller';
import upload from '../../middleware/multerConfig'
const router = express();

router.post('/username', upload.single('file'), user);

export default router;
