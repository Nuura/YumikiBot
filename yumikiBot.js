const Discord = require('discord.js')
const bot = new Discord.Client()

bot.on('ready', function () {
  console.log("Je suis connecté !")
})

bot.login('');
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
        if(message.content === "Ainsoph" && !message.member.roles.has('440658070918529024')) { //Check si l'user a le role Invoc {                                                                                                                                                    
            message.member.addRole('440658070918529024'); //Mets le role normal                                                                                                                                                                                                       
            message.member.removeRole('440617324492488705'); //Enleve le role invité                                                                                                                                                                                                  
            message.delete();
        }
        else
            message.delete();
   }
});
