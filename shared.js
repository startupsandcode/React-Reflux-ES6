var path = require('path');
var fs = require('fs');
var dist = path.resolve(__dirname, 'dist');
var src = path.resolve(__dirname, 'src');

var filesToMove = [
    '/index.html',
    '/images',
    '/fonts'
];

//move files from src to dist
function moveFilesToDist(path) {
    if (Array.isArray(path)) {
        for (var i = 0; i < path.length; i++) {
            moveFilesToDist(path[i]);
        }
    } else {
        if (fs.existsSync(src + path)) {
            if (fs.lstatSync(src + path).isDirectory()) {
                var dir = fs.readdirSync(src + path);

                if (!fs.existsSync(dist + path)) {
                    fs.mkdirSync(dist + path);
                }

                for (var i = 0; i < dir.length; i++) {
                    var curItem = dir[i];
                    moveFilesToDist(path + '/' + curItem);
                }
            } else {
                fs.createReadStream(src + path).pipe(fs.createWriteStream(dist + path));
            }
        }
    }
}


if (!fs.existsSync(dist)) {
    fs.mkdirSync(dist);
}

moveFilesToDist(filesToMove);