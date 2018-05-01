const Discord = require('discord.js')
const bot = new Discord.Client()
var state = 0
var arrayMessage = []

bot.on('ready', function () {
    console.log("Je suis connecté !")
	bot.user.setActivity({game: {name: "Manger des Sushis", type: 0}});

})

bot.login('NDQwNjIwOTgxMTQ1NTY3MjQy.DckbqQ.rueYLHeLf6YxQoNouin2ZEfl0OM');

bot.on('guildMemberAdd', member => {
    member.addRole('440617324492488705').then(console.log).catch(console.error);
    arrayMessage["id-"+member.id] = 5;

});

/*bot.on('message', message => {
    message.channel.send("Bonjour ! Je suis Yumiki ! :fox:");
    message.channel.send("-----------------------------");
    message.channel.send("Je suis un bot, qui sera amélioré au fur et a mesure du temps ! Pour le moment je m'occupe de la vérification !");
    message.channel.send("Afin d'entrer dans ce serveur, il y a quelques règles a respecter ! A savoir :");
    message.channel.send("-----------------------------");
    message.channel.send("1 - Ce channel est réservé aux joueurs de la guilde Apachee, il est interdit d'ajouter d'autres membres (Sauf si une demande a été faites auprès de mon créateur ! :fox:), et de ces joueurs auront le rôle d'<@&440664569019629619>, avec un vocal et un channel réservé !");
    message.channel.send("2 - De nouveaux rôles et channels vont voir le jour prochainement, concernant d'autres jeux ! N'hésitez pas a proposer vos idées à mon créateur ! :wolf:");
    message.channel.send("3 - Pour tout ce qui est discussion farfelue, il faudra s'adresser au channel <#440665131731648516>, les autres sont réservés pour des choses plus sérieuses ! :ok_hand:");
    message.channel.send("4 - Ce serveur est conçu pour partager des informations, échanger et s'entraider ! Les personnes qui mettrait le désorde dans le serveur de mon création sera expulsé, ou pire banni :scream_cat:");
    message.channel.send("5 - Le serveur <#440665749275803648> est réservé pour les choses dont Yumiki n'a pas a aller fouiner ! Mais il est important d'être majeure avant d'y entrer ! :warning:");
    message.channel.send("6 - Mon créateur fera du mieux qu'il peut pour améliorer mes capacités ! N'hésitez pas a poster des idées dans le channel <#440666321097850880>, mais restez sérieux ! :fox:");
    message.channel.send("7 - La bonne humeur est toujours importante ! :smile:");
    message.channel.send("8 - Enfin, je vous souhaite a tous un merveilleux voyage dans mon serveur ! Pour accepter ces règles,  avoir accès aux autres parties du channel et devenir un  <@&440658070918529024>,  écrivez : Ainsoph");
    message.channel.send("9 - Très important ! Si vous constatez des disfionctionnements dans mon comportement, prévenez mon créateur en décrivant le comportement de Yumiki :wolf:");
    
    message.channel.send("-----------------------------");
    message.channel.send("Bon jeu a tous ! :heart: :fox:");
});*/

bot.on('message', message => {
    if(message.channel.name === "regles")
    {
        if(message.content.toLowerCase() === "ainsoph" && !message.member.roles.has('440658070918529024') && state === 0) {
            state = 1;
            message.channel.send("Bien ! Yumiki a également besoin de ton pseudo en jeu ! :fox: Je t'écoute");
        }
        else if(state === 1 && message.member.roles.has('440617324492488705'))
        {
            message.member.setNickname(message.content);
            message.channel.send("Parfait ! Yumiki a une dernière question ! Fais tu parti de la guilde Apachee ? Réponds par 'Oui' ou 'Non'")
            state = 2
        }
        else if(state === 2 && message.member.roles.has('440617324492488705'))
        {
	    if(message.content.toLowerCase() === "oui") {
                message.member.removeRole('440617324492488705'); //Enleve le role invité                                                                                                                             
                message.member.addRole('440658070918529024'); //Add role Invocateur                                                                                                                                  
                message.channel.bulkDelete(arrayMessage["id-"+message.member.id]);
                message.author.send("Vous avez bien été admis sur le serveur de mon créateur ! Yumiki est heureuse de te compter parmis nous! :fox:")
		state = 0;
	    }
	    else if (message.content.toLowerCase() === "non") {
                message.member.removeRole('440617324492488705'); //Enleve le role invité                                                                                                                             
                message.member.addRole('440664569019629619'); //Add role invocateur étranger                                                                                                                         
                message.channel.bulkDelete(arrayMessage["id-"+message.member.id]);
                message.author.send("Vous avez bien été admis sur le serveur de mon créateur ! Yumiki est heureuse de te compter parmis nous ! :fox:")
		state = 0;
	    }
	    else {
		message.channel.send("Oops...Yumiki n'a pas compris.. Réponds par 'Oui' ou 'Non' :fox:")
		arrayMessage["id-"+message.member.id] += 2;
	    }
	}
	else
	{
            if(!message.member.roles.has('440648066618359819'))
		message.delete();
	}
    }

    if(message.channel.name === "gvg-launch" || message.channel.name === "crash-test-code")
    {
	if(message.content === "!gvg")
	{
	    message.delete();
	    var d = new Date();
	    const h = d.getHours();
	    const m = d.getMinutes(); 
	    message.channel.send("Yumiki annonce qu'une GVG a été lancée à "+h+"h"+m+" ! <@&440948591931031552>");
	}
    }
    
    if(message.channel.name === "gvo-launch" || message.channel.name === "crash-test-code")
    {
        if(message.content === "!gvo")
        {
            message.delete();
            var d = new Date();
            const h = d.getHours();
            const m = d.getMinutes();
            message.channel.send("Yumiki annonce qu'une GVO a été lancée à "+h+"h"+m+" ! <@&440658070918529024>");
        }
    }

    if(message.channel.name === "call-attackers" || message.channel.name === "crash-test-code")
    {
        if(message.content.split(' ')[0]  === "!attack")
        {
	    message.channel.send("Yumiki vous rappelle de ne pas oublier d'attaquer en GVG ! :fox: <@&440948591931031552> ");
	    
/*	    var command = message.content.split(' '); //Command == a tout les noms 
	    for(i = 1; command[i].length > i; i++) 
	    {
		var user = bot.users.get(bot).id;

		if(user)
		{
		    arrayMessage["id-"+user.id]['displayName-'+user.displayName] = 1
		    message.channel.send("<@&"+user.id+">" +"Yumiki te rappelle d'attaquer ! YukiCompteur : "+ arrayMessage["id-"+user.id]['displayName-'+user.displayName]+" :fox:");
		    arrayMessage["id-"+user.id]['displayName-'+user.displayName] += 1
		}
            }*/
	}
	else
	    message.delete();
    }
   
    if(message.channel.name === "command-chan" || message.channel.name === "crash-test-code")
    {
	if(message.content === "!lista")
	{
	    let members = message.guild.roles.get('440948591931031552').members;
	    message.channel.send("Yumiki a trouver la liste des joueurs en attaque ! :fox:");
	    message.channel.send(members.map(m=>m.displayName).join('\n'));
	}
    }
    
});
