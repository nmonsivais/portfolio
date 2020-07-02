import React from "react";

function Header() {
    return (
        <div>
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

        </div>
    )
}

export default Header;