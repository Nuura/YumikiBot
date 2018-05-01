const Discord = require('discord.js')
const bot = new Discord.Client()
var state = 0

bot.on('ready', function () {
    console.log("Je suis connecté !")
})

bot.login('NDQwNjIwOTgxMTQ1NTY3MjQy.DckbqQ.rueYLHeLf6YxQoNouin2ZEfl0OM');

bot.on('guildMemberAdd', member => {
    member.addRole('440617324492488705').then(console.log).catch(console.error);
});

bot.on('message', message => {
    if(message.channel.name === "regles")
    {
        if(message.content === "Ainsoph" && !message.member.roles.has('440658070918529024') && state === 0) {
            state = 1;
            message.channel.send("Bien ! Yumiki a également besoin de ton pseudo en jeu ! :fox: Je t'écoute");
        }
        else if(state === 1 && message.member.roles.has('440617324492488705'))
        {
            message.member.setNickname(message.content);
            message.channel.send("Parfait ! Yumiki a une dernière question ! Fais tu parti de la guilde Apachee ? Réponds par 'Oui' ou 'Non")

            state = 2
        }
        else if(state === 2 && message.member.roles.has('440617324492488705'))
        {
            i = 5;
            while (message.content.toLowerCase() !== "oui" || message.content.toLowerCase() !== "non")
            {
		i++;
                if(message.content.toLowerCase() === "oui") {
                    message.member.removeRole('440617324492488705'); //Enleve le role invité                                                                                                                             
                    message.member.addRole('440658070918529024'); //Add role Invocateur                                                                                                                                  
                    message.channel.bulkDelete(i);
                    message.author.send("Vous avez bien été admis sur le serveur de mon créateur ! Yumiki est heureuse de te compter parmis nous! :fox:")
                }
                else if (message.content.toLowerCase() === "non") {
                    message.member.removeRole('440617324492488705'); //Enleve le role invité                                                                                                                             
                    message.member.addRole('440664569019629619'); //Add role invocateur étranger                                                                                                                         
                    message.channel.bulkDelete(i);
                    message.author.send("Vous avez bien été admis sur le serveur de mon créateur ! Yumiki est heureuse de te compter parmis nous ! :fox:")
                }
		else
		    message.author.send("Yumiki n'a pas compris... Peux-tu me répeter ton choix ? Oui ou Non ? :fox:");
            }
            state = 0;
        }
      else
      {
          if(!message.member.roles.has('440648066618359819'))
            message.delete();
      }
    }
});
