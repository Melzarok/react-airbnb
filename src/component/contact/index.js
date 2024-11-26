import "./index.css";
import React from "react";

export default function Contact({ data }) {
  return (
    <div className=" container">
      <div className="contact">
        <img
          src={data.image}
          height={80}
          width={80}
          className="contact__image"
          alt="avatar"
        />
        <div className="contact__container">
          <h1 className="contact__text">Господар - {data.name}</h1>
          <div className="contact__sub-block">
            <span className="contact__sub-value">{data.phone} </span>

            <span className="contact__sub-value">{data.response_time}</span>

            <span className="contact__sub-value">
              {data.response_rate}% response rate
            </span>
          </div>
        </div>
      </div>
      <p className="contact__info">{data.info}</p>
    </div>
  );
}
