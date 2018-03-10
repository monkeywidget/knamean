task('default', function (params) {
    jake.Task['run_dev_server'].invoke();
});

var nodemon = require('nodemon');

desc('Run the server in development mode');
task('run_dev_server', function (params) {
    console.log('Running server in development mode');
    // node_modules/nodemon/bin/nodemon.js   app/server.js localhost 8080
    nodemon({
        ext: "sh bat json js html css hbs less scss",
        exec: "app/server.js"
    }).on("restart", function (files) {
        console.log("*** Restarting due to", files);
    });
});
