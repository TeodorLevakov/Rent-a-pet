import { useEffect, useState } from "react";
import * as articleService from "../../services/articleService";
import ArticleItem from "./article-Item/ArticleItem";




export default function Articles() {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        articleService.getAll()
            .then(result => setArticles(result));
    }, []);

    console.log(articles);
    return (
        <section className="client_section layout_padding">
            <div className="container">
                {/* <div className="heading_container">
                    <img src="/images/heading-img.png" alt="" />
                    <h2>What Says Our Customer</h2>
                    <p>
                        It is a long established fact that a reader will be distracted by the
                    </p>
                </div> */}
                <div
                    id="carouselExampleControls"
                    className="carousel slide"
                    data-ride="carousel"
                >
                    <div >
                       
                       {articles.map(a => <ArticleItem key={a._id} {...a}/>)}

                       {articles.length === 0 && (<h3>No articles available</h3>)}

                    </div>
                    {/* <div className="carousel_btn-box">
                        <a
                            className="carousel-control-prev"
                            href="#carouselExampleControls"
                            role="button"
                            data-slide="prev"
                        >
                            <span className="sr-only">Previous</span>
                        </a>
                        <a
                            className="carousel-control-next"
                            href="#carouselExampleControls"
                            role="button"
                            data-slide="next"
                        >
                            <span className="sr-only">Next</span>
                        </a>
                    </div> */}
                </div>
            </div>
        </section>
    );
}