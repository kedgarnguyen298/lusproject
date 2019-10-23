const view = {
    screens: {}
}

const validators = {
    stringRequire(str) {
        return str != ''
    },
    email(str) {
        return str != '' && str.includes('@')
    },
    password(str) {
        return str != '' && str.length >= 6
    }
}


view.validate = function (value, validator, idErrorTag, messageError) {
    if (validator(value)) {
        view.setText(idErrorTag, '')
        return true
    } else {
        view.setText(idErrorTag, messageError)
        return false
    }
}

view.setText = function (id, text) {
    document.getElementById(id).innerText = text
}

view.screens.loading = function () {
    let app = document.getElementById('app')
    app.innerHTML = components.loading
}

view.displayScreen = function (name) {
    let screen = view.screens[name]
    if (screen instanceof Function) {
        screen()
    }
}

function allPassed(validateResult) {
    for (let result of validateResult) {
        if (!result) {
            return false
        }
    }
    return true
}
