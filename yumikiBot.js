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
          setNickname();
        }
          elseif(state === 1)
          {
           message.member.setNickname(message.content);
           message.member.addRole('440658070918529024'); //Mets le role normal                                                                                                                                                                                                       
           message.member.removeRole('440617324492488705'); //Enleve le role invité
           state = 0;
          }
                     
        })                                                                                                                                                 
        }
          else
            message.delete();
   }
});

