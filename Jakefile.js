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

desc('up load test to database');
task('upload_test_db', function (params) {
    console.log('Loading test database');
    console.log('TBI');
    // mongoimport --db knamean --collection codebook --type csv --headerline --file test/fixtures/db/codebook-translations.csv
    // https://javascriptexamples.info/code/jakefile-tutorial/ ??
});

desc('drop database');
task('drop_db', function (params) {
    console.log('Erasing all data from database');
    console.log('TBI');
});

desc('upload test data to elasticsearch');
task('upload_test_es', function (params) {
    console.log('Loading elasticsearch data');
    console.log('TBI');
});

desc('drop elasticsearch');
task('drop_es', function (params) {
    console.log('Erasing all data from elasticsearch');
    console.log('TBI');
});
