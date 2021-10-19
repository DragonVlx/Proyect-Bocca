import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-login',
    template: `
  <section class="login-section">
  <div class="login-img-box">
      <img src="assets/img1.jpg" alt="bocca-img">
  </div>
  <div class="login-box">
      <div class="login-form">
          <h2>login</h2>
          <form>
              <div class="login-input">
                  <span>User Name</span>
                  <input placeholder="Your Gmail or Account" type="text" name="">
              </div>
              <div class="login-input">
                  <span>Password</span>
                  <input placeholder="Your Password" type="password">
              </div>
              <div class="remember">
                  <label><input type="checkbox">Remember your credentials</label>
              </div>

              <a class="login-button" routerLink="/content">Sig In</a>

              <div class="login-input">
                  <p>You dont have account?<a href="#">register</a></p>
              </div>
          </form>
      </div>
  </div>
</section>
  `,
    styles: [
    ]
})
export class LoginComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

}
