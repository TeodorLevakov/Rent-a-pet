export default function About() {
    return (
        <section className="about_section layout_padding">
        <div className="container">
          <div className="detail-box">
            <div className="heading_container">
              <img src="images/heading-img.png" alt="" />
              <h2>About Us</h2>
            </div>
            <p>
              It is a long established fact that a reader will be distracted by the
              readable content of a page when looking at its layout. The point of
              using Lorem Ipsum is that it has a more-or-less normal distribution of
              letters,
            </p>
            <div className="btn-box">
              <a href="">
                <span>Read More</span>
                <img src="images/link-arrow.png" alt="" />
              </a>
            </div>
          </div>
        </div>
      </section>       
    );
}