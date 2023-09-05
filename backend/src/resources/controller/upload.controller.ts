import { Request, Response } from 'express'
import cloudinaryUploadImage from '../../utils/cloudinary.upload'
import fs from 'fs'
import usersModel from '../../resources/model/users.model'
import path from 'path'


const uploadImage =async (req:Request, res: Response) => {
    const { id } = req.params
    try {
        const uploader = (path) => cloudinaryUploadImage(path)
        const urls = []
        const file = req.files
        for(file in files){
            const { path } = file
            const newPath = await uploader(path)
            urls.push(newPath)
            fs.unlinkSync(path)
        }
    } catch (error) {
        
    }
}

export default uploadImage