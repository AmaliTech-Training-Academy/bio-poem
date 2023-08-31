import express from 'express'
import createQuestionnaire from '../controller/create.controller'

const router = express.Router()

router.post('/create-poem', createQuestionnaire)

export default router

