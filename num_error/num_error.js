///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// This discord bot is a version of NUM_ERROR, named NUM_ERROR. This bot allows you to add Pokedex entries for Pokemon and/or "Fakemon." //
// Copyright (C) 2017 House of Cards                                                                                                     //
// This program is free software: you can redistribute it and/or modify                                                                  //
// it under the terms of the GNU General Public License as published by                                                                  //
// the Free Software Foundation, either version 3 of the License, or                                                                     //
// (at your option) any later version.                                                                                                   //
//                                                                                                                                       //
// This program is distributed in the hope that it will be useful,                                                                       //
// but WITHOUT ANY WARRANTY; without even the implied warranty of                                                                        //
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the                                                                         //
// GNU General Public License for more details.                                                                                          //
//                                                                                                                                       //
// You should have received a copy of the GNU General Public License                                                                     //
// along with this program.  If not, see <http://www.gnu.org/licenses/>.                                                                 //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// NUM_ERROR - Provided by Popplio. 
// This bot is a version of Porygon-A, the Amarean discord bot. Amarean Fakemon Server: https://discord.gg/BJXBhwR
// View admin commands using --admin when you have your role ids in settings.json
// Based on the multifunction bot, Prinny.
// Written by Popplio with help from Gigabars.
// This bots' support discord: https://discord.gg/ZpCqYW3
// Do not ask our suppport discord with coding help in javascript, Google is as much as a friend as your pokemon.
// Do not ask our suppport discord with discord.js specific support, use their discord on the website below.
// This bot uses discord.js, the large platform for creating discord bots in javascript: http://discord.js.org
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Config / Help Reference          //
//////////////////////////////////////
const Discord = require("discord.js");
const client = new Discord.Client();
const admin = new Discord.RichEmbed()
  .setDescription('To view main commands, use ``-help``.\nTo view miscellaneous commands, use ``-misc``.')
          // \\
         //   \\
        //     \\
       //       \\
      //         \\
     //   Admin   \\
    //  Commands:  \\
   //               \\
  //_________________\\
  .addField('--admin', 'Shows a help menu for admin-only commands.', true)
  .addField('--debug', 'Outputs debug information, including the token.', true)
  .addField('--log', '``--log spicy meme, yo ;)``\nLogs info to the log channel.', true)
  .addField('--dmtest', 'Tests the DM feature of NUM_ERROR.', true)
  .addField('--addtodex', 'Sends a message for adding entries.', true)
  .addField('--dexisdone', 'Sends a message for completing entries.', true)
  .addField('--kick', 'Kicks a guild member.', true)
  .addField('--softban', 'Kicks a guild member and deletes messages.', true)
  .addField('--ban', 'Bans a guild member.', true);
const help = new Discord.RichEmbed()
  .setDescription('To view miscellaneous commands, use ``-misc``.')
          // \\
         //   \\
        //     \\
       //       \\
      //         \\
     //  General  \\
    //  Commands:  \\
   //               \\
  //_________________\\
  .addField('-help', 'Displays a list of the most important commands with short descriptions and examples.', true)
  .addField('-about', 'Displays version information.', true)
  .addField('-dex', '``-dex withergreen``\n``-dex hushky``\n``-dex pebbuin``\nShows a Pokédex entry.', true)
  .addField('-dexlist', 'Gives a list of all current Pokédex entries.', true)
  .addField('-welcome', 'Sends a lovely welcome message.', true)
  .addField('-servers', 'Lists the servers NUM_ERROR is on.', true);
const misc = new Discord.RichEmbed()
  .setDescription('To view main commands, use ``-help``.')
          // \\
         //   \\
        //     \\
       //       \\
      //         \\
     //   Misc.   \\
    //  Commands:  \\
   //               \\
  //_________________\\
  .addField('-why', 'Gives a description for this bot.', true)
  .addField('-bt', 'Sends an image of a generic bipedal tailed Pokémon.', true)
  .addField('-shitpost', 'Generates a random shitpost.', true)
  .addField('-papi', 'Sends a random image of Popplio.', true)
  .addField('-listids', 'Lists __ALL__ roles in the server.', true)
  .addField('-say', "``-say Hey now, you're an all star.``\nRepeats text placed in the arguments.", true)
  .addField('-gigabars', 'thank gigabars', true)
  .addField('-sid', 'Shows the current server ID.', true);
const settings = require('./settings.json');
const fakemon = require('./fakemon.json');
client.on('ready', () => {
  ///////////////////////////////////////////////////////////////////////////
  // This message will appear if you have successfully activated your bot. //
  ///////////////////////////////////////////////////////////////////////////
  console.log(`${client.user.username} is now online. Use -help for commands in your server.`);
});
var prefix = (settings.prefix);
client.on('message', message => {
let args = message.content.split(' ').slice(1)
var argresult = args.join(' ');
/////////////////////////////////
// Art                         //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Art entries can be added here by copying the template, changing the names, and having the png file ready //
// in the art folder where you start the bot. For more help, check out our discord on line 6.               //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
if (message.content.toLowerCase().includes("*template1*")) { //Popplio's template1
    message.channel.sendFile('./art/template1.png')
    //
} else if (message.content.toLowerCase().includes("*template2*")) { //Popplio's template2
    message.channel.sendFile('./art/template2.png')
    //
} else if (message.content.toLowerCase().includes("*kisu*")) { //Fable's Kisu, the grass starter.
    message.channel.sendFile('./art/kisu.png')
    //
} else if (message.content.includes("(╯°□°）╯︵ ┻━┻")) { //Tableflip Command
    message.channel.sendMessage("┬─┬ノ( º _ ºノ)")
}
///////////////////////////////////////////////////
// Fakemon                                       //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Dex entries are a little trickier, you will need to copy lines here to add the recognition code, but to //
// actually find the dex entries, you need to add them to fakemon.json by copying lines and changing the   //
// names, stats, evolutions, descriptions, etc. For more help, check out our discord on line 6.            //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
if (!message.content.startsWith(prefix)) return;
if (message.content.toLowerCase().startsWith(prefix + "dex template1")) { //Popplio's template1
    message.channel.sendMessage(fakemon.template1)
    //
} else if (message.content.toLowerCase().startsWith(prefix + "dex template2")) { //Popplio's template2
    message.channel.sendMessage(fakemon.template2)
    //
} else if (message.content.toLowerCase().startsWith(prefix + "dex kisu")) { //Fable's Kisu, the grass starter.
    message.channel.sendMessage(fakemon.kisu)
    //
} else if (message.content.toLowerCase().startsWith(prefix + "dex kisolis")) { //Fable's Kisolis, Kisu's evolution.
    message.channel.sendMessage(fakemon.kisolis)
    //
} else if (message.content.toLowerCase().startsWith(prefix + "dex kinsam")) { //Fable's Kinsam, Kisolis' evolution.
    message.channel.sendMessage(fakemon.kinsam)
///////////////////////////////////////////////
// Meme commands                             //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// To add new images to the meme commands, add a .jpg into the corresponding folder and increase the (x+1). //
// Make sure your images are named with an integer!                                                         //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
} else if (message.content.startsWith(prefix + "shitpost")) {
    message.channel.sendFile('./shitpost/' + Math.floor(Math.random() * (4+1)) + '.jpg')
    //
} else if (message.content.startsWith(prefix + "papi")) {
    message.channel.sendFile('./papi/' + Math.floor(Math.random() * (11+1)) + '.jpg')
///////////////////////////////////////////////////////////////////////////////////////
//•//////////////////////////////////////////////////////////////////////////////_/■/X/
///////////////////////////////////////////////////////////////////////////////////////
/////// Do not edit anything below this line unless you know what you're doing! ///////
///////////////////////////////////////////////////////////////////////////////////////
// I repeat, do not edit anything below this line unless you know what you're doing! //
///////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////[Continue]///////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
} else if (message.content.startsWith(prefix + "sid")) {
    message.channel.sendMessage(message.guild.id)
} else if (message.content.startsWith(prefix + 'simonsays')) {
    message.channel.sendMessage(args.join(" "))
    message.delete()
    console.log(message.author.username + ' says "' + args.join(" ") + '" in #' + message.channel.name);
    client.channels.get(settings.logchannel).sendMessage(message.author.username + ' says "' + args.join(" ") + '" in #' + message.channel.name);
} else if (message.content.startsWith(prefix + "say")) {
    message.reply("Simon didn't say, so I won't say.")
} else if (message.content.startsWith(prefix + "about")) {
    message.channel.sendMessage("This is " + settings.name + " v" + settings.version)
} else if (message.content.startsWith(prefix + "dexlist")) {
    message.reply(fakemon.dexlist)
} else if (message.content.startsWith(prefix + "bt")) {
    message.channel.sendFile('./art/template2.png')
} else if (message.content.startsWith(prefix + "welcome")) {
    message.delete()
    message.channel.sendMessage(settings.welcome)
    message.channel.sendFile('./welcome.png')
    console.log(message.author.username + ' used -welcome in #' + message.channel.name);
    client.channels.get(settings.logchannel).sendMessage(message.author.username + ' used -welcome in #' + message.channel.name);
} else if (message.content.startsWith(prefix + 'help')) {
    message.channel.sendEmbed(help,{ disableEveryone: true })
} else if (message.content.startsWith(prefix + 'misc')) {
    message.channel.sendEmbed(misc,{ disableEveryone: true })
} else if (message.content.startsWith(prefix + 'why')) {
    message.channel.sendMessage(settings.about)
} else if (message.content.startsWith(prefix + "gigabars")) {
    message.channel.sendMessage('http://i.imgur.com/RANCYJ8.jpg')
} else if (message.content.startsWith(prefix + "servers")) {
    message.channel.sendMessage(settings.servers)
} else if (message.content.startsWith(prefix + 'listids')) {
    message.channel.sendMessage('```xl\nRoles:\n' + message.guild.roles.map(r => r.name) + '\n\nRoleIDs:\n' + message.guild.roles.map(r => r.id) + '\n\nMatch up the role ID with the corresponding role. so the first one on the Role name list would be the first ID.' + '```')
//admin commands:
} else if (message.content.startsWith(prefix + prefix + 'addtodex')) {
    if (message.member.roles.has(settings.popplio)) {
        message.delete()
        message.channel.sendMessage("Adding new entries to dex, this will take a while... -" + message.author.username)
    } else {message.channel.sendMessage('No permission!')}
} else if (message.content.startsWith(prefix + prefix + 'dexisdone')) {
    if (message.member.roles.has(settings.popplio)) {
        message.delete()
        message.channel.sendMessage("Completed newest dex entries, use ``-dexlist`` to find the new list of entries. -" + message.author.username)
    } else {message.channel.sendMessage('No permission!')}
} else if (message.content.startsWith(prefix + 'lemons')) {
    message.channel.sendMessage('I’m so glad that our '+args.join(" ")+' tree finally grew and sprouted fruitful '+args.join(" ")+'y '+args.join(" ")+'s. I mean, imagine, we can make '+args.join(" ")+'ade, key '+args.join(" ")+' pie, '+args.join(" ")+' merengue pie. I think it’s the most valuable of property that we have. I think we should go to the bank and get a loan, actually I think we should just get '+args.join(" ")+' tree insurance and then get a loan and use the '+args.join(" ")+' tree as collateral because it is now insured. I truly do love our '+args.join(" ")+' tree. Just imagine a life full of '+args.join(" ")+' trees, and all our beautiful '+args.join(" ")+'s, endless possibilities. They’re so beautiful, I wish I was a '+args.join(" ")+'. You wish you were a '+args.join(" ")+'? If you were a '+args.join(" ")+' I would put you on my shelf and cherish you like I cherish all our '+args.join(" ")+'s. That’s so beautiful, like I only hope that the whores aren’t stealing our '+args.join(" ")+'s you know those naughty whores always steal '+args.join(" ")+'s. we do have a couple '+args.join(" ")+' whores in this community, those damn '+args.join(" ")+'-stealing whores I hate them no one will take our prized '+args.join(" ")+'s from us. Hey, has it been about 10 seconds since we looked at our '+args.join(" ")+' tree? It has been about 10 seconds till we looked at our '+args.join(" ")+' tree. Hey what the FUCK')
} else if (message.content.startsWith(prefix + prefix + "softban")) {
    if (message.member.roles.has(settings.modRole) || message.member.roles.has(settings.minimodRole)) {
        if(message.mentions.users.size === 0) {
            return message.channel.sendMessage("No user found! Mention a user to softban.")
        }
        let banMember = message.guild.member(message.mentions.users.first());
        message.guild.ban(banMember, 1).then(member => {
            message.guild.unban(banMember)
            console.log(`${message.author.username} softbanned (kicked) ${member.user.username}.`)
            client.channels.get(settings.logchannel).sendMessage(message.author.username + ' softbanned (kicked) ' + member.user.username + ".");
            message.channel.sendMessage(`User has been softbanned successfully.`)
        })
    } else {message.channel.sendMessage('No permission!')}
} else if (message.content.startsWith(prefix + prefix + "ban")) {
    if (message.member.roles.has(settings.modRole)) {
        if(message.mentions.users.size === 0) {
            return message.channel.sendMessage("No user found! Mention a user to ban.")
        }
        let banMember = message.guild.member(message.mentions.users.first());
        message.guild.ban(banMember, 0).then(member => {
            console.log(`${message.author.username} banned ${member.user.username}.`)
            client.channels.get(settings.logchannel).sendMessage(message.author.username + ' banned ' + member.user.username + ".");
            message.channel.sendMessage(`User has been banned successfully.`)
        })
    } else {message.channel.sendMessage('No permission!')}
} else if (message.content.startsWith(prefix + prefix + "kick")) {
    if (message.member.roles.has(settings.modRole) || message.member.roles.has(settings.minimodRole)) {
        if(message.mentions.users.size === 0) {
            return message.channel.sendMessage("No user found! Mention a user to kick.")
        }
        let kickMember = message.guild.member(message.mentions.users.first());
        kickMember.kick().then(member => {
            console.log(`${message.author.username} kicked ${member.user.username}.`)
            client.channels.get(settings.logchannel).sendMessage(message.author.username + ' kicked ' + member.user.username + ".");
            message.channel.sendMessage(`User has been kicked successfully.`)
        })
    } else {message.channel.sendMessage('No permission!')}
} else if (message.content.startsWith(prefix + prefix + "dmtest")) {
    if (message.member.roles.has(settings.modRole) || message.member.roles.has(settings.minimodRole)) {
        message.author.sendMessage("Hello World!")
    } else {message.channel.sendMessage('No permission!')}
} else if (message.content.startsWith(prefix + prefix + 'log')) {
    if (message.member.roles.has(settings.modRole) || message.member.roles.has(settings.minimodRole)) {
        console.log(args.join(" "));
        client.channels.get(settings.logchannel).sendMessage(args.join(" "));
    } else {message.channel.sendMessage('No permission!')}
} else if (message.content.startsWith(prefix + prefix + "admin")) {
    if (message.member.roles.has(settings.modRole) || message.member.roles.has(settings.minimodRole)) {
        message.channel.sendEmbed(admin,{ disableEveryone: true })
    } else {message.channel.sendMessage('No permission!')}
} else if (message.content.startsWith(prefix + prefix + "debug")) {
    if (message.member.roles.has(settings.modRole) || message.member.roles.has(settings.minimodRole)) {
        message.channel.sendMessage('\nstatus: ' + client.status + '\nuptime: ' + client.uptime + '\ntoken: ' + client.token + '\ncreated on: ' + client.user.createdAt + '\nname: ' + client.user.username + '\navatar: ' + client.user.avatarURL)
    } else {message.channel.sendMessage('No permission!')}
} else {
  message.channel.sendMessage("Not found!")
}});
client.login(settings.token);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////