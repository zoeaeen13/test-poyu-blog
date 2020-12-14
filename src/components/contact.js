import React, { Component } from "react";
const BASE_URL = 'https://script.google.com/macros/s/AKfycby7VX0c9yiQnBQG1e2K-O6vCsxehpcLMQTbS1KDMyhWTAWBGXo/exec';

export default class Contact extends Component {
  render() {
    return (
      <div className="contact section" id="Contact">
        <div className="container">
          <div className="section-head">
            <h2 className="text-center">Contact</h2>
          </div>
          <form
            action={BASE_URL}
            name="contact"
            method="POST"
            data-netlify="true"
          >
            <div>
              <label>
                姓名 <input type="text" name="name" required />
              </label>
            </div>
            <div>
              <label>
                聯絡信箱 <input type="email" name="email" required />
              </label>
            </div>
            <div>
              <label>
                留言內容 <textarea name="message" required></textarea>
              </label>
            </div>
            <div>
              <button type="submit">送出</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
