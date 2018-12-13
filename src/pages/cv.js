import React from 'react'
import Layout from '../components/layout'
// Import typefaces
//import 'typeface-montserrat'
//import 'typeface-merriweather'

class Cv extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <div className="container">
          <div className="row start-sm start-md start-lg hero_text">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-10 ">
              <h1>CV</h1>
            </div>
          </div>

          <section className="post-list row">
            <article className="lab-post col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div className="card">
                <div className="card-content">
                  <h1 />
                </div>
              </div>

              <div className="post_content">
                <div className="cv-label-container">
                  <p className="label-1">Erfarenhet</p>
                  <div className="cv-description-wrapper">
                    <div className="cv-description">
                      <h2>Idag</h2>
                      <h3>Ux-design och webbutveckling</h3>
                      <small className="role-description">
                        2018 - Pågående
                      </small>
                      <p>
                        Jag designar och bygger webbplatser med JAMstacken
                        vilket är modern webbutvecklingsarkitektur baserad på
                        Javascript, återanvändbara API's, och markup. Snabbare
                        än din wordpress site. Specfikt använder jag mig av
                        Gatsby JS.
                      </p>
                    </div>

                    <div className="cv-description">
                      <h3>Assistans för dig</h3>
                      <small className="role-description">
                        sep 2017 - Pågående
                      </small>

                      <p>
                        Vid sidan av mina studier har jag arbetat 70% som
                        personlig assistent.
                      </p>
                    </div>

                    <div className="cv-description">
                      <h2>2Conciliate</h2>
                      <small className="role-description">
                        Interaktionsdesigner. Jun 2017 - Aug 2017
                      </small>
                      <p>
                        {' '}
                        Jag genomförde en omfattande utvärdering av 2conciliates
                        modelleringsverktyg “2c8”. Jag genomförde bland annat
                        användartester och intervjuade användare av
                        modelleringsverktyget för att kartlägga användbarheten.
                        Jag stod även för rådgivning av framtida
                        användarcentrerade arbetsmetoder.
                      </p>
                    </div>

                    <div className="cv-description">
                      <h2>Soleil It</h2>
                      <small className="role-description">
                        Webbutvecklare. Apr 2016 - Jun 2016
                      </small>
                      <p>
                        Jag arbetade med HTML, CSS och Javascript. Mitt team
                        arbetade enligt Scrum med tillhörande sprint-leveranser
                        till bland annat Örebro kommun.
                      </p>
                    </div>
                  </div>

                  <div className="cv-description-wrapper">
                    <p className="label-1">Utbildning</p>
                    <div className="cv-description">
                      <h2>Magister i Interaktionsdesign </h2>
                      <small className="role-description">
                        Karlstad Universitet. Jan 2017 - paus.
                      </small>
                      <p>
                        30 poäng av magisterprogmmet genomfört. Fördjupade
                        kunskaper i digital produktutveckling, med särskilt
                        fokus på interaktionsdesign. Jag har bland annat läst
                        Co-Design - User Centered Design - Design Thinking.
                      </p>
                    </div>

                    <div className="cv-description-wrapper">
                      <h2>Kandidat i informatik</h2>
                      <small className="role-description">
                        Karlstad Universitet. Aug 2012 - Dec 2015.
                      </small>
                      <p>
                        {' '}
                        Ett program innehållande webbprogrammering, Java och
                        android kombinerat med It-projekt, interaktionsdesign,
                        prototyping och användartester.
                      </p>
                    </div>
                  </div>
                  <div className="cv-description-wrapper">
                    <p className="label-1">Verktyg</p>

                    <h2>Jag jobbar med </h2>
                    <p>- Adobe XD - Figma -</p>
                  </div>
                </div>
              </div>
            </article>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Cv
