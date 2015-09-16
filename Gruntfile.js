module.exports = function(grunt) {
//  require('jit-grunt')(grunt);
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({
    less: {
      development: {
/*        options: {
          compress: true,
          yuicompress: true,
          optimization: 2
        },
        */
        files: {
          "public/css/style.css": "less/main.less" // destination file and source file
        }
      }
    },
    watch: {
      styles: {
        files: ['less/**/*.less'], // which files to watch
        tasks: ['less'],
        options: {
          nospawn: true
        }
      }
    }
  });

  grunt.registerTask('default', ['less', 'watch']);
};
