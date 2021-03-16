import React from "react";

export default function TeamPart() {
  return (
    <section id="mentors" className="team-area pt-170 pb-140">
      <div className="welcome-content text-center">
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
            className="main-btn wow fadeInUp"
            data-wow-delay=".5s"
          >
            Purchase Now <i className="lni lni-arrow-right"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
