view.screens.register = function () {
  let app = document.getElementById("app")
  app.innerHTML = components.nav + components.register

  let regForm = document.getElementById("reg-form")
  regForm.onsubmit = formSubmitHandler

  let link = document.getElementById("reg-link")
  link.onclick = linkSubmitHandler

  view.initFalling()

  function linkSubmitHandler() {
    view.displayScreen("login")
  }

  function formSubmitHandler(event) {
    event.preventDefault()

    let regInfo = {
      firstname: regForm.firstname.value,
      lastname: regForm.lastname.value,
      email: regForm.email.value,
      password: regForm.password.value,
      confirmPassword: regForm.confirmPassword.value
    }
    let validateResult = [
      view.validate(regInfo.firstname, validators.stringRequire
        , 'firstname-error', 'Invalid firstname!'),
      view.validate(regInfo.lastname
        , validators.stringRequire, 'lastname-error', 'Invalid lastname!'),
      view.validate(regInfo.email, validators.email
        , 'email-error', 'Invalid email!'),
      view.validate(regInfo.password, validators.password
        , 'password-error', 'Invalid password!'),
      view.validate(regInfo.confirmPassword, function (confirmPassword) {
        return confirmPassword != '' && confirmPassword == regInfo.password
      }, 'confirm-password-error', 'Invalid confirm password!'),

    ]
    if (allPassed(validateResult)) {
      // submit
      controller.addUser(regInfo)
    }

  }
}

view.screens.login = function () {
  let app = document.getElementById("app")
  app.innerHTML = components.nav + components.login

  let link = document.getElementById("login-link")
  link.onclick = linkClickHandler

  let form = document.getElementById("login-form")
  form.onsubmit = formSubmitHandler

  view.initFalling()

  function formSubmitHandler(event) {
    event.preventDefault()
    let logInInfo = {
      email: form.email.value,
      password: form.password.value
    }

    let validateResult = [
      view.validate(logInInfo.email, validators.email, 'email-error', 'Invalid email!'),
      view.validate(logInInfo.password, validators.password, 'password-error', 'Invalid password!')
    ]

    if (allPassed(validateResult)) {
      controller.logIn(logInInfo)
    }
  }

  function linkClickHandler() { 
    view.displayScreen("register")
  }

}

view.initFalling = function () {
  var falling = true;

  TweenLite.set("#leaf-drop", { perspective: 600 })
  TweenLite.set("img", { xPercent: "-50%", yPercent: "-50%" })

  var total = 30;
  var container = document.getElementById("leaf-drop"), w = window.innerWidth, h = window.innerHeight;

  for (i = 0; i < total; i++) {
    var Div = document.createElement('div');
    TweenLite.set(Div, { attr: { class: 'leaf' }, x: R(0, w), y: R(-200, -150) });
    container.appendChild(Div);
    animm(Div);
  }

  function animm(elm) {
    TweenMax.to(elm, R(6, 15), { y: h + 100, ease: Linear.easeNone, repeat: -1, delay: -15 });
    TweenMax.to(elm, R(4, 8), { x: '+=100', rotationZ: R(0, 180), repeat: -1, yoyo: true, ease: Sine.easeInOut });
    TweenMax.to(elm, R(2, 8), { rotationX: R(0, 360), rotationY: R(0, 360), repeat: -1, yoyo: true, ease: Sine.easeInOut, delay: -5 });
  };

  function R(min, max) { return min + Math.random() * (max - min) };
}