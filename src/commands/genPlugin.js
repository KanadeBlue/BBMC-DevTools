const Command = require(`${bbmcPath}/command/Command`);
const fs = require("fs-extra");

class TestCMD extends Command {

	constructor() {
		super("genplugin", "Generate a Plugin.");
	}

	async run(sender, writtenCommand, args) {
        fs.copyFileSync('../data', '../../PluginData');
        sender.message("Your plugin has been generated successfully!");
	}
}

module.exports = TestCMD;
