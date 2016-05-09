module.exports = function(grunt) {

    // 1. Вся настройка находится здесь
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

	concat: {
		options: {
        separator: ';'
      },
		dist: {
			src: [
            'js/*.js', // Все JS в папке libs
            
			],
			dest: 'Release/js/production.js',
	    }
	},
   cssmin: {
		css: {
        src: ['css/*.css',],
        dest: 'Release/css/style.min.css'
		}
    },
	uglify: {
		build: {
			src: 'Release/js/production.js',
			dest: 'Release/js/production.min.js'
		}
	},
	imagemin: {
    dynamic: {
        files: [{
            expand: true,
            cwd: 'img/',
            src: ['**/*.{png,jpg,gif}'],
            dest: 'Release/img/'
        }]
    }
},
watch: {
    scripts: {
        files: ['js/*.js', 'css/*.css', 'img/*.{png,jpg,gif}'],
        tasks: ['concat', 'cssmin', 'uglify', 'imagemin'],
        options: {
            spawn: false,
        },
    }
}


    });
	
	    // 3. Тут мы указываем Grunt, что хотим использовать этот плагин
   grunt.loadNpmTasks('grunt-contrib-concat');
   grunt.loadNpmTasks('grunt-contrib-cssmin');
   grunt.loadNpmTasks('grunt-contrib-uglify');
	//concat image
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	
    // 4. Указываем, какие задачи выполняются, когда мы вводим «grunt» в терминале
    grunt.registerTask('default', ['concat', 'cssmin', 'uglify', 'imagemin','watch']);

};


