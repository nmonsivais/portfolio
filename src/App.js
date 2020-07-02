import React from 'react';


function App() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-secondary fixed-top" id="mainNav">
        <div class="container"><a class="navbar-brand js-scroll-trigger" href="#page-top">TRO Code</a>
          <button class="navbar-toggler navbar-toggler-right font-weight-bold bg-primary text-white rounded"
            type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive"
            aria-expanded="false" aria-label="Toggle navigation">Menu <i class="fas fa-bars"></i></button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                href="#portfolio">PORTFOLIO</a>
              </li>
              <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                href="#about">ABOUT</a>
              </li>
              <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                href="#contact">CONTACT</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
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
      <section class="page-section portfolio" id="portfolio">
        <div class="container">
          {/* <!-- Portfolio Section Heading--> */}
          <div class="text-center">
            <h2 class="page-section-heading text-secondary mb-0 d-inline-block">PORTFOLIO</h2>
          </div>
          {/* <!-- Icon Divider--> */}
          <div class="divider-custom">
            <div class="divider-custom-line"></div>
            <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
            <div class="divider-custom-line"></div>
          </div>
          {/* <!-- Portfolio Grid Items--> */}
          <div class="row justify-content-center">
            {/* <!-- Portfolio Items--> */}
            <div class="col-md-6 col-lg-4 mb-5">
              <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal0">
                <div
                  class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div class="portfolio-item-caption-content text-center text-white"><i
                    class="fas fa-plus fa-3x"></i></div>
                </div><img class="img-fluid" src="assets/img/witterexample.png"
                  alt="Witter Website Login Page" />
              </div>
            </div>
            <div class="col-md-6 col-lg-4 mb-5">
              <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal1">
                <div
                  class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div class="portfolio-item-caption-content text-center text-white"><i
                    class="fas fa-plus fa-3x"></i></div>
                </div><img class="img-fluid" src="assets/img/weatherapp.png" alt="Hurricane image" />
              </div>
            </div>
            <div class="col-md-6 col-lg-4 mb-5">
              <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal2">
                <div
                  class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div class="portfolio-item-caption-content text-center text-white"><i
                    class="fas fa-plus fa-3x"></i></div>
                </div><img class="img-fluid" src="assets/img/xonebrosblogs.png" alt="Image of a Blog" />
              </div>
            </div>
            <div class="col-md-6 col-lg-4 mb-5">
              <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal3">
                <div
                  class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div class="portfolio-item-caption-content text-center text-white"><i
                    class="fas fa-plus fa-3x"></i></div>
                </div><img class="img-fluid" src="assets/img/monsiyoutubechannel.png"
                  alt="Mr Monsivais's YouTube Channel Art" />
              </div>
            </div>
            <div class="col-md-6 col-lg-4 mb-5">
              <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal4">
                <div
                  class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div class="portfolio-item-caption-content text-center text-white"><i
                    class="fas fa-plus fa-3x"></i></div>
                </div><img class="img-fluid" src="assets/img/coderefactoring.png"
                  alt="Image of computer code." />
              </div>
            </div>
            <div class="col-md-6 col-lg-4 mb-5">
              <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal5">
                <div
                  class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div class="portfolio-item-caption-content text-center text-white"><i
                    class="fas fa-plus fa-3x"></i></div>
                </div><img class="img-fluid" src="assets/img/libations.png"
                  alt="Image of the login page for a website called Libations." />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Portfolio Modal--> */}
      <div class="portfolio-modal modal fade" id="portfolioModal0" tabindex="-1" role="dialog"
        aria-labelledby="#portfolioModal0Label" aria-hidden="true">
        <div class="modal-dialog modal-xl" role="document">
          <div class="modal-content">
            <button class="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"><i
              class="fas fa-times"></i></span></button>
            <div class="modal-body text-center">
              <div class="container">
                <div class="row justify-content-center">
                  <div class="col-lg-8">
                    {/* <!-- Portfolio Modal - Title--> */}
                    <h2 class="portfolio-modal-title text-secondary mb-0">Witter</h2>
                    {/* <!-- Icon Divider--> */}
                    <div class="divider-custom">
                      <div class="divider-custom-line"></div>
                      <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                      <div class="divider-custom-line"></div>
                    </div>
                    {/* <!-- Portfolio Modal - Image--> */}
                    <a href="https://nakinojay.herokuapp.com/"
                      target="_blank"><img class="img-fluid rounded mb-5"
                        src="assets/img/witterexample.png" alt="Log Cabin" /></a>
                    {/* <!-- Portfolio Modal - Text--> */}
                    <p class="mb-5">Witter is a website that replicates Twitter. In this website, users are
                    can post and read their "Wits" as well as those posted by others. Passport was used
                    to allow users to have unique logins and have their passwords encrypted. Click on
                    the image to visit the app.
                                </p>
                    <button class="btn btn-primary" href="#" data-dismiss="modal"><i
                      class="fas fa-times fa-fw"></i>Close Window</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" role="dialog"
        aria-labelledby="#portfolioModal1Label" aria-hidden="true">
        <div class="modal-dialog modal-xl" role="document">
          <div class="modal-content">
            <button class="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"><i
              class="fas fa-times"></i></span></button>
            <div class="modal-body text-center">
              <div class="container">
                <div class="row justify-content-center">
                  <div class="col-lg-8">
                    {/* <!-- Portfolio Modal - Title--> */}
                    <h2 class="portfolio-modal-title text-secondary mb-0">Weather App</h2>
                    {/* <!-- Icon Divider--> */}
                    <div class="divider-custom">
                      <div class="divider-custom-line"></div>
                      <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                      <div class="divider-custom-line"></div>
                    </div>
                    {/* <!-- Portfolio Modal - Image--> */}
                    <a href="https://nmonsivais.github.io/weatherdashboard/"
                      target="_blank"><img class="img-fluid rounded mb-5" src="assets/img/weatherapp.png"
                        alt="Image of a hurricane" /></a>
                    {/* <!-- Portfolio Modal - Text--> */}
                    <p class="mb-5">In the weather app, users can type a city and look up the weather for
                    that city. Several cities can be looked up and local storage will allow them look at
                    previous searches. Click on the image to open the weather app.
                                </p>
                    <button class="btn btn-primary" href="#" data-dismiss="modal"><i
                      class="fas fa-times fa-fw"></i>Close Window</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="portfolio-modal modal fade" id="portfolioModal2" tabindex="-1" role="dialog"
        aria-labelledby="#portfolioModal2Label" aria-hidden="true">
        <div class="modal-dialog modal-xl" role="document">
          <div class="modal-content">
            <button class="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"><i
              class="fas fa-times"></i></span></button>
            <div class="modal-body text-center">
              <div class="container">
                <div class="row justify-content-center">
                  <div class="col-lg-8">
                    {/* <!-- Portfolio Modal - Title--> */}
                    <h2 class="portfolio-modal-title text-secondary mb-0">Blogs</h2>
                    {/* <!-- Icon Divider--> */}
                    <div class="divider-custom">
                      <div class="divider-custom-line"></div>
                      <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                      <div class="divider-custom-line"></div>
                    </div>
                    {/* <!-- Portfolio Modal - Image--> */}
                    <a
                      href="https://www.xonebros.com/blog/2018/3/14/xbox-game-pass-excitement-and-concerns"
                      target="_blank"><img class="img-fluid rounded mb-5"
                        src="assets/img/xonebrosblogs.png" alt="Image of a blog." /></a>
                    {/* <!-- Portfolio Modal - Text--> */}
                    <p class="mb-5">Because of my love of gaming and my English educator background, I was
                    hired to write a blog for a podcast
                    website called, "XoneBros." Here is a sample of one of my articles. Click on the
                    image to read the blog.
                                </p>
                    <button class="btn btn-primary" href="#" data-dismiss="modal"><i
                      class="fas fa-times fa-fw"></i>Close Window</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="portfolio-modal modal fade" id="portfolioModal3" tabindex="-1" role="dialog"
        aria-labelledby="#portfolioModal3Label" aria-hidden="true">
        <div class="modal-dialog modal-xl" role="document">
          <div class="modal-content">
            <button class="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"><i
              class="fas fa-times"></i></span></button>
            <div class="modal-body text-center">
              <div class="container">
                <div class="row justify-content-center">
                  <div class="col-lg-8">
                    {/* <!-- Portfolio Modal - Title--> */}
                    <h2 class="portfolio-modal-title text-secondary mb-0">Video Editing</h2>
                    {/* <!-- Icon Divider--> */}
                    <div class="divider-custom">
                      <div class="divider-custom-line"></div>
                      <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                      <div class="divider-custom-line"></div>
                    </div>
                    {/* <!-- Portfolio Modal - Image--> */}
                    <a
                      href="https://www.youtube.com/watch?v=OUwVNN8ZXBI&t=6s" target="_blank"><img
                        class="img-fluid rounded mb-5" src="assets/img/monsiyoutubechannel.png"
                        alt="Mr. Monsivais's YouTube Channel Art" /></a>
                    {/* <!-- Portfolio Modal - Text--> */}
                    <p class="mb-5">With the skills I've acquired over time, I have created several
                    successful YouTube videos. Here is an example of a video created and edited by me
                    for students and teachers to use during remote teaching because of the pandemic.
                    Click on the image to see the short YouTube video.
                                </p>
                    <button class="btn btn-primary" href="#" data-dismiss="modal"><i
                      class="fas fa-times fa-fw"></i>Close Window</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="portfolio-modal modal fade" id="portfolioModal4" tabindex="-1" role="dialog"
        aria-labelledby="#portfolioModal4Label" aria-hidden="true">
        <div class="modal-dialog modal-xl" role="document">
          <div class="modal-content">
            <button class="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"><i
              class="fas fa-times"></i></span></button>
            <div class="modal-body text-center">
              <div class="container">
                <div class="row justify-content-center">
                  <div class="col-lg-8">
                    {/* <!-- Portfolio Modal - Title--> */}
                    <h2 class="portfolio-modal-title text-secondary mb-0">Backend Employee Tracker</h2>
                    {/* <!-- Icon Divider--> */}
                    <div class="divider-custom">
                      <div class="divider-custom-line"></div>
                      <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                      <div class="divider-custom-line"></div>
                    </div>
                    {/* <!-- Portfolio Modal - Image--> */}
                    <a href="https://github.com/nmonsivais/employee_tracker"
                      target="_blank"><img class="img-fluid rounded mb-5"
                        src="assets/img/coderefactoring.png" alt="Image that shows computer code" /></a>
                    {/* <!-- Portfolio Modal - Text--> */}
                    <p class="mb-5">Part of being a fullstack web developer involves not only working on the
                    front end but also the back end of websites. This is an example of a backend app
                    that allows the user to create, read, update, and delete (CRUD) employees, salaries,
                    positions, and managers to a mock company. Clicking on the image will take you to
                    the git repository that includes a GIF demo and instructions on how to install the
                    app.
                                </p>
                    <button class="btn btn-primary" href="#" data-dismiss="modal"><i
                      class="fas fa-times fa-fw"></i>Close Window</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="portfolio-modal modal fade" id="portfolioModal5" tabindex="-1" role="dialog"
        aria-labelledby="#portfolioModal5Label" aria-hidden="true">
        <div class="modal-dialog modal-xl" role="document">
          <div class="modal-content">
            <button class="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"><i
              class="fas fa-times"></i></span></button>
            <div class="modal-body text-center">
              <div class="container">
                <div class="row justify-content-center">
                  <div class="col-lg-8">
                    {/* <!-- Portfolio Modal - Title--> */}
                    <h2 class="portfolio-modal-title text-secondary mb-0">Libations Site</h2>
                    {/* <!-- Icon Divider--> */}
                    <div class="divider-custom">
                      <div class="divider-custom-line"></div>
                      <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                      <div class="divider-custom-line"></div>
                    </div>
                    {/* <!-- Portfolio Modal - Image--> */}
                    <a href="https://nmonsivais.github.io/libations2.0/"
                      target="_blank"><img class="img-fluid rounded mb-5" src="assets/img/libations.png"
                        alt="Image of the login page for a website called Libations." /></a>
                    {/* <!-- Portfolio Modal - Text--> */}
                    <p class="mb-5">This website was created with a group remotely. The user can type a city
                    name and it will allow them to find the local breweries and of that city as well as
                    report the weather to check if it's a good time to go out. If they
                    want to look up previous visited bars, users can go back to their previous searches.
                    Click on the image to visit the site.
                                </p>
                    <button class="btn btn-primary" href="#" data-dismiss="modal"><i
                      class="fas fa-times fa-fw"></i>Close Window</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
