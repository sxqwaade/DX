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
                    'app/app.css' : ['<%= dirs.destpath%>*.css'],
                    'app/public/js/ctrl-concat.js':[
                        '<%= dirs.views %>/home/home.js',
                        '<%= dirs.views %>/brand/brand.js',
                        '<%= dirs.views %>/prolist/prolist.js',
                        '<%= dirs.views %>/prodetail/prodetail.js',
                        '<%= dirs.views %>/where/where.js',
                        '<%= dirs.views %>/explore/explore.js'
                    ],
                    'app/public/js/lib.js':[
                        '<%= dirs.public %>lib/flexible.min.js',
                        '<%= dirs.bower_components %>angular/angular.min.js',
                        '<%= dirs.bower_components %>angular-route/angular-route.min.js'
                    ]
                }
            }
        },
        sass: {                              // Task
            dist: {                            // Target
                options: {                       // Target options
                    style: 'expand'
                },
                files: {                         // Dictionary of files
                    '<%= dirs.destpath%>common.css': 'app/public/sass/common.scss',       // 'destination': 'source'
                    '<%= dirs.destpath%>home.css': 'app/views/home/home.scss'
                }
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
                    //中文ascii化，非常有用！防止中文乱码的神配置
                    ascii_only: true
                }
            },
            holder: {
                files: {
                    '<%= dirs.public %>/dest/app.min.css': ['<%= dirs.public%>/dest/app.css'],
                    '<%= dirs.public %>/lib/flexible.min.js': ['<%= dirs.public %>/lib/flexible.js'],
                    '<%= dirs.views %>/home/home.min.js': ['<%= dirs.views %>/home/home.js'],
                    '<%= dirs.views %>/brand/brand.min.js': ['<%= dirs.views %>/brand/brand.js'],
                    '<%= dirs.views %>/prolist/prolist.min.js': ['<%= dirs.views %>/prolist/prolist.js'],
                    '<%= dirs.views %>/prodetail/prodetail.min.js': ['<%= dirs.views %>/prodetail/prodetail.js'],
                    '<%= dirs.views %>/where/where.min.js': ['<%= dirs.views %>/where/where.js'],
                    '<%= dirs.views %>/explore/explore.min.js': ['<%= dirs.views %>/explore/explore.js'],
                    '<%= dirs.public %>js/ctrl-concat.min.js':['<%= dirs.public %>js/ctrl-concat.js']
                }
            }
        },
        watch:{
            scripts:{
                files:[
                    'app/views/**/*.scss'
                    ,'app/public/sass/*.scss'
                    ,'app/public/dest/*.css'
                    ,'app/public/**/*.js'
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
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['sass','concat:holder','uglify:holder']);


};