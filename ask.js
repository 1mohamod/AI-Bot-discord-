const { SlashCommandBuilder } = require('discord.js');
module.exports = {
  data: new SlashCommandBuilder()
    .setName('ask')
    .setDescription('اطرح سؤال برمجي على الذكاء الاصطناعي')
    .addStringOption(option =>
      option.setName('question').setDescription('ما هو سؤالك؟').setRequired(true)),
  async execute(interaction) {
    const question = interaction.options.getString('question');
    await interaction.deferReply();
    let reply = "";

    if (question.includes("async") || question.includes("await")) {
      reply = "🔁 `async/await` تستخدم لتنفيذ التعليمات البرمجية بطريقة غير متزامنة في جافاسكريبت. مثال:
```js
async function getData() {
  const res = await fetch('url');
  const data = await res.json();
}```";
    } else {
      reply = "📘 استلمت سؤالك! حاول توضيحه أكثر أو انتظر التحديثات القادمة للردود الذكية.";
    }

    await interaction.editReply(reply);
  },
};
