// import the module to find a string inside the files
const findInFiles = require('find-in-files');

const currentPath = process.cwd();
const type = process.argv[2] // the third argument
const stringToFind = process.argv[3] // the fourth argument

if(process.argv.length == 2){
    console.log("USAGE: node search [EXT] [TEXT]")
}else{
    findInFiles.find(stringToFind, '.', `.${type}$`)
    .then(function(results) {
        for (var result in results) {// res is an object with the details about a file with the string
            var res = results[result];// result is the partial path to the file
            console.log(currentPath +'\\' + result);// \\ = \
        }

        if(result === undefined){
            console.log("No file was found")
        }
    });
}



