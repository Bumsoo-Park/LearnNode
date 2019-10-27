var fs = require('fs');

fs.readFile('testFile.txt', function (err, data) {
                    if (err) throw err;

    console.log(data);
});