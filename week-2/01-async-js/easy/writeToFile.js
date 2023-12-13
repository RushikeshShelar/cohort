const fs = require('fs');

fs.writeFile('data.txt', 'Okayyyyyyyyyy', () => {
    console.log('File written');
});