interface CategoriaAlimentos {
    descricao: string,
}

interface Object {
    categoriaAlimentos: CategoriaAlimentos;
    energiaKcal: number;
    proteina: number;
    carboidrato: number;
    lipidios: number;
    colesterol: number;
    descricao: string;
}

export interface IFood {
    quantity: number
    object: Object[]
}
