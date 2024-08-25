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
        return data;
    }

    const fetchImage = async (quantity: number) => {
        const response = await axios.get(
            `https://api.unsplash.com/search/photos?query=${query}&per_page=${quantity}&client_id=nYaT0XqOqMWmXkVrNrsT39Ne0ITVTjBzUgcOEb5-WPM`
        );
        const data: IImage = response.data;
        return data.results.map(
            (result) => result.urls.raw
        );

    }

    try {
        const foodData = await fetchFood();
        const imagesUrl = await fetchImage(foodData.quantity);

        renderResults(foodData, imagesUrl);
    } catch (error) {
        alert('Ocorreu um erro durante a execução');
    }
}

const renderResults = (foodData: IFood, imagesUrl: string[]) => {
    const resultsContainer = document.querySelector('.results-container');
    const foodResults = document.querySelector('.food-results');

    // Limpa os resultados anteriores, se houver
    if (resultsContainer) {
        resultsContainer.innerHTML = '';
    }

    if (foodResults) {
        foodResults.innerHTML = '';
    }

    // Verifica se a consulta retornou resultados
    if (foodData.quantity > 0) {
        // Adiciona o título
        const titleElement = document.createElement('h2');
        titleElement.textContent = 'Resultados (por 100 gramas)';
        resultsContainer?.appendChild(titleElement);

        // Cria os cards de alimentos
        foodData.object.forEach((food, index) => {
            const card = document.createElement('div');
            card.classList.add('food-card');

            // Adiciona a imagem
            const imageElement = document.createElement('img');
            imageElement.src = imagesUrl[index];
            imageElement.alt = food.descricao;
            card.appendChild(imageElement);

            // Adiciona a descrição
            const descriptionElement = document.createElement('p');
            descriptionElement.innerHTML = `<strong>Descrição:</strong> ${food.descricao}`;
            card.appendChild(descriptionElement);

            // Adiciona o grupo
            const groupElement = document.createElement('p');
            groupElement.innerHTML = `<strong>Grupo:</strong> ${food.categoriaAlimentos.descricao}`;
            card.appendChild(groupElement);

            // Adiciona as calorias
            const caloriesElement = document.createElement('p');
            caloriesElement.innerHTML = `<strong>Calorias:</strong> ${food.energiaKcal} Kcal | ${food.energiaKg} Kg`;
            card.appendChild(caloriesElement);

            // Adiciona a proteína
            const proteinElement = document.createElement('p');
            proteinElement.innerHTML = `<strong>Proteína:</strong> ${food.proteina}g`;
            card.appendChild(proteinElement);

            // Adiciona o carboidrato
            const carbsElement = document.createElement('p');
            carbsElement.innerHTML = `<strong>Carboidrato:</strong> ${food.carboidrato}g`;
            card.appendChild(carbsElement);

            // Adiciona os lipídios
            const lipidsElement = document.createElement('p');
            lipidsElement.innerHTML = `<strong>Lipídios:</strong> ${food.lipidios}g`;
            card.appendChild(lipidsElement);

            // Adiciona o colesterol
            const cholesterolElement = document.createElement('p');
            cholesterolElement.innerHTML = `<strong>Colesterol:</strong> ${food.colesterol || 'N/A'}mg`;
            card.appendChild(cholesterolElement);

            foodResults?.appendChild(card);
        })

        // Adiciona o container de resultados após o título, se "foodResults" não for null
        if (resultsContainer && foodResults)
            resultsContainer?.appendChild(foodResults);

    } else {
        // Se não houver resultados, exibe uma mensagem
        const noResultsElement = document.createElement('p');
        noResultsElement.textContent = 'Nenhum alimento encontrado com esse nome.';
        foodResults?.appendChild(noResultsElement);
    }

}

const foodSubmit = document.getElementById('food-submit');
foodSubmit?.addEventListener('click', () => {
    const foodInput = document.getElementById('food-input') as HTMLInputElement;
    const query = foodInput.value;

    if (query) {
        fetchData(query);
    } else {
        alert('Por favor, digite o nome de um alimento');
    }
})



