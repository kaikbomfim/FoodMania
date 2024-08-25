import { createIcons, Menu, X, Carrot, Search } from 'lucide';

// Configura os ícones que serão usados
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

// Inicializa os ícones escolhidos
icons();

const navbar = document.querySelector(".navbar");
const navIconContainer = document.querySelector(".nav-icon-container");

navIconContainer?.addEventListener("click", () => {
    navbar?.classList.toggle("show-menu");

    const currentIcon = navIconContainer?.querySelectorAll("svg")[1];

    if (currentIcon?.getAttribute("data-lucide") === "menu") {
        currentIcon?.setAttribute("data-lucide", "X");
    } else if (currentIcon?.getAttribute("data-lucide") === "X") {
        currentIcon?.setAttribute("data-lucide", "menu")
    }

    return icons();

});