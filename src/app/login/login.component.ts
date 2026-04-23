import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  template: `
    <section class="login-page">
      <h1>Login</h1>
      <p>Angular 19 standalone app is ready.</p>
    </section>
  `,
  styles: [
    `
      .login-page {
        display: grid;
        gap: 0.75rem;
        place-items: center;
        min-height: 100vh;
        text-align: center;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {}
