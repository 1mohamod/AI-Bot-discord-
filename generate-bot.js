const { SlashCommandBuilder } = require('discord.js');
module.exports = {
  data: new SlashCommandBuilder()
    .setName('generate-bot')
    .setDescription('ينشئ لك كود بوت تكت أو إدارة')
    .addStringOption(option =>
      option.setName('type')
        .setDescription('نوع البوت')
        .setRequired(true)
        .addChoices(
          { name: 'تكت', value: 'ticket' },
          { name: 'إدارة', value: 'admin' }
        )),
  async execute(interaction) {
    const type = interaction.options.getString('type');
    await interaction.deferReply();

    let code = "";
    if (type === "ticket") {
      code = "🎟️ هذا كود بوت تكت بسيط:
```js
client.on('interactionCreate', i => {
  if (i.customId === 'create_ticket') {
    i.guild.channels.create({ name: `ticket-${i.user.username}` });
  }
});```";
    } else if (type === "admin") {
      code = "🛡️ كود بوت إدارة:
```js
client.on('messageCreate', msg => {
  if (msg.content === '!ban') {
    if (msg.member.permissions.has('BanMembers')) {
      const user = msg.mentions.users.first();
      msg.guild.members.ban(user);
    }
  }
});```";
    }

    await interaction.editReply(code);
  },
};
