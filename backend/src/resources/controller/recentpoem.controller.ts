import { Request, Response } from "express";
import poem from '../model/create.model'

const recentPoems =async (req:Request, res: Response) => {
    try {
        const recent = await poem.find({}).sort({createdAt: -1}).limit(15)

        res.status(200).json({ success: true, recentPoems: recent})
    } catch (error) {
        console.error('Error fetching recent poems:', error)
        res.status(500).json({ message: 'An error occured while fetching rencent poems'})
    }
}

export default recentPoems