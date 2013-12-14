// Meh
 
 
API.on(API.VOTE_UPDATE, callback);
 
function callback(obj) {
 
  var vote = obj.vote == 1 ? "woot" : "meh";
 
  if (vote == "meh")  {
        API.chatLog(obj.user.username + " voted " + vote, true);
                        }
}
