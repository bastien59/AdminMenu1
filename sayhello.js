// Hello
 
API.on(API.CHAT_COMMAND, callback);
        function callback(value) {
                if (value=='/sayhello') {
                        sayhello();
                        API.chatLog("Sayhello activé");
                                     }
                else if (value=='/stopsayhello') {
                        API.off(API.USER_JOIN, callback);
                        API.chatLog("Sayhello désactivé");
                }
                }
 
function sayhello() {
        API.on(API.USER_JOIN, callback);
        function callback(user) {
                API.sendChat("Bonjour " + "@" + user.username + " :+1:")
}
}
