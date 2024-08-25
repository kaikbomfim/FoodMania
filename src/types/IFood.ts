// Interface para descrever a categoria dos alimentos
interface CategoriaAlimentos {
    descricao: string; // Descrição da categoria dos alimentos
}

// Interface para representar um objeto de alimento
interface Object {
    categoriaAlimentos: CategoriaAlimentos; // Categoria do alimento
    energiaKcal: number | string; // Energia em kcal (calorias)
    energiaKg: number | string; // Energia em kJ (quilojoules)
    proteina: number | string; // Quantidade de proteína
    carboidrato: number | string; // Quantidade de carboidrato
    lipidios: number | string; // Quantidade de lipídios (gorduras)
    colesterol: number | string; // Quantidade de colesterol
    descricao: string; // Descrição do alimento
}

// Interface para representar um alimento com quantidade e lista de objetos
export interface IFood {
    quantity: number; // Quantidade de alimentos
    object: Object[]; // Lista de objetos de alimentos
}
