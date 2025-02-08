import axios, {AxiosResponse} from 'axios';

const API_URL = 'http://192.168.1.34:3000/api/v1/restaurant/product';

const axiosInstance = axios.create({
    baseURL: API_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'multipart/form-data',
    },
});

export const postProductDetails = async(formData: any) => {
    try{
        const response: AxiosResponse = await axiosInstance.post('/create-product/', formData);
        console.log(response.data);
        return response.data;

    } catch (error){
        console.log(error);
        throw error;
    }
}