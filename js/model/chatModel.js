model.saveConversations = function (conversations) {
    model.conversations = conversations
}

model.saveCurrentConversation = function (conversation) {
    model.currentConversation = conversation
}

model.updateConversation = function (conversation) {
    let foundIndex = model.conversations.findIndex(function (ele) {
        return ele.id == conversation.id
    })
    if (foundIndex >= 0) {
        model.conversations[foundIndex] = conversation
    } else {
        model.conversations.push(conversation)
    }
}