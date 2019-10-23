controller.initAuth = async function () {
    view.displayScreen('loading')
    firebase.auth().onAuthStateChanged(authStateChangedHandler)

    function authStateChangedHandler(user) {
        if (user && user.emailVerified) {
            model.authenticated(user)
            view.displayScreen('select')
        } else {
            view.displayScreen('register')
        }
    }
}

controller.addUser = async function (regInfo) {
    let email = regInfo.email
    let password = regInfo.password
    let displayName = regInfo.firstname + " " + regInfo.lastname

    let regBtn = document.getElementById("reg-submit-btn")
    regBtn.setAttribute("disabled", true)

    try {
        view.setText('register-error', '')
        view.setText('register-success', '')

        await firebase.auth().createUserWithEmailAndPassword(email, password)
        firebase.auth().currentUser.updateProfile({
            displayName: displayName
        })
        await firebase.auth().currentUser.sendEmailVerification()

        view.setText('register-success', 'An confirm link has been sended to your email address!')
    } catch (err) {
        view.setText('register-error', err.message)
    }

    regBtn.removeAttribute("disabled")

}

controller.logIn = async function (logInInfo) {
    // 1. sign in user with email & password
    // 2. if correct email & password & email verified >> log in success
    // 3. else >> log in failed
    let email = logInInfo.email
    let password = logInInfo.password
    let btnSubmit = document.getElementById('log-submit-btn')

    view.setText('log-in-error', '')
    btnSubmit.setAttribute('disabled', true)
    try {
        let result = await firebase.auth().signInWithEmailAndPassword(email, password)
        if (!result.user || !result.user.emailVerified) {
            throw new Error('Must verify email!')
        }
    } catch (err) {
        console.error(err)
        view.setText('log-in-error', err.message)
        btnSubmit.removeAttribute('disabled')
    }
}