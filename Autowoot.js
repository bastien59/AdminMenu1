API.chatLog("Running admin commands by xBastien59", true);
API.chatLog("---------------------------------");
API.chatLog("Commandes:");
API.chatLog("/pjhelp  Affiche les commandes");
API.chatLog("/autowoot  Active l'autowoot");
API.chatLog("/sayhello Bonjour à l'utilisateur qui arrive sur la room");
API.chatLog("/getid  Avoir l'id d'une personne");
API.chatLog("/getfan Affiche tout vos fans");
API.chatLog("/score  Score actuel de la room");
API.chatLog("/afk  Passe le statut en afk");
API.chatLog("/skip  Skip le dj");
API.chatLog("/time  Donne le temps depuis que la musique est lancée");
API.chatLog("Ajouter stop devant la commande pour stop la répétition (exemple: /stopsayhello, ne marche pas pour autowoot)");
API.chatLog("---------------------------------");
API.chatLog("Fonctions: ");
API.chatLog("Donne les utilisateur qui quitte et rejoins");
API.chatLog("Donne les personnes qui meh");
API.chatLog("Avertissement s'il y a une musique interdite");
API.chatLog("Liste emoji");
// Commande

API.on(API.CHAT_COMMAND, pjhelp);

function pjhelp(value) {

  if (value=='/pjhelp') {
API.chatLog("Commandes:");
API.chatLog("/autowoot  Active l'autowoot");
API.chatLog("/sayhello Bonjour à l'utilisateur qui arrive sur la room");
API.chatLog("/getid  Avoir l'id d'une personne");
API.chatLog("/getfan Affiche tout vos fans");
API.chatLog("/score  Score actuel de la room");
API.chatLog("/afk  Passe le statut en afk");
API.chatLog("/skip  Skip le dj");
API.chatLog("/time  Donne le temps depuis que la musique est lancée");
API.chatLog("Ajouter stop devant la commande pour stop la répétition (exemple: /stopsayhello, ne marche pas pour autowoot)");
API.chatLog("---------------------------------");
API.chatLog("Fonctions: ");
API.chatLog("Donne les utilisateur qui quitte et rejoins");
API.chatLog("Donne les personnes qui meh");
API.chatLog("Liste emoji");
}
}

// Autowoot

API.on(API.CHAT_COMMAND, callback);

	function callback(value) {
		if (value=='/autowoot') {
			API.chatLog('Autowoot activé');
			$("#woot").click();
			aw();
				     }
				}

function aw() {
	API.on(API.DJ_ADVANCE, callback);
	function callback(obj) { 
		$("#woot").click() 
				}
		}
		    
