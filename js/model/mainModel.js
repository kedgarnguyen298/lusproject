const model = {
    authUser: null,
    players: null,
    conversations: null,
    currentConversation: null
}

model.authenticated = function (user) {
    model.authUser = user
}

model.addPlayer = function (player) {
    model.players = player
}

model.addCurrentConversation = function(currentConversation) {
    model.currentConversation = currentConversation
}