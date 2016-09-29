'use strict';

module.exports = function(grunt){

  grunt.initConfig({
    clean: {
      init:['app/dist'],
      end:[
        'app/dist/js/libs.min.js',
        'app/dist/js/scripts.min.js',
        'app/dist/css/lib.min.css',
        'app/dist/css/style.min.css'
      ]
    },
    concat:{
      // Concat css
      concatCSS:{
        src:[
          'app/vendor/material-design-iconic-font/dist/css/material-design-iconic-font.min.css',
          'app/vendor/bootstrap/dist/css/bootstrap.min.css'
        ],
        dest:'app/dist/css/lib.min.css'
      },
      allCSS:{
        src:[
          'app/dist/css/lib.min.css',
          'app/dist/css/style.min.css'
        ],
        dest:'app/dist/css/main.min.css'
      },
      // Concat Libs JS
      concatJS:{
        src:[
          'app/vendor/jquery/dist/jquery.min.js',
          'app/vendor/bootstrap/dist/js/bootstrap.min.js',
          'app/vendor/angular/angular.min.js'
        ],
        dest:'app/dist/js/libs.min.js'
      },
      libsJS:{
        src:[
          'app/dist/js/libs.min.js',
          'app/dist/js/scripts.min.js',
        ],
        dest: 'app/dist/js/main.min.js'
      }
    },
    cssmin:{
      dist:{
        src:['app/css/style.css'],
        dest:'app/dist/css/style.min.css'
      }
    },
    copy:{
      fonts:{
        expand: true,
        cwd:'app/fonts/',
        src:['**'],
        dest:'app/dist/fonts/'
      },
      images:{
        expand: true,
        cwd:'app/images/',
        src:['**'],
        dest:'app/dist/images/'
      }
    },
    uglify: {
      options: {
        mangle: false
      },
      /**
      * Concat scripts personal
      */
      dist:{
        src:[
          'app/js/script.js',
          'app/js/component.js'
        ],
        dest:'app/dist/js/scripts.min.js'
      }
    },
    htmlmin:{
      options: {
        removeComments: true,
        collapseWhitespace: true
      },
      template:{
        expand: true,
        cwd:'app/template/',
        src:['**'],
        dest:'app/dist/template/'
      },
      dist:{
        src:['app/index-prod.html'],
        dest:'app/dist/index.html'
      },
    }
  });
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('dist', [
    'clean:init',
    'concat:concatCSS',
    'concat:concatJS',
    'cssmin',
    'uglify',
    'htmlmin',
    'copy',
    'concat:libsJS',
    'concat:allCSS',
    'clean:end']);
};
