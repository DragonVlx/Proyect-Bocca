import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-register',
    template: `
    <section class="register-section">
    <div class="register-img-box">
        <img src="assets/img-register-bg-2.jpg" alt="">
    </div>
    <div class="register-box">
        <div class="register-form">
            <h2>register</h2>
            <form>
                <div class="register-input">
                    <span>User Name</span>
                    <input placeholder="Your name of hacker" type="text" name="">
                </div>
                <div class="register-input">
                    <span>Password</span>
                    <input placeholder="Please no 12345" type="password">
                </div>
                <div class="register-input">
                    <span>Your email</span>
                    <input placeholder="Your email" type="email">
                </div>
                <a class="register-button"  routerLink="/content">get started</a>
            </form>
            <div class="google">
                <a href="">register with google</a>
                <i class="fab fa-google"></i>
            </div>
        </div>
    </div>
</section>
  `,
    styles: [
    ]
})
export class RegisterComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

}
