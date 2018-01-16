const fs = require('fs');
const path = require('path');

const isProd = process.env.PROD !== 'false';
const destPath = path.resolve(__dirname, `${isProd ? '../../.eslintrc.js' : './.eslintrc.test.js'}`);

(async function copyFile() {
    // Copying the file
    fs.createReadStream('./.eslintrc.js').pipe(fs.createWriteStream(destPath));
})();
