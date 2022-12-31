import React from "react";
import phoneImg from "../images/phone.svg";

const Section = () => {
  return (
    <section>
      <div className="section-left">
        <div>
          <h1>Payments infrastructure for the internet</h1>
          <p>
            Millions of companies of all sizes—from startups to Fortune 500s—use
            Stripe’s software and APIs to accept payments, send payouts, and
            manage their businesses online.
          </p>
          <button className="primary-btn">Start now</button>
        </div>
      </div>
      <div className="section-right">
        <img src={phoneImg} alt="img" />
      </div>
    </section>
  );
};

export default Section;
