const fs = require('fs');

fs.readFile('data.txt', 'utf-8', (err,data) => {
    const updatedData = data.trim().replace(/\s{2,}/g,' ');
    console.log(updatedData);
    fs.writeFile('data.txt', updatedData, () => {
        console.log('File written');
    });
});