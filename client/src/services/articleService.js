import * as request from "../lib/request";

const baseUrl = 'http://localhost:3030/jsonstore/articles';

export const getAll = async () => {
    
    const result = await request.get(baseUrl);

    return Object.values(result);
};

export const getOne = async (id) => {
    const result = await request.get(`${baseUrl}/${id}`);
    console.log(result);
    return result;
};

export const create = async (articleData) => {

    const result = await request.post(baseUrl, articleData);
        
    return result;
};
