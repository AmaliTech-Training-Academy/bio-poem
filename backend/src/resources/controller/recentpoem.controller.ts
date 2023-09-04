import { Request, Response } from "express";
import poem from '../model/create.model'

const recentPoem =async (req:Request, res: Response) => {
    try {
        const recent = await poem.find({}).sort({createdAt: -1}).limit(15)

        res.status(200).json({ success: true, recentPoems: recent})
    } catch (error) {
       
    }
}