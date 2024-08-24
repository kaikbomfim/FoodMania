interface Url {
    raw: string;
}

interface Result {
    urls: Url
}

export interface IImage {
    results: Result[]
}
