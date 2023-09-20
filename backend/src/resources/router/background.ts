import express from 'express';
import image from '../controller/background'

const router = express.Router();

router.get('/:image/background', image);

export default router;
