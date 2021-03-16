import React from "react";

export default function FooterPart() {
  return (
    <footer id="footer" className="footer-area pt-170">
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-3 col-md-6">
            <div className="footer-widget">
              <a href="index.html" className="logo d-blok">
                <img src="assets/images/logo.svg" alt="" />
              </a>
              <p>
                Réunir les chrétiens pour lutter contre les divisions, les
                conflits en favorisant un travail collectif par l'organisation
                et la production des événements.
              </p>
            </div>
          </div>
          <div className="col-xl-2 col-lg-2 offset-xl-1 offset-lg-1 col-md-6">
            <div className="footer-widget">
              <h5>Liens Rapide</h5>
              <ul>
                <li>
                  <a href="javascript:void(0)">Accueill</a>
                </li>
                <li>
                  <a href="javascript:void(0)">Video</a>
                </li>
                <li>
                  <a href="javascript:void(0)">Blog</a>
                </li>
                <li>
                  <a href="javascript:void(0)">Contact</a>
                </li>
              </ul>
            </div>
          </div>
          {/*  <div className="col-xl-2 col-lg-2 col-md-6">
            <div className="footer-widget">
              <h5>Our Course</h5>
              <ul>
                <li>
                  <a href="javascript:void(0)">Design</a>
                </li>
                <li>
                  <a href="javascript:void(0)">Development</a>
                </li>
                <li>
                  <a href="javascript:void(0)">Marketing</a>
                </li>
                <li>
                  <a href="javascript:void(0)">SEO Design</a>
                </li>
              </ul>
            </div>
          </div> */}
          <div className="col-xl-3 col-lg-3 col-md-6">
            <div className="footer-widget">
              <h5>Nos Coordonées</h5>
              <ul>
                <li>
                  <p>Téléphone: +243 828 052 988</p>
                </li>
                <li>
                  <p>Email: contact@bomoko-event.com</p>
                </li>
                <li>
                  <p>143 Gombe</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-credit">
          <div className="row">
            <div className="col-md-6">
              <div className="copy-right text-center text-md-left">
                <p>
                  Dévelopé par{" "}
                  <a href="https://mbokart-concept.net" rel="nofollow">
                    Mbok'art Concept
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="footer-social">
                <ul className="d-flex justify-content-md-end justify-content-center">
                  <li>
                    <a href="javascript:void(0)">
                      <i className="lni lni-facebook-filled"></i>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <i className="lni lni-twitter-filled"></i>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <i className="lni lni-instagram-filled"></i>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <i className="lni lni-linkedin-original"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
