const PluginStructure = require(`${bbmcPath}/plugin/PluginStructure`);
const genplugin = require('./commands/genPlugin')

class Main extends PluginStructure {
    successfullyEnabled() {
		this.log.info("Plugin loaded!");
		this.server.commandsList.add(new genplugin());
	}
}

module.exports = Main;