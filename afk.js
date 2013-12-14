// Status
 
 
API.on(API.CHAT_COMMAND, callback);
 
        function callback(value) {
                if (value=='/afk') {
                        API.setStatus(AFK)
                        bye();
                                     }
                                 }
function bye() {
        API.sendChat("Je suis AFK, a+ :D")
