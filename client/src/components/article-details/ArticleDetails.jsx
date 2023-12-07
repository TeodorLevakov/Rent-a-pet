import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as gameService from '../../services/articleService';
import * as commentService from '../../services/commentService';



export default function ArticleDetails() {
    const { articleId } = useParams();
    const [article, setArticle] = useState({});
    const [comments, setComments] = useState([]);

    useEffect(() => {
        gameService.getOne(articleId)
            .then(setArticle);

        commentService.getAll()
            .then(setComments);
    }, [articleId]);

    const addCommentHandler = async (e) => {
        e.preventDefault();

        const data = new FormData(e.currentTarget);

        try {
            const newComment = await commentService.create(articleId, data.get('user'), data.get('comment'));
            console.log(newComment);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <section id="game-details">
            <h1>Game Details</h1>
            <div className="info-section">
                <div className="game-header">
                    <img className="game-img" src={article.imageUrl} />
                    <h1>{article.name}</h1>
                    {/* <span className="levels">MaxLevel: {game.maxLevel}</span> */}
                    <p className="type">{article.category}</p>
                </div>

                <p className="text">{article.message}</p>

                <div className="details-comments">
                    <h2>Comments:</h2>
                    {comments.map(({_id, user, text}) => (
                        <li key={_id} className="comment">
                            <p>{user}: {text}</p>
                        </li>
                    ))}

                    {comments.length === 0 && (
                        <p className="no-comment">No comments.</p>
                    )}
                    {/* <ul>
                        {comments.map(({ _id, text, owner: { email } }) => (
                            <li key={_id} className="comment">
                                <p>{email}: {text}</p>
                            </li>
                        ))}
                    </ul> */}   	

                    {/* {comments.length === 0 && (
                        <p className="no-comment">No comments.</p>
                    )} */}
                </div>

                {/* <!-- Edit/Delete buttons ( Only for creator of this game )  -->
                <div className="buttons">
                    <a href="#" className="button">Edit</a>
                    <a href="#" className="button">Delete</a>
                </div> */}
            </div>

            <article className="create-comment">
                <label>Add new comment:</label>
                <form className="form" onSubmit={addCommentHandler}>
                    <input type="text" name="user" placeholder="user" />
                    <textarea name="comment" placeholder="Comment......"></textarea>
                    <input className="btn submit" type="submit" value="Add Comment" />
                </form>
            </article>
        </section>
    );
}