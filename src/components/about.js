import React from "react";
import Img from "gatsby-image";
import styled from "styled-components";

const AvatarContainer = styled.div`
background: red;
`

const Header = ({ data }) => (
  <div className="about section" id="About">
    <div className="container">
      <div className="section-head">
        <h2>ABOUT ME</h2>
      </div>
      <div className="about-main row">
        <div className="left col-md-5 col-lg-4 mb-3">
          <Img
            fixed={data.photo.fluid}
            objectFit="cover"
            objectPosition="top center"
          />
        </div>
        <div className="left col-md-7 col-lg-8">
          <div className="about-details">
            <h1>邱泊瑜</h1>
            <h3>
              {data.designation}
            </h3>
            <div
              dangerouslySetInnerHTML={{
                __html: data.description.childMarkdownRemark.html
              }}
            />
            <ul className="details">
              <li>
                <strong>山齡</strong>
                <p>六年</p>
              </li>
              <li>
                <strong>經歷</strong>
                <p>曾任政治大學登山隊兩任隊長、路線研發、安全委員、探勘領隊</p>
              </li>
              <li>
                <strong>登山經驗</strong>
                <p>中亞吉爾吉斯列寧峰、法國科西嘉島全段、雪季南湖、雪季八大秀、黑黑谷上西巒<br/>關門古道接七彩湖丹大、霞喀羅探佐藤駐在所、戒茂斯上新康橫斷<br/>一日武陵三秀、一日雪主東、一日志佳陽、一日屏風<br/>中央山脈大縱走（42天）</p>
              </li>
              <li>
                <strong>聯繫方式</strong>
                <p>
                  <a href={`mailto:${data.gmail}`}>{data.gmail}</a>
                </p>
              </li>
            </ul>
            {/* <div className="socials">
              <ul>
                <li>
                  <a
                    className="fab fa-facebook-f"
                    href={data.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                  ></a>
                </li>
                <li>
                  <a
                    className="fab fa-medium"
                    href={data.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  ></a>
                </li>
                <li>
                  <a
                    className="fab fa-linkedin-in"
                    href={data.linkdin}
                    target="_blank"
                    rel="noopener noreferrer"
                  ></a>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Header;
