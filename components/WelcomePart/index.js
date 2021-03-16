import React from "react";

export default function WelcomePart() {
  return (
    <section className="welcome-area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6">
            <div className="welcome-content">
              <div className="section-title">
                <h2 className="mb-35 wow fadeInUp" data-wow-delay=".2s">
                  You are using free lite version of Learn
                </h2>
              </div>
              <div className="content">
                <p className="mb-35 wow fadeInUp" data-wow-delay=".4s">
                  Please purchase full version of the template to get all pages,
                  sections, features and permission to remove footer credits.
                </p>

                <a
                  href="https://rebrand.ly/learn-ud"
                  rel="nofollow"
                  className="read-more-btn wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  Purchase Now <i className="lni lni-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="welcome-img">
              <img src="/images/welcome-img.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
