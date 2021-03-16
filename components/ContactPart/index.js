import React from "react";

export default function ContactPart() {
  return (
    <section id="contact" className="contact-area">
      <div className="map-bg">
        <img src="/images/map-bg.svg" alt="" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-5 col-lg-5">
            <div className="section-title">
              <h2 className="wow fadeInUp" data-wow-delay=".2s">
                Entrez en Contact
              </h2>
              <p className="wow fadeInUp" data-wow-delay=".4s">
                Avez-vous des questions ou d'autres préoccupations ? entrez en
                contact avec nous pour un eclaircissement.
              </p>
            </div>
            <div className="contact-content">
              <h3>Appelez-nous 24/7</h3>
              <h4>
                <a href="javascript:void(0)">+243 828 052 988</a>
              </h4>
              <h4>
                <a href="javascript:void(0)">contact@bomoko-event.com</a>
              </h4>
            </div>
          </div>
          <div className="col-xl-7 col-lg-7">
            <div className="contact-form-wrapper">
              <form action="assets/contact.php">
                <div className="row">
                  <div className="col-md-6">
                    <input
                      type="text"
                      placeholder="Nom"
                      name="name"
                      id="name"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="email"
                      placeholder="Email"
                      name="email"
                      id="email"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <input
                      type="text"
                      placeholder="Sujet"
                      name="subject"
                      id="subject"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <textarea
                      name="message"
                      id="message"
                      rows="4"
                      placeholder="Message"
                    ></textarea>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 text-right">
                    <button className="main-btn btn-hover" type="submit">
                      Envoyer
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
