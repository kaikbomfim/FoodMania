import { feedbacks } from "../data/feedbacks";

// Seleciona a seção onde os feedbacks serão exibidos
const feedbacksSection = document.querySelector(".feedbacks");

// Verifica se a seção de feedbacks foi encontrada
if (feedbacksSection) {
    // Itera sobre cada feedback no array
    feedbacks.forEach((feedback) => {
        // Cria um novo elemento <div> para cada feedback
        const feedbackDiv = document.createElement("div");
        feedbackDiv.className = "feedback";

        // Cria um elemento <p> para a aspas de abertura
        const quoteStartP = document.createElement("p");
        quoteStartP.textContent = `"`; // Aspas de abertura

        // Cria um elemento <p> para o texto do feedback
        const textP = document.createElement("p");
        textP.textContent = feedback.text;

        // Cria um elemento <p> para a avaliação em estrelas
        const ratingP = document.createElement("p");
        ratingP.className = "rate";
        ratingP.innerHTML = "&#9733;".repeat(feedback.rating); // Renderiza as estrelas

        // Cria um elemento <p> para o autor do feedback
        const authorP = document.createElement("p");
        authorP.textContent = feedback.author;

        // Adiciona os elementos <p> ao <div> do feedback
        feedbackDiv.appendChild(quoteStartP);
        feedbackDiv.appendChild(textP);
        feedbackDiv.appendChild(ratingP);
        feedbackDiv.appendChild(authorP);

        // Adiciona o <div> do feedback à seção de feedbacks
        feedbacksSection.appendChild(feedbackDiv);
    })
}