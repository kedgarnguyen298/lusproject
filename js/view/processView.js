view.screens.select = function () {
    let app = document.getElementById("app")
    app.innerHTML = components.nav + components.select

    let createBtn = document.getElementById("create-btn")
    createBtn.onclick = createClickHandler

    let joinBtn = document.getElementById("join-btn")
    joinBtn.onclick = joinClickHandler

    let userWelcome = document.getElementById("user-welcome")
    userWelcome.innerText = "Hello, " + model.authUser.displayName

    let signOutBtn = document.getElementById("log-out-btn")
    signOutBtn.onclick = signOut

    view.initFalling()

    function createClickHandler() {
        view.displayScreen("wait")
        create()
    }

    function joinClickHandler() {
        view.displayScreen("join")
    }
}

view.screens.wait = function () {
    let app = document.getElementById("app")
    app.innerHTML = components.nav + components.wait

    let userWelcome = document.getElementById("user-welcome")
    userWelcome.innerText = "Hello, " + model.authUser.displayName

    let signOutBtn = document.getElementById("log-out-btn")
    signOutBtn.onclick = signOut
}

view.screens.join = function () {
    let app = document.getElementById("app")
    app.innerHTML = components.nav + components.join

    let form = document.getElementById("form-input-code")
    form.onsubmit = formSubmitHandler

    let userWelcome = document.getElementById("user-welcome")
    userWelcome.innerText = "Hello, " + model.authUser.displayName

    let playerName = model.authUser.displayName

    let signOutBtn = document.getElementById("log-out-btn")
    signOutBtn.onclick = signOut

    view.initFalling()

    function formSubmitHandler(e) {
        e.preventDefault()

        let inputCode = form.inputCode
        let inputCodeValue = inputCode.value

        let validateResult = [
            view.validate(inputCodeValue, validators.stringRequire, 'input-error', 'Invalid pin code!'),
        ]

        if (allPassed(validateResult)) {
            controller.joinAction(inputCodeValue, playerName)
        }

    }
}

async function create() {
    let roomCode = document.getElementById("room-code")
    roomCode.innerText = randomCodeRoom()

    let player = model.authUser
    // let player = model.authUser

    view.initFalling()

    
    model.addCurrentConversation(roomCode.innerText)

    controller.createAction(roomCode, player)
    await firebase.firestore()
        .collection("waitrooms")
        .where("code", "==", roomCode.innerText)
        .onSnapshot(function (querySnapshot) {
            // console.log(querySnapshot.docChanges())
            let docChanges = querySnapshot.docChanges()
            // for (docChange of docChanges) {
            //     return docChange.doc.data()
            // }
            let roomID = docChanges[0].doc.id
            let startBtn = document.getElementById("start-btn")
            startBtn.onclick = function() {
                startGameHandler(roomID)
            }
            

            let room = docChanges[0].doc.data()
            let ul = document.getElementById("list-player")
            ul.innerHTML = ""
            for (let p of room.players) {
                let li = document.createElement("li")

                let liText = document.createTextNode(p)
                li.appendChild(liText)
                ul.appendChild(li)
            }


        })
    


    function randomCodeRoom() { // min and max included 
        return Math.floor(Math.random() * (99999 - 10000 + 1) + 10000)
    }

    function startGameHandler (roomID) { 
        firebase.firestore()
        .collection("waitrooms")
        .doc(roomID).update({
            isStarted: true,
        })

        view.displayScreen("chat")

    }

}   

function signOut() {
    firebase.auth().signOut()
}
// async function test () {
//     let code = "30919"
//     // let result = await firebase.firestore()
//     //                     .collection("waitrooms")
//     //                     .where("code", "==", code)
//     //                     .get()
//     firebase.firestore()
//                         .collection("waitrooms")
//                         .where("code", "==", code)
//                         .onSnapshot(handler)

//     function handler(snapshot) {
//         console.log('handler run')
//     }
// }