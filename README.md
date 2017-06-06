# NUM_ERROR
This discord bot is a version of Porygon-A, named NUM_ERROR. This bot allows you to add Pokédex entries for Fakemon.
# About
NUM_ERROR is able to bring information forward from your own personal Pokédex as well as sending images that correspond to your entries.
Written by Kisu-Amare#7754 with help from Gigabars.
This bot uses discord.js, the large platform for creating discord bots in javascript: http://discord.js.org
# Installation
To install this bot and use it on your server, you need to first create a bot user. Head over to https://discordapp.com/developers/applications/me and create a new app, once you have created the app, attach a bot user and copy the token generated.

Now that you have a bot user, it's time for installation. To start, you need to have node.js installed. Clone this repository into a directory and use ``npm install discord.js`` and ``npm install to-zalgo`` inside of the node_modules folder to install discord.js and to-zalgo. Once you have completed this, open settings.json inside of num_error and paste your token into the token field, you may also configure your prefix and bot name/description here as well.

After you have put your token into the settings file, you can now launch the bot by executing start.bat (Windows) or start.sh (Bash).
When the bot is online, you can use -listids in your server to list your roles, you need at least three roles (owner, moderator, mini-moderator). Line up the roleids with the names and copy them into settings.json under the minimodrole, modrole, and owner fields. The bot can't run correctly without the nessasary channels, create two channels, one for bot logs and one for admins. Use -cid in both of those channels and place their ids into the logchannel and adminchannel fields in settings.json. 

The bot should be fully configured for usage now, it's a good idea to change the about and server fields in settings.json to provide info.

To add information to the dex, you can head into num_error.js and change lines related to artwork, abilities, dex entries, and also meme commands. fakemon.json and ability.json have example lines to make it easier to know how to format.

# Support
I offer direct support via Discord, you can add my DiscordTag, Kisu-Amare#7754 if you need help. If there is a problem within discord.js, please use their Discord server on the website.
