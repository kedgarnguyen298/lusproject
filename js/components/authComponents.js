components.register = `
<section class="page-container">
<div id="leaf-drop"></div>
<h3 class="form-header">
  <span>LUS Game</span>
</h3>
<div class="pr-form-container">
  <form class="form-container" id="reg-form">
    <div class="form-content">
      <!-- input.. -->
      <div class="name-wrapper">
        <div class="input-wrapper">
          <input type="text" name="firstname" placeholder="Firstname ...">
          <div id="firstname-error" class="message-error"></div>
        </div>
        <div class="input-wrapper">
          <input type="text" name="lastname" placeholder="Lastname ...">
          <div id="lastname-error" class="message-error"></div>
        </div>
      </div>
      <div class="input-wrapper">
        <input type="email" name="email" placeholder="Email ...">
        <div id="email-error" class="message-error"></div>
      </div>
      <div class="input-wrapper">
        <input type="password" name="password" placeholder="Password ...">
        <div id="password-error" class="message-error"></div>
      </div>
      <div class="input-wrapper">
        <input type="password" name="confirmPassword" placeholder="Confirm password ...">
        <div id="confirm-password-error" class="message-error"></div>
      </div>
    </div>
    <div id="register-error" class="message-error"></div>
    <div id="register-success" class="message-success"></div>
    <div class="form-footer">
      <!-- link + button -->
      <a id="reg-link" href="#">Already have an account? Log in</a>
      <button type="submit" id="reg-submit-btn">Register</button>
    </div>
  </form>
</div>
</section>
`

components.login = `
    <section class="page-container">
        <div id="leaf-drop"></div>
            <h3 class="form-header">
            <span>LUS Game</span>
            </h3>
            <div class="pr-form-container">
            <form class="form-container" id="login-form">
                <div class="form-content">
                <!-- input.. -->
                <div class="input-wrapper">
                    <input type="email" name="email" placeholder="Email">
                    <div id="email-error" class="message-error"></div>
                </div>
                <div class="input-wrapper">
                    <input type="password" name="password" placeholder="Password">
                    <div id="password-error" class="message-error"></div>
                </div>
                <div id="log-in-error" class="message-error"></div>
                </div>
                <div class="form-footer">
                <!-- link + button -->
                <a href="#" id="login-link">Not yet have an account? Register</a>
                <button type="submit" id="log-submit-btn">Log in</button>
                </div>
            </form>
        </div>
    </section>
`