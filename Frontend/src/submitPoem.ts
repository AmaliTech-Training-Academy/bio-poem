import axios from 'axios'
import { data } from './store/formSlice'

export const submitPoem = async (poem:data) => {
    const url = 'https://bio-poem.onrender.com/api/v1/poems/create-poem';

    try {
        const response = await axios.post(url, poem);
        console.log(response);
    } catch (error) {
        console.error(error);
        throw error;
    }
}