// Utilisateur quitte
 
API.on(API.USER_LEAVE, callback);
 
function callback(user) {
 
  API.chatLog(user.username + " quitte la salle", true);
 
}
