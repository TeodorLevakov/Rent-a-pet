export default function Register() {
    return (
        <section className="contact_section layout_padding-top">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-5 offset-md-1">
                        <div className="form_container">
                            <div className="heading_container">
                                <img src="images/heading-img.png" alt="" />
                                <h2>Register</h2>
                                <p>
                                    
                                </p>
                            </div>
                            <form action="">
                                <div>
                                    <input type="text" placeholder="User Name " />
                                </div>
                                <div>
                                    <input type="email" placeholder="Email" />
                                </div>
                                <div>
                                    <input type="text" placeholder="Password" />
                                </div>
                                <div>
                                    <input type="text" placeholder="Repeat  Password" />
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