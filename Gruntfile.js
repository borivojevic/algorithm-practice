module.exports = function (grunt) {
	grunt.loadNpmTasks("grunt-express");
	grunt.loadNpmTasks("grunt-open");
	grunt.loadNpmTasks("grunt-contrib-watch");

	grunt.initConfig({
		express: {
			all: {
				options:{
					port: 9000,
					hostname: "0.0.0.0",
					bases: ["web/", "exercises/"],
					livereload: true
				}
			}
		},
		open: {
			all: {
				path: "http://localhost:<%= express.all.options.port%>"
			}
		},
		watch:{
			all: {
				files: ["index.html", "*.js"],
				options: {
					livereload: true,
				},
			}
		}
	});
	grunt.registerTask("server",["express", "open", "watch"]);
};
