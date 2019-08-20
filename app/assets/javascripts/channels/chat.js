App.chat = App.cable.subscriptions.create("ChatChannel", {
  connected: function() {
    console.log("Connected To the Chat Channel")
  },
  disconnected: function() {
    console.log("DisConnected From the Chat Channel")
  },
  received: function(data) {
    var messages = $("#chatbox");
    messages.append(data["message"]);
    messages.scrollTop(messages[0].scrollHeight);
  }
});
