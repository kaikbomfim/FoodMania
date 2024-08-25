import { createIcons, Menu, X, Carrot, Search } from 'lucide';

// Função para configurar e criar os ícones
const icons = () => {
    return createIcons({
        icons: {
            Menu,
            X,
            Carrot,
            Search
        }
    })
}

// Inicializa os ícones no início
icons();

// Seleciona o contêiner de navegação e o contêiner de ícones
const navbar = document.querySelector(".navbar");
const navIconContainer = document.querySelector(".nav-icon-container");

// Adiciona um ouvinte de evento para alternar o menu ao clicar no ícone
navIconContainer?.addEventListener("click", () => {
    // Alterna a classe 'show-menu' para mostrar/ocultar o menu
    navbar?.classList.toggle("show-menu");

    // Seleciona o ícone atual para alternar entre 'menu' e 'X'
    const currentIcon = navIconContainer?.querySelectorAll("svg")[1];

    // Alterna o ícone entre 'menu' e 'X'
    if (currentIcon?.getAttribute("data-lucide") === "menu") {
        currentIcon?.setAttribute("data-lucide", "X");
    } else if (currentIcon?.getAttribute("data-lucide") === "X") {
        currentIcon?.setAttribute("data-lucide", "menu")
    }

    // Recria os ícones após a troca
    return icons();
});