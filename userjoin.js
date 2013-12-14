// Utilisateur rejoins
 
API.on(API.USER_JOIN, callback);
 
function callback(user) {
 
  API.chatLog(user.username + " rejoins la salle");
 
}
