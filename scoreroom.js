// Score de la room
 
API.on(API.CHAT_COMMAND, callback);
 
        function callback(value) {
                if (value=='/score') {
                        API.chatLog("Woot: " + API.getRoomScore().positive + " Meh: " + API.getRoomScore().negative + " Grab: " + API.getRoomScore().curates)
                                     }
                                 }
