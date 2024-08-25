import { feedbacks } from "../data/feedbacks";

const feedbacksSection = document.querySelector(".feedbacks");

if (feedbacksSection) {
    feedbacks.forEach((feedback) => {
        const feedbackDiv = document.createElement("div");
        feedbackDiv.className = "feedback";

        const quoteStartP = document.createElement("p");
        quoteStartP.textContent = `"`; // Aspas de abertura

        const textP = document.createElement("p");
        textP.textContent = feedback.text;

        const ratingP = document.createElement("p");
        ratingP.className = "rate";
        ratingP.innerHTML = "&#9733;".repeat(feedback.rating); // Renderiza as estrelas

        const authorP = document.createElement("p");
        authorP.textContent = feedback.author;

        feedbackDiv.appendChild(quoteStartP);
        feedbackDiv.appendChild(textP);
        feedbackDiv.appendChild(ratingP);
        feedbackDiv.appendChild(authorP);

        feedbacksSection.appendChild(feedbackDiv);
    })
}