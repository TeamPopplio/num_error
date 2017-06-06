///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// This discord bot is named NUM_ERROR. This bot allows you to add Pokedex entries for Pokemon and/or "Fakemon." //
// Copyright (C) 2017 House of Cards                                                                             //
// This program is free software: you can redistribute it and/or modify                                          //
// it under the terms of the GNU General Public License as published by                                          //
// the Free Software Foundation, either version 3 of the License, or                                             //
// (at your option) any later version.                                                                           //
//                                                                                                               //
// This program is distributed in the hope that it will be useful,                                               //
// but WITHOUT ANY WARRANTY; without even the implied warranty of                                                //
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the                                                 //
// GNU General Public License for more details.                                                                  //
//                                                                                                               //
// You should have received a copy of the GNU General Public License                                             //
// along with this program.  If not, see <http://www.gnu.org/licenses/>.                                         //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// NUM_ERROR - Provided by Kisu-Amare#7754.                                                                    //
// This bot is meant to be an open-source version of Elygem, a discord bot made by meew0#9811.                 //
// View admin commands using --admin when you have your role ids in settings.json                              //
// Based on the multifunction bot, Prinny.                                                                     //
// Written by Kisu-Amare with help from Gigabars.                                                              //
// This bot uses discord.js, the large platform for creating discord bots in javascript: http://discord.js.org //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Startup //
/////////////

const Discord = require("discord.js"); // Discord.js Node module (Use 11.1.0)
const zalgo = require("to-zalgo"); // Zalgo Node module (Any version)
const settings = require('./settings.json'); // Settings file
const fakemon = require('./fakemon.json'); // Fakemon file
const ability = require('./ability.json'); // Abilities file
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`${client.user.username} is now online. Use -help for commands in your server.`); // This message will appear if you have successfully activated your bot.
  client.user.setStatus("online") // Just in-case a status hasn't been reset (like if the bot hasn't been switched to offline after being in idle status, for example.)
  client.user.setGame("Running normally!")}); // If you'd like a custom game to be set, you can change this string. However, if you use --status the game will be reset.

client.on('guildMemberAdd', member => {
  // Sends a welcome message for new users to the guild's default channel (usually #general), mentioning the member.
  member.guild.defaultChannel.send(`Welcome to the server, ${member}! ` + settings.welcome,{files:['./welcome.png']});
  console.log(member.user.username + "#" + member.user.discriminator + ' has joined ' + member.guild.name + ".");
  client.channels.get(settings.logchannel).send(member.user.username + "#" + member.user.discriminator + ' has joined ' + member.guild.name + ".");
});

var prefix = (settings.prefix); // The prefix can be changed in the settings file.
client.on('message', message => {
if(message.author.equals(client.user)) return;
let args = message.content.split(' ').slice(1)

/////////
// Art //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Art entries can be added here by copying the template, changing the names, and having the png file ready //
// in the art folder where you start the bot.                                                               //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

if (message.content.toLowerCase().includes("*template1*")) { // Template Fakemon 1
    message.channel.send('',{files:['./art/template1.png']})
    
} else if (message.content.toLowerCase().includes("*template2*")) { // Template Fakemon 1
    message.channel.send('',{files:['./art/template2.png']})
    
} else if (message.content.toLowerCase().includes("*kisu*")) { // Fable's Kisu, the grass starter.
    message.channel.send('',{files:['./art/kisu.png']})
    


} else if (message.content.includes("(╯°□°）╯︵ ┻━┻")) { // Tableflip Response (This is included here for convienence.)
    message.channel.send("┬─┬ノ( º _ ºノ)")
}

///////////////
// Abilities //
///////////////////////////////////////////////////////////////////////////////////////////////////////////
// Abilities are a little trickier, you will need to copy lines here to add the recognition code, but to //
// actually find the abilities, you need to add them to ability.json by copying lines and changing the   //
// info.                                                                                                 //
///////////////////////////////////////////////////////////////////////////////////////////////////////////

if (message.channel.type != "dm") { // This line prevents the bot from crashing if you DM it a command that requires a specific role.

if (!message.content.startsWith(prefix)) return;

if (message.content.toLowerCase().startsWith(prefix + "abilities")) {
    message.reply(ability.abilitylist)

} else if (message.content.toLowerCase().startsWith(prefix + "ability")) {
    if (args.join(' ').toLowerCase() == "frisky") {
        message.channel.send(ability.Frisky)
    } else if (args.join(' ').toLowerCase() == "adrenaline") {
        message.channel.send(ability.Adrenaline)
    } else if (args.join(' ').toLowerCase() == "corrupted body" || args.join(' ').toLowerCase() == "corruptedbody") {
        message.channel.send(ability.CorruptedBody)

        // I have sinned by killing this meme off
    } else {message.channel.send("Not Found")} // This replies back if the ability doesn't exist.

/////////////
// Fakemon //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Dex entries are added similarlly to abilities, you will need to copy lines here to add the recognition //
// code, but to actually find the dex entries, you need to add them to fakemon.json by copying lines and  //
// changing the names, stats, evolutions, descriptions, etc.                                              //
////////////////////////////////////////////////////////////////////////////////////////////////////////////

} else if (message.content.toLowerCase().startsWith(prefix + "dex")) {
    if (message.content.startsWith(prefix + "dexlist")) {
        message.reply(fakemon.dexlist)
    } else if (args.join(' ').toLowerCase() == "template1") { // Template Fakemon 1
        message.channel.send(fakemon.template1,{files:['./art/template1.png']})
    } else if (args.join(' ').toLowerCase() == "template2") { // Template Fakemon 2
        message.channel.send(fakemon.template2,{files:['./art/template2.png']})
    } else if (args.join(' ').toLowerCase() == "kisu") { // Fable's Kisu, the grass starter.
        message.channel.send(fakemon.kisu,{files:['./art/kisu.png']})
    } else if (args.join(' ').toLowerCase() == "kisolis") { // Fable's Kisolis, Kisu's evolution.
        message.channel.send(fakemon.kisolis)
    } else if (args.join(' ').toLowerCase() == "kinsam") { // Fable's Kinsam, Kisolis' evolution.
        message.channel.send(fakemon.kinsam)

        // I have sinned by killing this meme off
    } else {message.channel.send("Not Found!")} // This replies back if the fakemon doesn't exist.
    
    
///////////////////////////////////////////////
// Meme commands                             //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// To add new images to the meme commands, add a .jpg into the corresponding folder and increase the number. //
// Make sure your images are named with an integer!                                                          //
// As for -b, you can add phrases in the same manner as images.                                              //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

} else if (message.content.startsWith(prefix + "papi")) {
    message.channel.send('',{files:['./papi/' + Math.floor(Math.random() * (11+1)) + '.jpg']})

} else if (message.content.startsWith(prefix + ":b:") || message.content.startsWith(prefix + "🅱")) {
    var math = Math.floor(Math.random() * (11+1)) // Increase the 11 if you are adding more phrases, don't change the +1!
    if(math == 0){message.channel.send(':b:reak the :b:ot')}
    else if(math == 1){message.channel.send(':b:izza gonna :b:e :b:est')}
    else if(math == 2){message.channel.send('Hey, :b:️eter. My name is :b:️enter :b:️ :b:️aq.')}
    else if(math == 3){message.channel.send(':b:eems :b:egit')}
    else if(math == 4){message.channel.send('Su:b:way: Eat :b:resh')}
    else if(math == 5){message.channel.send(':b:o:b::b:lio survives')}
    else if(math == 6){message.channel.send(":b:️aby :b:️, you can't do a :b:️ad!")}
    else if(math == 7){message.channel.send("I am the su:b:erior")}
    else if(math == 8){message.channel.send(":b:racking open a :b:old one with :b:iscord shit:b:ost")}
    else if(math == 9){message.channel.send(":b:orygon-:b: :ok_hand:")}
    else if(math == 10){message.channel.send("HELLO :b:OPPLIO FROM THE :b:OPPLIO MAN GAME.")}
    else if(math == 11){message.channel.send(":b:leu helped me with :b:")}

///////////////////////////////////////////////////////////////////////////////////////
//•//////////////////////////////////////////////////////////////////////////////_/■/X/
///////////////////////////////////////////////////////////////////////////////////////
/////// Do not edit anything below this line unless you know what you're doing! ///////
///////////////////////////////////////////////////////////////////////////////////////
// I repeat, do not edit anything below this line unless you know what you're doing! //
///////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////[Continue]///////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////

} else if (message.content.startsWith(prefix + 'help')) {
    message.channel.send('',{embed: new Discord.RichEmbed()
    .setDescription('To view miscellaneous commands, use ``' + prefix + 'misc``.')
    .addField(prefix + 'help', 'Displays a list of the most important commands with short descriptions and examples.', true)
    .addField(prefix + 'about', 'Displays version information.', true)
    .addField(prefix + 'server', 'Shows the IP to the server.', true)
    .addField(prefix + 'dex', '``' + prefix + 'dex withergreen``\n``-dex hushky``\nShows a Pokédex entry.', true)
    .addField(prefix + 'ability', '``' + prefix + 'ability icy stare``\n``-ability adrenaline``\nShows an ability entry.', true)
    .addField(prefix + 'dexlist', 'Gives a list of all current Pokédex entries.', true)
    .addField(prefix + 'abilites', 'Gives a list of all current ability entries.', true)
    .addField(prefix + 'welcome', 'Sends a lovely welcome message.', true)
    .addField(prefix + 'servers', 'Lists the servers this bot is on.', true)})

} else if (message.content.startsWith(prefix + 'misc')) {
    message.channel.send('',{embed: new Discord.RichEmbed()
    .setDescription('To view main commands, use ``' + prefix + 'help``.')
    .addField(prefix + 'why', 'Gives a description for this bot.', true)
    .addField(prefix + 'listids', 'Lists __ALL__ roles in the server.', true)
    .addField(prefix + 'format', "Formats text in \`\` markdown, useful for emojis.", true)
    .addField(prefix + 'papi', 'Sends a random image of Popplio.', true)
    .addField(prefix + 'zalgo', "``" + prefix + "zalgo I am my own god.``\nZalgolizes text placed in the arguments.", true)
    .addField(prefix + 'avatar', "Shows the avatar URL of the author.", true)
    .addField(prefix + 'say', "``" + prefix + "say Hey now, you're an all star.``\nRepeats text placed in the arguments.", true)
    .addField(prefix + 'gigabars', 'thank gigabars', true)
    .addField(prefix + 'blobbo', 'thank mr blobbo', true)
    .addField(prefix + 'lemons', "``" + prefix + "lemons trigger``\nGenerates a story about a tree using the arguments.", true)
    .addField(prefix + 'tractor', "``" + prefix + "tractor tranquil``\nGenerates a story about life using the arguments.", true)
    .addField(prefix + ':b:', ':b::b::b::b::b:', true)
    .addField(prefix + 'cid', 'Shows the current channel ID.', true)
    .addField(prefix + 'sid', 'Shows the current server ID.', true)})
    

} else if (message.content.startsWith(prefix + prefix + "admin")) {
    if (message.member.roles.has(settings.modRole) || message.member.roles.has(settings.minimodRole)) {
        message.channel.send('',{embed: new Discord.RichEmbed()
        .setDescription('To view main commands, use ``' + prefix + 'help``.\nTo view miscellaneous commands, use ``' + prefix + 'misc``.')
        .addField(prefix + prefix + 'admin', 'Shows a help menu for admin-only commands.', true)
        .addField(prefix + prefix + 'debug', 'Outputs debug information.', true)
        .addField(prefix + prefix + 'addtodex', 'Sends a message for adding entries.', true)
        .addField(prefix + prefix + 'dexisdone', 'Sends a message for completing entries.', true)
        .addField(prefix + prefix + 'kick', 'Kicks a guild member.', true)
        .addField(prefix + prefix + 'softban', 'Kicks a guild member and deletes messages.', true)
        .addField(prefix + prefix + 'ban', 'Bans a guild member.', true)
        .addField(prefix + prefix + 'clear', '``' + prefix + prefix + 'clear 5``\nClears messages in a channel.', true)
        .addField(prefix + prefix + 'status', '``' + prefix + prefix + 'status idle``\n``-status veryslow``\nChanges the status or show the current connection.', true)})
    } else {message.channel.send('No permission!')}

} else if (message.content.startsWith(prefix + "sid")) {
    message.channel.send(message.guild.id)

} else if (message.content.startsWith(prefix + 'say')) {
    message.channel.sendMessage(args.join(" "))
    message.delete()
    console.log(message.author.username + "#" + message.author.discriminator + ' says "' + args.join(" ") + '" in #' + message.channel.name + ' on ' + message.guild.name + ".");
    client.channels.get(settings.logchannel).sendMessage(message.author.username + "#" + message.author.discriminator + ' says "' + args.join(" ") + '" in #' + message.channel.name + ' on ' + message.guild.name + ".");

} else if (message.content.startsWith(prefix + 'cid')) {
    message.channel.send(message.channel.id)

} else if (message.content.startsWith(prefix + 'avatar')) {
    message.channel.send(message.author.avatarURL)

} else if (message.content.startsWith(prefix + "zalgo")) {
      message.channel.send(zalgo(args.join(" ")))
      message.delete()
      console.log(message.author.username + "#" + message.author.discriminator + ' zalgoized "' + args.join(" ") + '" in #' + message.channel.name + ' on ' + message.guild.name + ".");
      client.channels.get(settings.logchannel).send(message.author.username + "#" + message.author.discriminator + ' zalgoized "' + args.join(" ") + '" in #' + message.channel.name + ' on ' + message.guild.name + '.');

} else if (message.content.startsWith(prefix + "about")) {
    message.channel.send("This is " + settings.name + " v" + settings.version)

} else if (message.content.startsWith(prefix + "welcome")) {
    message.delete()
    message.channel.send("Welcome to the server! " + settings.welcome,{files:['./welcome.png']})
    console.log(message.author.username + "#" + message.author.discriminator + ' used ' + prefix + 'welcome in #' + message.channel.name + ' on ' + message.guild.name + ".");
    client.channels.get(settings.logchannel).send(message.author.username + "#" + message.author.discriminator + ' used ' + prefix + 'welcome in #' + message.channel.name + ' on ' + message.guild.name + ".");

} else if (message.content.startsWith(prefix + 'why')) {
    message.channel.send(settings.about)

} else if (message.content.startsWith(prefix + "blobbo")) {
    message.channel.send('',{files:['./art/blob.jpg']})

} else if (message.content.startsWith(prefix + "rate")) {
    message.react('👍')
    message.react('👎')

} else if (message.content.startsWith(prefix + "gigabars")) {
    message.channel.send('http://i.imgur.com/RANCYJ8.jpg')

} else if (message.content.startsWith(prefix + "servers")) {
    message.channel.send(settings.servers)

} else if (message.content.startsWith(prefix + 'listids')) {
    message.channel.send('```xl\nRoles:\n' + message.guild.roles.map(r => r.name) + '\n\nRoleIDs:\n' + message.guild.roles.map(r => r.id) + '\n\nMatch up the role ID with the corresponding role. so the first one on the Role name list would be the first ID.' + '```')

} else if(message.content.startsWith(prefix + "format")){
   message.channel.send("``" + args.join() + "``")

//admin commands:

} else if (message.content.startsWith(prefix + prefix + 'addtodex')) {
    if (message.member.roles.has(settings.owner)) {
        message.delete()
        message.channel.send("Adding new entries to dex, this will take a while... -" + message.author.username + "#" + message.author.discriminator)
    } else {message.channel.send('No permission!')}

} else if (message.content.startsWith(prefix + prefix + 'dexisdone')) {
    if (message.member.roles.has(settings.owner)) {
        message.delete()
        message.channel.send("Completed newest dex entries, use ``" + prefix + "dexlist`` to find the new list of entries. -" + message.author.username + "#" + message.author.discriminator)
    } else {message.channel.send('No permission!')}

} else if (message.content.startsWith(prefix + 'lemons')) {
    message.channel.send('I’m so glad that our '+args.join(" ")+' tree finally grew and sprouted fruitful '+args.join(" ")+'y '+args.join(" ")+'s. I mean, imagine, we can make '+args.join(" ")+'ade, key '+args.join(" ")+' pie, '+args.join(" ")+' merengue pie. I think it’s the most valuable of property that we have. I think we should go to the bank and get a loan, actually I think we should just get '+args.join(" ")+' tree insurance and then get a loan and use the '+args.join(" ")+' tree as collateral because it is now insured. I truly do love our '+args.join(" ")+' tree. Just imagine a life full of '+args.join(" ")+' trees, and all our beautiful '+args.join(" ")+'s, endless possibilities. They’re so beautiful, I wish I was a '+args.join(" ")+'. You wish you were a '+args.join(" ")+'? If you were a '+args.join(" ")+' I would put you on my shelf and cherish you like I cherish all our '+args.join(" ")+'s. That’s so beautiful, like I only hope that the whores aren’t stealing our '+args.join(" ")+'s you know those naughty whores always steal '+args.join(" ")+'s. we do have a couple '+args.join(" ")+' whores in this community, those damn '+args.join(" ")+'-stealing whores I hate them no one will take our prized '+args.join(" ")+'s from us. Hey, has it been about 10 seconds since we looked at our '+args.join(" ")+' tree? It has been about 10 seconds till we looked at our '+args.join(" ")+' tree. Hey what the FUCK')

} else if (message.content.startsWith(prefix + 'tractor')) {
    message.channel.send("Who's a good boy, you are! " + args.join(" ") + ", you're gonna go to " + args.join(" ") + " preschool, then you're gonna learn to read and write. Then you're gonna go to itty bitty " + args.join(" ") + " kindergarten where you can read more! Isn't that cool, " + args.join(" ") + "? Does it fill you with excitement, " + args.join(" ") + "? Now it's time for elementary. I don't care if you're a boy, girl, helicopter, you will always be my special " + args.join(" ") + ". Now, are you filled with excitement? Is your mind stained with amazing thoughts? Do you like this? I shall be your hero, hero. Now look at you, you're in super big boy " + args.join(" ") + " college. You can be a big boy! Or girl, or helicopter. Then, " + args.join(" ") + ", you shall marry a cat. I demand that you marry a cat. Maybe a poodle. Mm, yes, a poodle. Poodles are amazing, " + args.join(" ") + ", you will experience thoughts of splendid emotions. Now now, don't get too excited. Soon, you will break down. All of this is meaningless as what happens to you is completely inevitable. We will die, " + args.join(" ") + ". You are surrounded by walls, your dreams can't get in as the walls are made of reality. Goodbye.")

} else if (message.content.startsWith(prefix + prefix + "softban")) {
    if (message.member.roles.has(settings.modRole) || message.member.roles.has(settings.minimodRole)) {
        if(message.mentions.users.size === 0) {
            return message.channel.send("No user found! Mention a user to softban.")
        }
        let banMember = message.guild.member(message.mentions.users.first());
        message.guild.ban(banMember, 1).then(member => {
            message.guild.unban(banMember)
            console.log(`${message.author.username + "#" + message.author.discriminator} softbanned (kicked) ${member.user.username + "#" + member.user.discriminator}` + ' on ' + message.guild.name + ".")
            client.channels.get(settings.logchannel|| settings.logchannel2).send(message.author.username + "#" + message.author.discriminator + ' softbanned (kicked) ' + member.user.username + "#" + member.user.discriminator + ' on ' + message.guild.name + ".");
            message.channel.send(`User has been softbanned successfully.`)
        })
    } else {message.channel.send('No permission!')}

} else if (message.content.startsWith(prefix + prefix + "ban")) {
    if (message.member.roles.has(settings.modRole)) {
        if(message.mentions.users.size === 0) {
            return message.channel.send("No user found! Mention a user to ban.")
        }
        let banMember = message.guild.member(message.mentions.users.first());
        message.guild.ban(banMember, 0).then(member => {
            console.log(`${message.author.username + "#" + message.author.discriminator} banned ${member.user.username + "#" + member.user.discriminator}` + ' on ' + message.guild.name + ".")
            client.channels.get(settings.logchannel).send(message.author.username + "#" + message.author.discriminator + ' banned ' + member.user.username + "#" + member.user.discriminator + ' on ' + message.guild.name + ".");
            message.channel.send(`User has been banned successfully.`)
        })
    } else {message.channel.send('No permission!')}

} else if (message.content.startsWith(prefix + prefix + "kick")) {
    if (message.member.roles.has(settings.modRole) || message.member.roles.has(settings.minimodRole)) {
        if(message.mentions.users.size === 0) {
            return message.channel.send("No user found! Mention a user to kick.")
        }
        let kickMember = message.guild.member(message.mentions.users.first());
        kickMember.kick().then(member => {
            console.log(`${message.author.username + "#" + message.author.discriminator} kicked ${member.user.username + "#" + member.user.discriminator}.`)
            client.channels.get(settings.logchannel).send(message.author.username + "#" + message.author.discriminator + ' kicked ' + member.user.username + "#" + member.user.discriminator + ' on ' + message.guild.name + ".");
            message.channel.send(`User has been kicked successfully.`)
        })
    } else {message.channel.send('No permission!')}

} else if (message.content.startsWith(prefix + prefix + "status")) {
    if (message.member.roles.has(settings.modRole) || message.member.roles.has(settings.minimodRole)) {
        
        if(args.join() == "slow") {
            client.user.setStatus("idle")
            client.user.setGame("Running slowly!")
            message.channel.send("Done!")
            console.log(`${message.author.username + "#" + message.author.discriminator} set ` + settings.name + `'s status to slow.`)
            client.channels.get(settings.logchannel).send(message.author.username + "#" + message.author.discriminator + ` set ` + settings.name + `'s status to slow.`);

        } else if(args.join() == "veryslow") {
            client.user.setStatus("dnd")
            client.user.setGame("Running very slowly!")
            message.channel.send("Done!")
            console.log(`${message.author.username + "#" + message.author.discriminator} set ` + settings.name + `'s status to very slow.`)
            client.channels.get(settings.logchannel).send(message.author.username + "#" + message.author.discriminator + ` set ` + settings.name + `'s status to very slow.`);

        } else if(args.join() == "normal") {
            client.user.setStatus("online")
            client.user.setGame("Running normally!")
            message.channel.send("Done!")
            console.log(`${message.author.username + "#" + message.author.discriminator} set ` + settings.name + `'s status to normal.`)
            client.channels.get(settings.logchannel).send(message.author.username + "#" + message.author.discriminator + ` set ` + settings.name + `'s status to normal.`);

        } else if(args.join() == "none") {
            client.user.setGame(null)
            console.log(`${message.author.username + "#" + message.author.discriminator} removed ` + settings.name + `'s game.`)
            client.channels.get(settings.logchannel).send(message.author.username + "#" + message.author.discriminator + ` removed ` + settings.name + `'s game.`);

        } else if(args.join() == "online") {
            client.user.setStatus(online)
            message.channel.send("Done!")
            console.log(`${message.author.username + "#" + message.author.discriminator} set ` + settings.name + `'s status to online.`)
            client.channels.get(settings.logchannel).send(message.author.username + "#" + message.author.discriminator + ` set ` + settings.name + `'s status to online.`);

        } else if(args.join() == "idle") {
            client.user.setStatus("idle")
            message.channel.send("Done!")
            console.log(`${message.author.username + "#" + message.author.discriminator} set ` + settings.name + `'s status to idle.`)
            client.channels.get(settings.logchannel).send(message.author.username + "#" + message.author.discriminator + ` set ` + settings.name + `'s status to idle.`);

        } else if(args.join() == "dnd") {
            client.user.setStatus("dnd")
            message.channel.send("Done!")
            console.log(`${message.author.username + "#" + message.author.discriminator} set ` + settings.name + `'s status to dnd.`)
            client.channels.get(settings.logchannel).send(message.author.username + "#" + message.author.discriminator + ` set ` + settings.name + `'s status to dnd.`);
        } else
            message.channel.send("Invalid status! \n\n``Statuses are:\nslow - Running slowly!           |  idle - Set status as idle\nveryslow - Running very slowly!  |  dnd - Set status as do not disturb\nnormal - Running normally!       |  online - Set status as online\nnone - Reset the game``")
    } else {message.channel.send('No permission!')}

} else if (message.content.startsWith(prefix + prefix + "clear")) {
    if (message.member.roles.has(settings.modRole) || message.member.roles.has(settings.minimodRole)) {
        var num = parseInt(args.join(' '));
        message.channel.bulkDelete(num + 1) 
        console.log(`${message.author.username + "#" + message.author.discriminator} cleared ` + num + ` messages in #` + message.channel.name + ' on ' + message.guild.name + ".")
        client.channels.get(settings.logchannel).send(message.author.username + "#" + message.author.discriminator + ` cleared ` + num + ` messages in #` + message.channel.name + ' on ' + message.guild.name + ".");
    } else {message.channel.send('No permission!')}

} else if (message.content.startsWith(prefix + prefix + "debug")) {
    if (message.member.roles.has(settings.modRole) || message.member.roles.has(settings.minimodRole) || message.member.roles.has(settings.owner) || message.member.roles.has(settings.owner2)) {
        client.channels.get(settings.adminchannel).send( '\nMy name is: ' + client.user.username + '\nMy owner is: ' + settings.owner + '\nI am currently: ' + client.status + '\nI have been online for: ' + client.uptime + '\nI was created on: ' + client.user.createdAt + '\nMy avatar is: ' + client.user.avatarURL)
    } else {message.channel.send('No permission!')} 
}

}});
client.login(settings.token);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////