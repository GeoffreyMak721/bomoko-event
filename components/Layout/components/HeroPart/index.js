import React from "react";

export default function HeroPart() {
  return (
    <section id="home" className="hero-area bg_cover">
      <div className="container d-flex">
        <div className="mx-auto text-center">
          <div className="hero-content">
            <h2 className="mb-30 wow fadeInUp" data-wow-delay=".2s">
              Bomoko Event-Official
            </h2>
            <p className="wow fadeInUp" data-wow-delay=".4s">
              Réunir les chrétiens pour lutter contre les divisions, les
              conflits en favorisant un travail collectif par l'organisation et
              la production des événements.
            </p>
            <div className="hero-btns">
              <a
                href="#courses"
                className="main-btn wow fadeInUp"
                data-wow-delay=".6s"
              >
                Courses
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-left">
        <img src="/images/hero-img.jpg" alt="" />
        <img src="/images/dot-shape.svg" alt="" className="shape" />
      </div>
    </section>
  );
}
