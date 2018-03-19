// node bin/bulk_load_es.js -p 800 -h foo.com -f filename.json

const PORT_DEFAULT = 9200;
const HOST_DEFAULT = 'localhost';

function usage() {
  // console.log("bulk_load_es.js [-p 800] [-h foo.com] (-f filename.txt | -j jsonfile.json)");
  console.log("bulk_load_es.js [-p 800] [-h foo.com] -f filename.txt");
  console.log(`  -p port (default ${PORT_DEFAULT})`);
  console.log(`  -h host (default ${HOST_DEFAULT})`);
  console.log('  -f filename.txt');
  // console.log('  -j jsonfile.json');
  process.exit(1);
}

//////////////////////////
// Parse CLI parameters //
//////////////////////////

const argv = require('minimist')(process.argv.slice(2));
const port = argv['p'] || PORT_DEFAULT;
const host = argv['h'] || HOST_DEFAULT;
const text_filename = argv['f'];
// const json_filename = argv['j'];

if ((typeof text_filename === "string") && (text_filename.length > 0)) {
} else {
    usage();
}

console.log(`ES port ${port}`);
console.log(`ES host ${host}`);
// console.log(`JSON file ${json_filename}`);
console.log(`Text file ${text_filename}`);

///////////////////////
// Load file as JSON //
///////////////////////

function sendOne(text) {

}

require('fs').readFileSync(text_filename).toString().split('\n\n').forEach(function (line) {
    console.log(`got line: ${line}`);
    // sendOne(line);
});

// var https = require('https')
//
// var options = {
//     "host": "localhost",
//     "path": "????" + req.body.request_id,
//     "method": "PUT",
//     "headers": {
//         "Authorization" : "Bearer " + req.body.bearer_token,
//         "Content-Type" : "application/json",
//     }
// }
//
// callback = function(response) {
//     var str = ''
//     response.on('data', function(chunk){
//         str += chunk
//     })
//
//     response.on('end', function(){
//         console.log(str)
//     })
// }
//
// var body = JSON.stringify({
//     status: 'accepted'
// });
// https.request(options, callback).end(body);