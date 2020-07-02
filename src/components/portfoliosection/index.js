import React from "react";
import Project from "../project"

function Portfolio() {
    return (
        <div>
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

                        <Project modal="#portfolioModal0" img="assets/img/witterexample.png" altText="Witter Website Login Page" />

                        <Project modal="#portfolioModal1" img="assets/img/weatherapp.png" altText="Hurricane image" />

                        <Project modal="#portfolioModal2" img="assets/img/xonebrosblogs.png" altText="Image of a Blog" />

                        <Project modal="#portfolioModal3" img="assets/img/monsiyoutubechannel.png" altText="Mr Monsivais's YouTube Channel Art" />

                        <Project modal="#portfolioModal4" img="assets/img/coderefactoring.png" altText="Image of computer code." />

                        <Project modal="#portfolioModal5" img="assets/img/libations.png" altText="Image of the login page for a website called Libations." />

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
            <div class="portfolio-modal modal fade" id="portfolioModal5" tabindex="-1" role="dialog" aria-labelledby="#portfolioModal5Label" aria-hidden="true">
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
        </div>

    )
}

export default Portfolio