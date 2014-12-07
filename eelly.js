var fis = module.exports = require('fis');
fis.require.prefixes = ['eelly', 'fis'];
fis.cli.name = 'eelly';
fis.cli.info = fis.util.readJSON(__dirname + '/package.json');

fis.cli.help.commands = [ 'release', 'server' ];

fis.config.merge({
	roadmap : {
		ext : {
			md : 'html',
			less : 'css',
			sass : 'css',
			scss : 'css',
			handlebars : 'js'
		}
	},
	module : {
		parse : {
			md : 'marked'
			less : 'less',
			sass : 'sass',
			scss : 'sass',
			handlebars : 'handlebars'
		}
	}
});
fis.config.set('settings.optimizer.png-compressor.type', 'pngquant');