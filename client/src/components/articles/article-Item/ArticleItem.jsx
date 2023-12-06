export default function ArticleItem({
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
                    <img src="images/quote.png" alt="" />
                </div>
            </div>
        </div>
    );
}