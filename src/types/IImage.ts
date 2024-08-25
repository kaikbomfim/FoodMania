// Interface para descrever a URL de uma imagem
interface Url {
    raw: string; // URL da imagem em formato bruto
}

// Interface para representar um resultado de busca de imagem
interface Result {
    urls: Url; // URLs associadas à imagem
}

// Interface para representar a resposta da busca de imagens
export interface IImage {
    results: Result[]; // Lista de resultados com URLs das imagens
}
