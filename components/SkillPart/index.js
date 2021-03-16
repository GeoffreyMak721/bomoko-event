import React from "react";

export default function index() {
  return (
    <section id="skill" className="skill-area pt-170">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-7 col-md-10 mx-auto">
            <div className="section-title text-center">
              <h2 className="mb-15 wow fadeInUp" data-wow-delay=".2s">
                Bomoko Academie
              </h2>
              <p className="wow fadeInUp" data-wow-delay=".4s">
                Notre engagement envers les participants:
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="single-skill wow fadeInUp" data-wow-delay=".2s">
              <div className="skill-icon">
                <i className="lni lni-pencil-alt"></i>
              </div>
              <div className="skill-content">
                {/*  <h4>Entreprenariat</h4> */}
                <p>
                  Faciliter l'accès à la création d'entreprise pour tous et
                  mobiliser tous les talents;
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="single-skill wow fadeInUp" data-wow-delay=".4s">
              <div className="skill-icon">
                <i className="lni lni-grid-alt"></i>
              </div>
              <div className="skill-content">
                {/* <h4>Large Collection</h4> */}
                <p>
                  Privilégier un cadre juridique et fiscal qui favorise
                  l'investissement productif tourné vers le long terme et la
                  prise de risque;
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="single-skill wow fadeInUp" data-wow-delay=".6s">
              <div className="skill-icon">
                <i className="lni lni-certificate"></i>
              </div>
              <div className="skill-content">
                {/*  <h4>Certified Instructors</h4> */}
                <p>
                  Donner la priorité aux petites et moyennes entreprises dans la
                  mise en oeuvre du "choc de simplification".
                </p>
              </div>
            </div>
          </div>

          <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="single-skill wow fadeInUp" data-wow-delay=".6s">
              <div className="skill-icon">
                <i className="lni lni-certificate"></i>
              </div>
              <div className="skill-content">
                {/*  <h4>Certified Instructors</h4> */}
                <p>
                  Sensibiliser tous les jeunes à l'esprit d'initiative et
                  l'innovation;
                </p>
              </div>
            </div>
          </div>

          <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="single-skill wow fadeInUp" data-wow-delay=".6s">
              <div className="skill-icon">
                <i className="lni lni-certificate"></i>
              </div>
              <div className="skill-content">
                {/*  <h4>Certified Instructors</h4> */}
                <p>
                  Construire une offre d'accompagnement personnalisé et inscrite
                  dans la durée, mettant plus particulièrement l'accent sur le
                  soutien à l'entrepreneur;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
