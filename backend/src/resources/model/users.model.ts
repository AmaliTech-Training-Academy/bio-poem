import { Schema, model } from "mongoose";
import profileInterface from '../../utils/interfaces/users.interface'

const profileSchema = new Schema({
    username: String,
    profileImage: String,
})

export default model<profileInterface>('users', profileSchema)