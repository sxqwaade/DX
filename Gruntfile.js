module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        dirs: {
            destpath:'app/public/dest/',
            public:'app/public/',
            views:'app/views/',
            bower_components:'app/bower_components/',
            root: ''
        },
        concat: {
            options: {
                stripBanners: true,
                banner: '/** \n' +
                ' * @Description: <%= pkg.name%> \n' +
                ' * @author: <%= pkg.author%> \n' +
                ' * @Update: <%= grunt.template.today("yyyy-mm-dd HH:mm") %> \n' +
                ' */ \n\n'
            },
            holder:{
                files: {
                    '<%= dirs.public %>/app.css' : ['<%= dirs.bower_components %>angular-loading-bar/build/loading-bar.min.css','<%= dirs.bower_components %>angular-carousel/dist/angular-carousel.min.css','<%= dirs.destpath%>/common.css','<%= dirs.destpath%>/home.css','<%= dirs.destpath%>/brand.css']
                    /*,'app/public/js/ctrl-concat.js':[
                        '<%= dirs.views %>/!**!/!*.min.js'
                    ]*/
                    /*,'app/public/js/lib.js':[
                         '<%= dirs.bower_components %>/zepto/zepto.min.js'
                        ,'<%= dirs.public %>lib/flexible.min.js'
                        ,'<%= dirs.bower_components %>angular/angular.min.js'
                        ,'<%= dirs.bower_components %>angular-route/angular-route.min.js'
                        ,'<%= dirs.bower_components %>angular-animate/angular-animate.min.js'
                        ,'<%= dirs.bower_components %>angular-loading-bar/build/loading-bar.min.js'
                        ,'<%= dirs.bower_components %>angular-touch/angular-touch.min.js'
                        ,'<%= dirs.bower_components %>angular-carousel/dist/angular-carousel.min.js'
                    ]*/
                }
            }
        },
        sass: {                              // Task
            dist: {                            // Target
                options: {                       // Target options
                    style: 'expand',
                    noCache:true
                },
                files: {                         // Dictionary of files
                    '<%= dirs.destpath%>common.css': 'app/public/sass/common.scss',       // 'destination': 'source'
                    '<%= dirs.destpath%>home.css': 'app/views/home/home.scss',
                    '<%= dirs.destpath%>brand.css': 'app/views/brand/brand.scss'
                }
            }
        },
        cssmin: {
            options: {
                report: 'gzip',
                banner: '/** \n' +
                ' * @Description: <%= pkg.name%> \n' +
                ' * @author: <%= pkg.author%> \n' +
                ' * @Update: <%= grunt.template.today("yyyy-mm-dd HH:mm") %> \n' +
                ' */ \n\n'
            },
            minify: {
                expand: true,
                cwd: 'app/public/dest/',
                src: ['*.css'],
                dest: 'app/public/dest/',
                ext: '.min.css'
            }
        },
        uglify: {
            options: {
                report: 'gzip',
                banner: '/** \n' +
                ' * @Description: <%= pkg.name%> \n' +
                ' * @author: <%= pkg.author%> \n' +
                ' * @Update: <%= grunt.template.today("yyyy-mm-dd HH:mm") %> \n' +
                ' */ \n\n',
                beautify: {
                    //����ascii�����ǳ����ã���ֹ���������������?
                    ascii_only: true
                }
            },
            holder: {
                files: {
                    '<%= dirs.public %>/lib/flexible.min.js': ['<%= dirs.public %>/lib/flexible.js'],
                    '<%= dirs.views %>/home/home.min.js': ['<%= dirs.views %>/home/home.js'],
                    '<%= dirs.views %>/brand/brand.min.js': ['<%= dirs.views %>/brand/brand.js'],
                    '<%= dirs.views %>/prolist/prolist.min.js': ['<%= dirs.views %>/prolist/prolist.js'],
                    '<%= dirs.views %>/prodetail/prodetail.min.js': ['<%= dirs.views %>/prodetail/prodetail.js'],
                    '<%= dirs.views %>/where/where.min.js': ['<%= dirs.views %>/where/where.js'],
                    '<%= dirs.views %>/explore/explore.min.js': ['<%= dirs.views %>/explore/explore.js']
                }
            }
        },
        watch:{
            scripts:{
                files:[
                    'app/views/**/*.scss'
                    ,'app/public/sass/*.scss'
                    ,'app/public/dest/*.min.css'
                    /*,'app/public/!**!/!*.js'*/
                    ,'app/views/**/*.js'
                ],
                tasks:['default'],
                options: {
                    spawn: false
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['sass','cssmin','concat:holder']);


};