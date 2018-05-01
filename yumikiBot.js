const Discord = require('discord.js')
const bot = new Discord.Client()

bot.on('ready', function () {
  console.log("Je suis connecté !")
})

bot.login('NDQwNjIwOTgxMTQ1NTY3MjQy.DckbqQ.rueYLHeLf6YxQoNouin2ZEfl0OM')

//bot.on('message', message => {                                                                                                                                                                                                                                                      
//  if (message.content === 'ping') {                                                                                                                                                                                                                                                 
//    message.reply('pong !')                                                                                                                                                                                                                                                         
//  }                                                                                                                                                                                                                                                                                 
//})                                                                                                                                                                                                                                                                                  

//bot.on('guildMemberAdd', member => {                                                                                                                                                                                                                                                
 // member.createDM().then(channel => {                                                                                                                                                                                                                                               
  //  return channel.send('Bienvenue sur mon serveur ' + member.displayName)                                                                                                                                                                                                          
 // }).catch(console.error)                                                                                                                                                                                                                                                           
  // On pourrait catch l'erreur autrement ici (l'utilisateur a peut être désactivé les MP)                                                                                                                                                                                            
//})                                                                                                                                                                                                                                                                                  

bot.on('guildMemberAdd', member => {
    member.addRole('440617324492488705').then(console.log).catch(console.error);
});

bot.on('message', message => {                                                                                                                                                                                                                                                      
    if(message.channel.name === "regles")                                                                                                                                                                                                                                             
    {                                                                                                                                                                                                                                                                                 
        if(message.content === "Ainsoph" && !message.member.roles.has('440658070918529024')) {                                                                                                                                                                                             
            message.member.addRole('440658070918529024'); //Mets le role normal                                                                                                                                                                                                       
            message.member.removeRole('440617324492488705'); //Enleve le role invité                                                                                                                                                                                                  
            message.delete();                                                                                                                                                                                                                                                       
        }                                                                                                                                                                                                                                                                             
        else                                                                                                                                                                                                                                                                          
            message.delete();                                                                                                                                                                                                                                                         
   }                                                                                                                                                                                                                                                                                  
})                                                                                                                                                                                                                                                                                    

bot.on('message', message => {
   if(message.channel.name === "regles") {
       message.channel.send("Bonjour ! Je suis Yumiki ! :fox:");
       message.channel.send("-----------------------------");
       message.channel.send("Je suis un bot, qui sera amélioré au fur et a mesure du temps ! Pour le moment je m'occupe de la vérification !");
       message.channel.send("Afin d'entrer dans ce serveur, il y a quelques règles a respecter ! A savoir :");
       message.channel.send("-----------------------------");
       message.channel.send("1 - Ce channel est réservé aux joueurs de la guilde Apachee, il est interdit d'ajouter d'autres membres (Sauf si une demande a été faites auprès de mon créateur ! :fox:), et de ces joueurs auront le rôle d'<@&440664569019629619>, avec un vocal et u
n channel réservé !");
       message.channel.send("2 - De nouveaux rôles et channels vont voir le jour prochainement, concernant d'autres jeux ! N'hésitez pas a proposer vos idées à mon créateur ! :wolf:");
       message.channel.send("3 - Pour tout ce qui est discussion farfelue, il faudra s'adresser au channel <#440665131731648516>, les autres sont réservés pour des choses plus sérieuses ! :ok_hand:");
       message.channel.send("4 - Ce serveur est conçu pour partager des informations, échanger et s'entraider ! Les personnes qui mettrait le désorde dans le serveur de mon création sera expulsé, ou pire banni :scream_cat:");
       message.channel.send("5 - Le serveur <#440665749275803648> est réservé pour les choses dont Yumiki n'a pas a aller fouiner ! Mais il est important d'être majeure avant d'y entrer ! :warning:");
       message.channel.send("6 - Mon créateur fera du mieux qu'il peut pour améliorer mes capacités ! N'hésitez pas a poster des idées dans le channel <#440666321097850880>, mais restez sérieux ! :fox:");
       message.channel.send("7 - La bonne humeur est toujours importante ! :smile:");
       message.channel.send("8 - Enfin, je vous souhaite a tous un  voyage dans mon serveur ! Pour accepter ces règles,  avoir accès aux autres parties du channel et devenir un  <@&440658070918529024>,  écrivez : Ainsoph");
       message.channel.send("-----------------------------");
       message.channel.send("Bon jeu a tous ! :heart: :fox:");
   }
});
