import axios from 'axios';
import { IImage } from '../types/IImage';
import { IFood } from '../types/IFood';

const fetchData = async (query: string) => {
    const fetchFood = async () => {
        const api = axios.create({
            baseURL: 'https://apisunsale.azurewebsites.net/api',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const response = await api.get('/Alimentos/byName?name=' + query);
        const data: IFood = response.data;
        console.log(data);
        return data.quantity;
    }

    const fetchImage = async (quantity: number) => {
        const response = await axios.get(
            `https://api.unsplash.com/search/photos?query=${query}&per_page=${quantity}&client_id=nYaT0XqOqMWmXkVrNrsT39Ne0ITVTjBzUgcOEb5-WPM`
        );
        const data: IImage = response.data;
        const imagesUrl = data.results.map(
            (result) => result.urls.raw
        );
        console.log(imagesUrl);
    }

    try {
        const quantity = await fetchFood();
        await fetchImage(quantity);
    } catch (error) {
        alert('Ocorreu um erro durante a execução');
    }
}


fetchData('Maçã');