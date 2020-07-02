import React from 'react';
import Portfolio from "./components/portfoliosection";
import Navbar from "./components/navbar"

function App() {
  return (
    <div>

      <Navbar />

      <header class="masthead bg-primary text-white text-center">
        <div class="container d-flex align-items-center flex-column">
          {/* <!-- Masthead Avatar Image--> */}
          <img class="masthead-avatar mb-5" src="assets/img/trocode.png" alt="" />
          {/* <!-- Masthead Head</img>ing--> */}
          <h1 class="masthead-heading mb-0">Noe &quot;Tro&quot; Monsivais</h1>
          {/* <!-- Icon Divider--> */}
          <div class="divider-custom divider-light">
            <div class="divider-custom-line"></div>
            <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
            <div class="divider-custom-line"></div>
          </div>
          {/* <!-- Masthead Subheading--> */}
          <p class="pre-wrap masthead-subheading font-weight-light mb-0">Educator - Web Designer - Video Editor</p>
        </div>
      </header>
      <Portfolio />

      <section class="page-section bg-primary text-white mb-0" id="about">
        <div class="container">
          {/* <!-- About Section Heading--> */}
          <div class="text-center">
            <h2 class="page-section-heading d-inline-block text-white">ABOUT</h2>
          </div>
          {/* <!-- Icon Divider--> */}
          <div class="divider-custom divider-light">
            <div class="divider-custom-line"></div>
            <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
            <div class="divider-custom-line"></div>
          </div>
          {/* <!-- About Section Content--> */}
          <div class="row">
            <div class="col-lg-4 ml-auto">
              <p class="aboutClass">I have worked as an educator for over 12 years, but my passion is in coding
              and video editing. If you need a fullstack web developer, a presenter who can do his own
              editing, or a trainer to educate your team on a subject, I'm your guy.
                    </p>
            </div>
            <div class="col-lg-4 mr-auto">
              <p class="aboutClass"> Feel free to check out my portfolio and reach out to me if you have any
                        questions on any of my projects.</p>
            </div>
          </div>
        </div>
      </section>
      <section class="page-section" id="contact">
        <div class="container">
          {/* <!-- Contact Section Heading--> */}
          <div class="text-center">
            <h2 class="page-section-heading text-secondary d-inline-block mb-0">CONTACT</h2>
          </div>
          {/* <!-- Icon Divider--> */}
          <div class="divider-custom">
            <div class="divider-custom-line"></div>
            <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
            <div class="divider-custom-line"></div>
          </div>
          {/* <!-- Contact Section Content--> */}
          <div class="row justify-content-center">
            <div class="col-lg-4">
              <div class="d-flex flex-column align-items-center">
                <div class="icon-contact mb-3"><i class="fas fa-mobile-alt"></i></div>
                <div class="text-muted">Phone</div><a class="lead font-weight-bold"
                  href="tel:956-655-3046">(956) 655-3046</a>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="d-flex flex-column align-items-center">
                <div class="icon-contact mb-3"><i class="far fa-envelope"></i></div>
                <div class="text-muted">Email</div><a class="lead font-weight-bold"
                  href="mailto:Noe.Monsivais@gmail.com">Noe.Monsivais@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer class="footer text-center">
        <div class="container">
          <div class="row">
            {/* <!-- Footer Location--> */}
            <div class="col-lg-4 mb-5 mb-lg-0">
              <h4 class="mb-4">Mailing Address</h4>
              <p class="lead mb-0">395 Millwood Dr
              BLDG F,
                        Nashville TN, 37217</p>
            </div>
            {/* <!-- Footer Social Icons--> */}
            <div class="col-lg-4 mb-5 mb-lg-0">
              <h4 class="mb-4">AROUND THE WEB</h4><a class="btn btn-outline-light btn-social mx-1"
                href="https://www.twitter.com/mrmonsi" target="_blank"><i
                  class="fab fa-fw fa-twitter"></i></a><a class="btn btn-outline-light btn-social mx-1"
                    href="https://www.linkedin.com/in/nmonsivais" target="_blank"><i
                      class="fab fa-fw fa-linkedin-in"></i></a>
            </div>
            {/* <!-- Footer About Text--> */}
            <div class="col-lg-4">
              <h4 class="mb-4">What is TRO?</h4>
              <p class=" lead mb-0">TRO is
              short for "True, Respectful, Original." I believe we should all be true to
                        ourselves, respectful to others, and original in our collaborations.</p>
            </div>
          </div>
        </div>
      </footer>
      {/* <!-- Copyright Section--> */}
      <section class="copyright py-4 text-center text-white">
        <div class="container"><small class="pre-wrap">Copyright © Tro Code 2020 </small></div>
      </section>
      {/* <!-- Scroll to Top Button (Only visible on small and extra-small screen sizes)--> */}
      <div class="scroll-to-top d-lg-none position-fixed"><a
        class="js-scroll-trigger d-block text-center text-white rounded" href="#page-top"><i
          class="fa fa-chevron-up"></i></a></div>
    </div>
  );
}

export default App;
