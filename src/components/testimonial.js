import React, { Component } from "react";
import Slider from "react-slick";
import Img from "gatsby-image";
var settings = {
  dots: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  pauseOnHover: true,
  autoplaySpeed: 6000
};

export default class Testimonial extends Component {
  render() {
    const { data, num } = this.props;
    return (
      <div className="slider-section section testimonials" id="Testimonials">
        <div className="container">
          <div className="section-head text-center">
            <h2>山友回饋</h2>
            <p></p>
          </div>
          <Slider {...settings}>
            {data.edges.map((item, index) => {
              if (index < num / 2) {
                return (
                  <div key={index} className="testimonials-item">
                    <div className="testi-inner">
                      <Img
                        className="avatar"
                        fixed={item.node.avatarImage.fluid}
                        objectFit="cover"
                        objectPosition="50% 50%"
                      />
                      <div
                        dangerouslySetInnerHTML={{
                          __html: item.node.description.childMarkdownRemark.html
                        }}
                      />
                      <h3 className="name">{item.node.name}</h3>
                      <span className="sub-name">{item.node.subTitle}</span>
                    </div>
                  </div>
                );
              }
            })}
          </Slider>
        </div>
      </div>
    );
  }
}
