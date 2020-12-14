import React, { Component } from "react";
import Img from "gatsby-image";
import { Link } from "gatsby";
import moment from "moment";

export default class Blogs extends Component {
  render() {
    const { data, num } = this.props;
    return (
      <div className="blogs-section section" id="Blogs">
        <div className="container">
          <div className="section-head">
            <h2>分享文章</h2>
          </div>
          <ul
            className={`blogs-list ${(data.edges) < 5 ? "few-blogs" : ""}`}
          >
            {data.edges.map((item, index) => {
              if (index % 2 === 0) {
                return (
                  <li key={index} className="item">
                    <div className="inner">
                      <Link className="link" to={item.node.slug} />
  
                      {item.node.featureImage ? (
                        <Img
                          fixed={item.node.featureImage.fluid}
                          objectFit="cover"
                          objectPosition="50% 50%"
                        />
                      ) : (
                        <div className="no-image"></div>
                      )}
                      <div className="details">
                        <h3 className="title">{item.node.title}</h3>
                        <span className="date">
                          {/* <i className="fas fa-calendar-alt"></i>{" "} */}
                          {moment(item.node.createdAt).format("LL")}
                        </span>
                      </div>
                    </div>
                  </li>
                );
              }
            })}
          </ul>
          {<div className="see-more">
            <Link to="/blogs">
              <span>更多分享</span>
            </Link>
          </div>}
        </div>
      </div>
    );
  }
}
