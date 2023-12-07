import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as gameService from '../../services/articleService';



export default function ArticleDetails() {
    const { articleId } = useParams();
    console.log(articleId);
    const [article, setArticle] = useState({});

    useEffect(() => {
        gameService.getOne(articleId)
            .then(setArticle);
    }, [articleId]);

    return (
        <>
            <h2>{article.name}</h2>
            <h3>{article.category}</h3>
            <h3>{article.message}</h3>
        </>
    );
}