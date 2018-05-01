const Discord = require('discord.js')
const bot = new Discord.Client()

bot.on('ready', function () {
  console.log("Je suis connecté !")
})

bot.login('NDQwNjIwOTgxMTQ1NTY3MjQy.DckbqQ.rueYLHeLf6YxQoNouin2ZEfl0OM');
//bot.on('message', message => {                                                                                                                                                                                                                                                      
//  if (message.content === 'ping') {                                                                                                                                                                                                                                                 
//    message.reply('pong !')                                                                                                                                                                                                                                                         
//  }                                                                                                                                                                                                                                                                                 
//})                                                                                                                                                                                                                                                                                  

//bot.on('guildMemberAdd', member => {                                                                                                                                                                                                                                                
//  return channel.send('Bienvenue sur mon serveur ' + member.displayName)                                                                                                                                                                                                            
// }).catch(console.error)                                                                                                                                                                                                                                                            
// On pourrait catch l'erreur autrement ici (l'utilisateur a peut être désactivé les MP)                                                                                                                                                                                              
//})                                                                                                                                                                                                                                                                                 \
                                                                                                                                                                                                                                                                                      

bot.on('guildMemberAdd', member => {
    member.addRole('440617324492488705').then(console.log).catch(console.error);
});

bot.on('message', message => {
    if(message.channel.name === "regles")
        {
        if(message.content === "Ainsoph" && !message.member.roles.has('440658070918529024')) {
          message.channel.send("Bien ! Yumiki a également besoin de ton pseudo en jeu ! :fox: Je t'écoute");
         bot.on('message', message => {
           message.member.setNickname(message.content);
           message.member.addRole('440658070918529024'); //Mets le role normal                                                                                                                                                                                                       
           message.member.removeRole('440617324492488705'); //Enleve le role invité
           message.delete();
         });
          //Check si l'user a le role Invoc {                                                                                                                                                    
        }
          else
            message.delete();
   }
});
