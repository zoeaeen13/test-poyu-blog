import React, { Component } from "react";
import styled from "styled-components";

const FooterDiv = styled.div`
  padding: 10px;
  background: transparent;
  text-align:center;
  color:#4A4A4A;
  font-size: 14px;
`;

export default function footer() {
  return (
      <FooterDiv>
        <div className="container">
          <span>Copyright ©2020 Poyu Chiu All rights reserved.</span>
        </div>
      </FooterDiv>
  )
}
