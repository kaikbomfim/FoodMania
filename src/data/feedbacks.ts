import { IFeedback } from "../types/IFeedback";

// Array de feedbacks com informações sobre comentários, avaliações e autores
export const feedbacks: IFeedback[] = [
    {
        text: "Nunca pensei que ia entender tanto sobre nutrição. FoodMania tá de parabéns!", // Texto do feedback
        rating: 4, // Avaliação do feedback em uma escala de 1 a 5
        author: "David Santana", // Autor do feedback
    },
    {
        text: "Achei tudo o que eu precisava pra minha dieta. O site é show de bola!",
        rating: 5,
        author: "Bruno Braga",
    },
    {
        text: "Muito bom, encontrei várias dicas e receitas saudáveis. Recomendo demais!",
        rating: 5,
        author: "Sara Silva",
    },
];