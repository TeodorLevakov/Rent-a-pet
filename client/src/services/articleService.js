import { request } from "../lib/request";

const baseUrl = 'http://localhost:3030/jsonstore/articles';

export const getAll = async () => {
    const result = await request('GET', baseUrl);

    return Object.values(result);
};

export const create = async (articleData) => {
    const response = await fetch(base, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(articleData)
    });

    const result = await response.json();

    return result;
}