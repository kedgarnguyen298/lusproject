controller.createAction = async function (roomCode, player) {
    let code = roomCode.textContent
    let playerName = player.displayName
    let playerList = []
    let listWords = ["xe đạp", "hoa quả", "màu đỏ", "con chó", "nhà cửa", "cánh đồng", "con trâu"]
    let rand = listWords[Math.floor(Math.random() * listWords.length)]
    let listUsedWords = [rand]

    playerList.push(playerName)
    await firebase.firestore()
        .collection("waitrooms")
        .add({
            code: code,
            players: playerList,
            isStarted: false,
            listUsedWords: listUsedWords,
            listWords: listWords
        })
        .then(function () {
            console.log("Document successfully written!");
        })
        .catch(function (error) {
            console.error("Error writing document: ", error);
        });
}

controller.joinAction = async function (inputCodeValue, playerName) {

    firebase.firestore()
        .collection("waitrooms")
        .get()
        .then(function (querySnapshot) {
            querySnapshot.forEach(async function (doc) {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data().code);
                if (inputCodeValue != doc.data().code) {
                    view.setText("input-error", "Invalid pincode!")
                    console.log(doc.id, "success")
                } else {
                    let idDoc = doc.id
                    console.log(idDoc, "false")

                    firebase.firestore()
                        .collection("waitrooms")
                        .doc(idDoc)
                        .update({
                            players: firebase.firestore.FieldValue.arrayUnion(playerName)
                        })

                    await firebase.firestore()
                        .collection("waitrooms")
                        .where("code", "==", inputCodeValue)
                        .onSnapshot(function (querySnapshot) {
                            // console.log(querySnapshot.docChanges())
                            let docChanges = querySnapshot.docChanges()
                            // for (docChange of docChanges) {
                            //     return docChange.doc.data()
                            // }
                            let room = docChanges[0].doc.data()
                            let ul = document.getElementById("list-player")
                            ul.innerHTML = ""
                            for (let p of room.players) {
                                let li = document.createElement("li")

                                let liText = document.createTextNode(p)
                                li.appendChild(liText)
                                ul.appendChild(li)
                            }

                            if (room.isStarted) {
                                model.addCurrentConversation(inputCodeValue)
                                view.displayScreen("chat")
                            }
                        })
                                     
                    view.displayScreen("wait")
                    let roomCode = document.getElementById("room-code")
                    roomCode.innerText = inputCodeValue
                    
                    let startBtn = document.getElementById("start-btn")
                    startBtn.hidden = true
                }
            });
        });

}