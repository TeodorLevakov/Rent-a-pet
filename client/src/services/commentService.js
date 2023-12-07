import * as requester from '../lib/request';

const baseUrl = 'http://localhost:3030/jsonstore/comments';

export const getAll = async (articleId) => {
    const query = new URLSearchParams({
        where: `articleId="${articleId}"`
    });
    const result = await requester.get(`${baseUrl}`);

    return Object.values(result).filter(c => c.articleId === articleId);
}

export const create = async (articleId, user, text) => {
    const newComment = await requester.post(baseUrl, {
        articleId,
        user,
        text
    });

    return newComment;
}

