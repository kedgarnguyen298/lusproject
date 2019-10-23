view.screens.chat = async function () {
    let app = document.getElementById("app")
    app.innerHTML = components.nav + components.chat

    let signOutBtn = document.getElementById("log-out-btn")
    signOutBtn.onclick = signOut

    let formChat = document.getElementById("form-chat")
    formChat.onsubmit = formChatSubmitHandler

    let currentWord = document.getElementById("current-word")
   
    // currentWord.innerText = rand

    console.log(model.currentConversation);
    
    firebase.firestore().collection('waitrooms').where('code','==',model.currentConversation).get().then(function(docs){
        docs.forEach(function(doc){
            //firebase.firestore().collection('waitrooms').doc(doc.id).
            let room = doc.data()
            currentWord.innerText = room.listUsedWords[0];
        });
    });


    firebase.firestore()
        .collection("waitrooms")
        .where("code", "==", model.currentConversation)
        .onSnapshot(function (querySnapshot) {
            // find the room
            let docChanges = querySnapshot.docChanges()
            let room = docChanges[0].doc.data()
            let listPlayerPlaying = room.players
            let playerPlayingPr = document.getElementById("list-player-playing-pr")
            playerPlayingPr.innerHTML = ""
            for (let player of listPlayerPlaying) {
                // create avatar
                let imagePlayer = document.createElement("div")
                imagePlayer.setAttribute("class", "image-player")
                let imageShowPlayer = document.createElement("div")
                imageShowPlayer.setAttribute("class", "image-show-player")
                let img = document.createElement("img")
                img.setAttribute("class", "image-size-player")
                img.setAttribute("src", "../imgs/avata-default-grey.jpg")
                playerPlayingPr.appendChild(imagePlayer)
                imagePlayer.appendChild(imageShowPlayer)
                imageShowPlayer.appendChild(img)

                // create player
                let playerPlaying = document.createElement("div")
                playerPlaying.setAttribute("class", "info-show-player")
                let playerPlayingName = document.createElement("div")
                playerPlayingName.setAttribute("class", "info-show-name-player")
                playerPlayingPr.appendChild(playerPlaying)
                playerPlaying.appendChild(playerPlayingName)
                let namePlayer = document.createTextNode(player)
                playerPlayingName.appendChild(namePlayer)

                document.createElement("br")

            }
        })


    firebase.firestore()
        .collection("waitrooms")
        .where("code", "==", model.currentConversation)
        .onSnapshot(function (querySnapshot) {
            // find the room
            let docChanges = querySnapshot.docChanges()
            let room = docChanges[0].doc.data()
            let listUsedWords = room.listUsedWords
            let html = ``
            for(let word of listUsedWords){
                html += `<div class="word-info"><span>${word}</span></div>`
            }
            document.getElementById('list-used-words').innerHTML = html;
            document.getElementById('current-word').innerHTML = listUsedWords[listUsedWords.length - 1];
        })


    // currentWord.innerText = rand

    async function formChatSubmitHandler(e) {
        e.preventDefault()

        let input = document.getElementById("input-content")
        let currentWord = document.getElementById("current-word")
        let messageContent = formChat.message.value.trim()
        currentWord.innerText = messageContent

         firebase.firestore()
            .collection("waitrooms")
            .where("code", "==", model.currentConversation)
            .onSnapshot(function (querySnapshot) {
                // find the room
                let docChanges = querySnapshot.docChanges()
                let room = docChanges[0].doc.data()
                let listWords = room.listWords
                let roomID = docChanges[0].doc.id

                 firebase.firestore()
                    .collection("waitrooms")
                    .doc(roomID)
                    .update({
                        listUsedWords: firebase.firestore.FieldValue.arrayUnion(messageContent)
                    })

                let listUsedWords = document.getElementById("list-used-words")
                listUsedWords.innerHTML = ""
                for (let word of room.listUsedWords) {
                    let usedWordInfo = document.createElement("div")
                    usedWordInfo.setAttribute("class", "word-info")
                    // let text = document.createTextNode(currentWord.innerText)
                    let text = document.createTextNode(word)
                    let span = document.createElement("span")
                    span.appendChild(text)
                    usedWordInfo.appendChild(span)
                    listUsedWords.appendChild(usedWordInfo)
                }

            })

        input.value = ""
    }



    function signOut() {
        firebase.auth().signOut()
    }
}