export default function Us() {
    return (
        <section className="us_section layout_padding-bottom">
            <div className="container">
                <div className="heading_container">
                    <img src="images/heading-img.png" alt="" />
                    <h2>Why Choose Us</h2>
                    <p>
                        It is a long established fact that a reader will be distracted by the
                        readable content of a
                    </p>
                </div>
                <div className="us_container">
                    <div className="box">
                        <div className="img1-box">
                            <img src="images/pet1.png" alt="" />
                        </div>
                        <div className="img2-box">
                            <img src="images/omega.png" alt="" />
                        </div>
                        <div className="detail-box">
                            <h6>PET NUTRITIONISTS</h6>
                        </div>
                    </div>
                    <div className="box">
                        <div className="img1-box">
                            <img src="images/pet2.png" alt="" />
                        </div>
                        <div className="img2-box">
                            <img src="images/dog.png" alt="" />
                        </div>
                        <div className="detail-box">
                            <h6>STANDARDS</h6>
                        </div>
                    </div>
                    <div className="box">
                        <div className="img1-box">
                            <img src="images/pet2.png" alt="" />
                        </div>
                        <div className="img2-box">
                            <img src="images/shield.png" alt="" />
                        </div>
                        <div className="detail-box">
                            <h6>QUALITY &amp; SAFETY</h6>
                        </div>
                    </div>
                </div>
                <div className="btn-box">
                    <a href="">
                        <span>Read More</span>
                        <img src="images/link-arrow.png" alt="" />
                    </a>
                </div>
            </div>
        </section>
    );
}