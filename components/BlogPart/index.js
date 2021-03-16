import React from "react";

export default function BlogPart() {
  return (
    <section id="blog" className="blog-area pt-170 pb-140">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-7">
            <div className="section-title">
              <h2 className="wow fadeInUp" data-wow-delay=".2s">
                Notre Blog
              </h2>
              <p className="wow fadeInUp" data-wow-delay=".4s">
                Suivez des nouveautées chaque semaine
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="single-blog">
              <div className="blog-img">
                <a href="javascript:void(0)" className="d-block">
                  <img src="/images/blog/blog1.jpg" alt="" />
                </a>
              </div>
              <div className="blog-content">
                <h4>
                  <a href="javascript:void(0)">Ça y est </a>
                </h4>
                <p>
                  Le jeune talentueux Christian KONGA est désormais le premier
                  artiste qui signe un contrat de production avec la structure
                  Bomoko Event...
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="single-blog">
              <div className="blog-img">
                <a href="javascript:void(0)" className="d-block">
                  <img src="/images/blog/blog2.jpg" alt="" />
                </a>
              </div>
              <div className="blog-content">
                <h4>
                  <a href="javascript:void(0)">Hey la famille, </a>
                </h4>
                <p>
                  Ça y es! La date tant entendue de notre événement phare de
                  l'année #Bomoko_académie ! Just Save date et informe à un plus
                  grand nombre de perso…
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="single-blog">
              <div className="blog-img">
                <a href="javascript:void(0)" className="d-block">
                  <img
                    src="/images/blog/blog
                  *
                  3.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div className="blog-content">
                <h4>
                  <a href="javascript:void(0)">
                    Bonjour tout le monde, espèrant que ce message vous trouve
                    bien portant,
                  </a>
                </h4>
                <p>
                  Nous avons enfin décidé sur la ténu de l'activité conférence
                  *Bomoko académie 2021* qui aura lieu très bientôt , réunissant
                  plusieurs autres sous-activités et personnalités. De ce fait
                  merci de partager cette affiche d'annonce dans le but
                  d'atteindre un si grand nombre pour la réussite de ce
                  dernier.…
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
