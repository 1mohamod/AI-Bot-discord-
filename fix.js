const { SlashCommandBuilder } = require('discord.js');
module.exports = {
  data: new SlashCommandBuilder()
    .setName('fix')
    .setDescription('أرسل كود فيه خطأ وراح أصلحه')
    .addStringOption(option =>
      option.setName('code').setDescription('ضع الكود مع الخطأ').setRequired(true)),
  async execute(interaction) {
    const code = interaction.options.getString('code');
    await interaction.deferReply();

    let reply = "";
    if (code.includes("console.log(") && !code.includes(";")) {
      reply = "📌 شكلك نسيت `;` في نهاية `console.log`. جرب كذا:
```js
console.log("Hello World");```";
    } else {
      reply = "🧠 الكود استلمته، لكن ما عرفت الخطأ بالضبط. تأكد من وضوح المشكلة.";
    }

    await interaction.editReply(reply);
  },
};
