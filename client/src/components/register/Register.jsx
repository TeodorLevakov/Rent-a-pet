export default function Register() {
    return (
        <section className="contact_section layout_padding-top">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-5 offset-md-1">
                        <div className="form_container">
                            <div className="heading_container">
                                <img src="images/heading-img.png" alt="" />
                                <h2>Request A Call Back</h2>
                                <p>
                                    It is a long established fact that a reader will be distracted by
                                    the
                                </p>
                            </div>
                            <form action="">
                                <div>
                                    <input type="text" placeholder="Full Name " />
                                </div>
                                <div>
                                    <input type="text" placeholder="Phone number" />
                                </div>
                                <div>
                                    <input type="email" placeholder="Email" />
                                </div>
                                <div>
                                    <input
                                        type="text"
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