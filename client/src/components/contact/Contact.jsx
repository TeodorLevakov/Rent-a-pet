export default function Contact() {
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
                    <div className="col-md-6 px-0">
                        <div className="map_container">
                            <div className="map-responsive">
                                <iframe
                                    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France"
                                    width={600}
                                    height={300}
                                    frameBorder={0}
                                    style={{ border: 0, width: "100%", height: "100%" }}
                                    allowFullScreen=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}