API.on(API.CHAT_COMMAND, callback);
 
        function callback(value) {
                if (value=='/getid') {
                        var Uname=prompt("Enter Username");
                        users=API.getUsers();
                        var len=users.length
                        for(var i=0;i<len;++i){
                        if (users[i].username==Uname) {
                                API.chatLog(Uname+" ID "+users[i].id)
                                                      }
                                                   
                                                }
                                 }
                         }
