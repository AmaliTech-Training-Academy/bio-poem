import { Schema, model } from "mongoose";
import profileInterface from '../../utils/interfaces/profile.interface'

const profileSchema = new Schema({
    profileImage: String,
})

export default model<profileInterface>('profile-image', profileSchema)