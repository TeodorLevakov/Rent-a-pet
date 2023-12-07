import { Link } from "react-router-dom";

export default function ArticleItem({
    _id,
    name,
    imageUrl,
    category
}) {
    return (
        <div >
            <div className="box">
                <div className="img-box">
                    <img src={imageUrl} alt="" />
                </div>
                <div className="detail-box">
                    <h4>{name}</h4>
                    <p>{category}</p>
                    <div className="btn-box">
                        <Link to={`/articles/${_id}`}>
                            <span>Read More</span>
                            <img src="images/link-arrow.png" alt="" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}