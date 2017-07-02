module.exports = function(grunt) {

  grunt.initConfig({
    sass: {
      dist: {
          files: [
              {outputstyle: '', expand: true, cwd: 'src/1_root', src: ['root.scss'], dest: 'dist/modules/1_root', ext: '.css'},
              {outputstyle: '', expand: true, cwd: 'src/3_branches', src: ['branches.scss'], dest: 'dist/modules/3_branches', ext: '.css'},
            //   {outputstyle: '', expand: true, cwd: 'src/7_characteristics_helpers', src: ['characteristics_helpers.scss'], dest: 'dist/modules/7_characteristics_helpers', ext: '.css'},
              {outputstyle: '', expand: true, cwd: 'src/7_characteristics_helpers', src: ['box_offset_helpers.scss'], dest: 'dist/modules/7_characteristics_helpers', ext: '.css'},
              {outputstyle: '', expand: true, cwd: 'src/7_characteristics_helpers', src: ['contextual_backgrounds_helpers.scss'], dest: 'dist/modules/7_characteristics_helpers', ext: '.css'},
              {outputstyle: '', expand: true, cwd: 'src/7_characteristics_helpers', src: ['contextual_colors_helpers.scss'], dest: 'dist/modules/7_characteristics_helpers', ext: '.css'},
              {outputstyle: '', expand: true, cwd: 'src/7_characteristics_helpers', src: ['font_size_helpers.scss'], dest: 'dist/modules/7_characteristics_helpers', ext: '.css'},
              {outputstyle: '', expand: true, cwd: 'src/7_characteristics_helpers', src: ['line_height_helpers.scss'], dest: 'dist/modules/7_characteristics_helpers', ext: '.css'},
              {outputstyle: '', expand: true, cwd: 'src/7_characteristics_helpers', src: ['text_helpers.scss'], dest: 'dist/modules/7_characteristics_helpers', ext: '.css'},
              {outputstyle: '', expand: true, cwd: 'src/7_characteristics_helpers', src: ['font_weight_helpers.scss'], dest: 'dist/modules/7_characteristics_helpers', ext: '.css'},
              {outputstyle: '', expand: true, cwd: 'src/7_characteristics_helpers', src: ['image_helpers.scss'], dest: 'dist/modules/7_characteristics_helpers', ext: '.css'},
              {outputstyle: '', expand: true, cwd: 'src/7_characteristics_helpers', src: ['float_helpers.scss'], dest: 'dist/modules/7_characteristics_helpers', ext: '.css'},
              {outputstyle: '', expand: true, cwd: 'src/7_characteristics_helpers', src: ['display_helpers.scss'], dest: 'dist/modules/7_characteristics_helpers', ext: '.css'},
              {outputstyle: '', expand: true, cwd: 'src/5_elements', src: ['elements.scss'], dest: 'dist/modules/5_elements', ext: '.css'}
          ]
      }
    },

    comments: {
        css: {
            options: {
                singleline: true,
                multiline: true
            },
            src: [
                'dist/modules/1_root/*.css',
                'dist/modules/3_branches/*.css',
                'dist/modules/5_elements/*.css',
                'dist/modules/7_characteristics_helpers/*.css'
            ]
        }
    },

    // concat: {
    //   apps: {
    //       src: 'lib/modules/*.css',
    //       dest: 'lib/dist/tinycsshelpers.css'
    //   }
    // },
    //
    // cssmin: {
    //   minify: {
    //     expand: true,
    //     cwd: 'lib/dist',
    //     src: ['*.css', '!*.min.css'],
    //     dest: 'lib/dist',
    //     ext: '.min.css'
    //   },
    //   release: {
    //     expand: true,
    //     cwd: 'lib/dist',
    //     src: ['*.css', '!*.min.css'],
    //     dest: 'lib/dist',
    //     ext: '.min.css'
    //   }
    // },
    //
    // copy: {
    //     main: {
    //         files: [
    //           {expand: true, cwd: 'sources/fonts/', src: ['**'], dest: 'lib/dist/fonts'}
    //         ],
    //     },
    // },

    watch: {
      sass: {
          files: '**/*.scss',
          tasks: ['sass'],
      },
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-sass');
  // grunt.loadNpmTasks('grunt-contrib-concat');
  // grunt.loadNpmTasks('grunt-contrib-cssmin');
  // grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-stripcomments');

  // Default task.
  grunt.registerTask('default', [
    'sass',
    'comments'
    // 'concat',
    // 'cssmin:minify',
    // 'cssmin:release',
    // 'copy'
  ]);
  grunt.registerTask('reload', ['watch']);

};
