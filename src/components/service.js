import React, { Component } from "react";

export default class service extends Component {
  render() {
    const { data, num } = this.props;
    return (
      <div className="service section" id="Service">
        <div className="container">
          <div className="section-head">
            <h2>登山諮詢服務</h2>
          </div>
          <div className="row">
            {data.edges.map((item, index) => {
              if (index < num/2) {
                return (
                  <div key={index} className="col-md-4 mb-3">
                    <div className="service-main">
                      <h3>{item.node.title}</h3>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: item.node.description.childMarkdownRemark.html
                        }}
                      />
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    );
  }
}
