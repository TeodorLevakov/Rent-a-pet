const baseUrl = 'http://localhost:3030/jsonstore';

export const create = async (articleData) => {
    const response = await fetch(`${baseUrl}/articles`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(articleData)
    });

    const result = await response.json();

    return result;
}