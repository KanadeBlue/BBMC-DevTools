const PluginStructure = require(`${bbmcPath}/plugin/PluginStructure`);

class Main extends PluginStructure {
    successfullyEnabled() {
		this.log.info("Plugin loaded!");
		this.log.info("Author: " + this.description.author);
	}
}

module.exports = Main;