export default function Login() {
    return (
        <section className="contact_section layout_padding-top">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-5 offset-md-1">
                        <div className="form_container">
                            <div className="heading_container">
                                <img src="images/heading-img.png" alt="" />
                                <h2>Login</h2>
                                
                            </div>
                            <form action="">
                                <div>
                                    <input type="email" id="email" name="email" placeholder="Email" />
                                </div>
                                <div>
                                    <input type="password" id="password" name="password" placeholder="Password" />
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