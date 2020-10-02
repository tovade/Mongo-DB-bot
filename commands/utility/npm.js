const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
  name: "npm",
  description: "Search packages on npm by their name",
  category: "Utility",
  async execute(client, message, args) {
    const query = args.join(" ");
    const data = await fetch(
      `http://registry.npmjs.com/-/v1/search?text=${query}&size=5`
    ).then((res) => res.json());

    const foundPackages = data.objects.map(({ package: pkg }) => pkg);

    const embed = new MessageEmbed()
      .setTitle("NPM Search")
      .setColor("BLUE")

    foundPackages.forEach((pkg) => {
      embed.addField(
        pkg.name,
        `
        **Version:** ${pkg.version}
        **Author:** ${pkg.publisher.username}
        [**View on npm**](${pkg.links.npm})
        `
      );
    });

    message.channel.send({ embed });
  },
};