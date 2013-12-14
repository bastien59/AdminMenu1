API.on(API.CHAT_COMMAND, callback);
 
        function callback(value) {
                if (value=='/getfan') {
                        users=API.getUsers();
                        var len=users.length
                        for(var i=0;i<len;++i){
                        if (users[i].relationship=='1') {
                                API.chatLog(users[i].username + " est fan de vous")
                                                      }
                        else if (users[i].relationship=='3') {
                                API.chatLog(users[i].username + " est fan de vous, vous êtes fan de lui")
                                                      }
                                                   
                                                }
                                 }
                         }
