import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-content',
    template: `
    <p>
    <header class="header-section">
    <div class="navbar">
        <div class="logo">
            <h2>Bocca Software</h2>
        </div>
        <ul class="nav-links" id="mobile-menu">
            <li><a href="">Contest</a></li>
            <li><a href="">Options</a></li>
            <li><a href="../../../index.html">Log Out</a></li>
        </ul>
        <div class="hamburguer">
            <i class="fas fa-bars"></i>
        </div>
    </div>

    <section class="content">
        <h2>Welcome To Bocca,Ready to Programing?</h2>
        <p class="content-text-1"> Register to participate
        </p>
        <div class="buttons">
            <a  routerLink="/login" class="btn btn-1">Login</a>
            <a  routerLink="/register" class="btn btn-2">register</a>
        </div>
    </section>
</header>

<div class="header-categories">
    <h2>Last Notices</h2>
    <div class="sub-text">
        Last notices of bocca tecnology and programming
    </div>
</div>
<section class="categories">


    <div class="covers">
        <div class="cover-1">
            <div class="cover-grad"></div>
            <div class="cover-text">
                <div class="sub-title">Meet new opportunities</div>
                <h3>22-04-2021</h3>
            </div>
        </div>

        <div class="cover-2">
            <div class="cover-grad"></div>
            <div class="cover-text">
                <div class="sub-title">Learn new techniques</div>
                <h3>16-06-2021</h3>
            </div>
        </div>

        <div class="cover-3">
            <div class="cover-grad"></div>
            <div class="cover-text">
                <div class="sub-title">Connect with new developers</div>
                <h3>16-05-2021</h3>
            </div>
        </div>

        <div class="cover-4">
            <div class="cover-grad"></div>
            <div class="cover-text">
                <div class="sub-title">Win and travel to your future</div>
                <h3>1-10-2021</h3>
            </div>
        </div>
        <div class="cover-5">
            <div class="cover-grad"></div>
            <div class="cover-text">
                <div class="sub-title">Learn new strategys for new arquitecture</div>
                <h3>24-09-2021</h3>
            </div>
        </div>
        <div class="cover-6">
            <div class="cover-grad"></div>
            <div class="cover-text">
                <div class="sub-title">Meet new Friends!!!</div>
                <h3>09-08-2021</h3>
            </div>
        </div>

    </div>
</section>

<footer class="footer">
    <div class="footer-container">
        <div class="footer-lists">
            <ul>
                <li class="list-head">RULES</li>
                <li><a href="#">Support</a></li>
                <li><a href="#">Rules</a></li>
                <li><a href="#">Terms and Conditions</a></li>
                <li><a href="#">Companies</a></li>
            </ul>
            <ul>
                <li class="list-head">BENEFITS</li>
                <li><a href="#">Universities</a></li>
                <li><a href="#">Credits</a></li>
                <li><a href="#">Becas and sponsorship</a></li>
            </ul>
            <ul>
                <li class="list-head">About Us</li>
                <li><a href="#">Supports students and competitors</a></li>
                <li><a href="#">Steps to contract sponsoring a contestant</a></li>
                <li><a href="#">Terms and agreements of the labor agreements</a></li>
            </ul>
        </div>
    </div>
</footer>
  `,
    styles: [
    ]
})
export class ContentComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

}
