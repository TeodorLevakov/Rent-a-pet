export default function ArticleCreate() {
    const createArticleSubmitHandler = (e) => {
        e.preventDefault();

        const articleData = Object.fromEntries(new FormData(e.currentTarget));
        console.log(articleData);
    }


    return (
        <section className="contact_section layout_padding-top">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-5 offset-md-1">
                        <div className="form_container">
                            <div className="heading_container">
                            <img src="images/heading-img.png" alt="" />
                                <h2>Create Article</h2>
                            </div>
                            <form id="create" onSubmit={createArticleSubmitHandler}>
                                <div>
                                    <input type="text" id="name" name="name" placeholder="Animal name " />
                                </div>
                                <div>
                                    <input type="text" id="category" name="category" placeholder="Animal category" />
                                </div>
                                <div>
                                    <input type="text" id="imageUrl" name="imageUrl" placeholder="Animal image" />
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        id="message"
                                        name="message"
                                        className="message-box"
                                        placeholder="Message"
                                    />
                                </div>

                                <div className="d-flex ">
                                    <button>SEND</button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}