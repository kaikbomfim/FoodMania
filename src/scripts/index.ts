import axios from 'axios';
import { IImage } from '../types/IImage';
import { IFood } from '../types/IFood';
import Toastify from 'toastify-js'

// Função principal para buscar dados de alimentos e imagens
const fetchData = async (query: string) => {
    // Função para buscar os dados do alimento na API
    const fetchFood = async () => {
        const api = axios.create({
            baseURL: 'https://apisunsale.azurewebsites.net/api',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        // Faz a requisição para buscar o alimento pelo nome
        const response = await api.get('/Alimentos/byName?name=' + query);
        const data: IFood = response.data;
        return data;
    }

    // Função para buscar imagens relacionadas ao alimento na API Unsplash
    const fetchImage = async (quantity: number) => {
        const response = await axios.get(
            `https://api.unsplash.com/search/photos?query=${query}&per_page=${quantity}&client_id=nYaT0XqOqMWmXkVrNrsT39Ne0ITVTjBzUgcOEb5-WPM`
        );
        const data: IImage = response.data;

        // Retorna as URLs das imagens
        return data.results.map(
            (result) => result.urls.raw
        );

    }

    try {
        // Busca os dados do alimento
        const foodData = await fetchFood();

        // Busca as imagens com base na quantidade de alimentos retornados
        const imagesUrl = await fetchImage(foodData.quantity);

        // Renderiza os resultados na tela
        renderResults(foodData, imagesUrl);
    } catch (error) {
        // Exibe um alerta em caso de erro na execução
        Toastify({
            text: "Ocorreu um erro durante a busca.",
            duration: 3000,
            close: true,
            backgroundColor: "linear-gradient(to right, #FF5F6D, #FFC371)"
        }).showToast();
    }
}


// Função utilitária para validar e formatar números
const formatNumber = (value: string | number): string => {
    const parsedValue = typeof value === 'string'
        ? parseFloat(value.replace(',', '.'))
        : value;

    // Verifica se o valor é inválido e retorna 'N/A', caso contrário, formata o número
    return isNaN(parsedValue) || value === '*' || value === 'NA' || value === null
        ? 'N/A'
        : parsedValue.toFixed(2);
};

// Função para renderizar os resultados na tela
const renderResults = (foodData: IFood, imagesUrl: string[]) => {
    const resultsContainer = document.querySelector('.results-container');

    // Limpa os resultados anteriores, se houver
    if (resultsContainer) {
        resultsContainer.innerHTML = '';
    }

    // Cria um novo contêiner para os resultados dos alimentos
    const foodResults = document.createElement('div');
    foodResults.classList.add('food-results');

    // Verifica se a consulta retornou resultados
    if (foodData.quantity > 0) {
        // Mensagem de sucesso
        Toastify({
            text: "Busca concluída com sucesso!",
            duration: 3000,
            close: true,
            backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)"
        }).showToast();

        // Adiciona o título "Resultados (por 100 gramas)"
        const titleElement = document.createElement('h2');
        titleElement.textContent = 'Resultados (por 100 gramas)';
        resultsContainer?.appendChild(titleElement);

        // Cria um card para cada alimento retornado
        foodData.object.forEach((food, index) => {
            const card = document.createElement('div');
            card.classList.add('food-card');

            // Adiciona a imagem do alimento ao card
            const imageElement = document.createElement('img');
            imageElement.src = imagesUrl[index];
            imageElement.alt = food.descricao;
            card.appendChild(imageElement);

            // Adiciona a descrição
            const descriptionElement = document.createElement('p');
            descriptionElement.innerHTML = `<strong>Descrição:</strong> ${food.descricao}`;
            card.appendChild(descriptionElement);

            // Adiciona o grupo alimentar
            const groupElement = document.createElement('p');
            groupElement.innerHTML = `<strong>Grupo:</strong> ${food.categoriaAlimentos.descricao}`;
            card.appendChild(groupElement);

            // Adiciona as calorias
            const caloriesElement = document.createElement('p');
            caloriesElement.innerHTML =
                (formatNumber(food.energiaKcal) !== 'N/A' && formatNumber(food.energiaKg) !== 'N/A')
                    ? `<strong>Calorias:</strong> ${formatNumber(food.energiaKcal)} Kcal | ${formatNumber(food.energiaKg)} kJ`
                    : `<strong>Calorias:</strong> N/A`;
            card.appendChild(caloriesElement);

            // Adiciona a quantidade de proteína
            const proteinElement = document.createElement('p');
            proteinElement.innerHTML =
                formatNumber(food.proteina) !== 'N/A'
                    ? `<strong>Proteína:</strong> ${formatNumber(food.proteina)}g`
                    : `<strong>Proteína:</strong> N/A`;
            card.appendChild(proteinElement);

            // Adiciona a quantidade de carboidrato
            const carbsElement = document.createElement('p');
            carbsElement.innerHTML =
                formatNumber(food.carboidrato) !== 'N/A'
                    ? `<strong>Carboidrato:</strong> ${formatNumber(food.carboidrato)}g`
                    : `<strong>Carboidrato:</strong> N/A`;
            card.appendChild(carbsElement);

            // Adiciona a quantidade de lipídios
            const lipidsElement = document.createElement('p');
            lipidsElement.innerHTML =
                formatNumber(food.lipidios) !== 'N/A'
                    ? `<strong>Lipídios:</strong> ${formatNumber(food.lipidios)}g`
                    : `<strong>Lipídios:</strong> N/A`;
            card.appendChild(lipidsElement);

            // Adiciona a quantidade de colesterol ao card, se disponível
            const cholesterolElement = document.createElement('p');
            cholesterolElement.innerHTML =
                formatNumber(food.colesterol) !== 'N/A'
                    ? `<strong>Colesterol:</strong> ${formatNumber(food.colesterol)}mg`
                    : `<strong>Colesterol:</strong> N/A`;
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
        resultsContainer?.appendChild(noResultsElement);
    }

}

// Adiciona o evento de clique no botão de busca
const foodSubmit = document.getElementById('food-submit');
foodSubmit?.addEventListener('click', () => {
    const foodInput = document.getElementById('food-input') as HTMLInputElement;
    const query = foodInput.value;

    if (query) {
        fetchData(query);
    } else {
        // Mensagem de erro caso o usuário não informe um alimento
        Toastify({
            text: "Por favor, digite o nome de um alimento",
            duration: 3000,
            close: true,
            backgroundColor: "linear-gradient(to right, #FF5F6D, #FFC371)"
        }).showToast();
    }
})



