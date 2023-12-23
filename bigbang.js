const fs = require('node:fs/promises');
async function model() {
    const numbers = [];
    for (let i = 1; i <= 100; i++) {
        if (i % 5 === 0 && i % 3 === 0) {
            numbers.push("BIGBANG");
        } else if (i % 5 === 0) {
            numbers.push("BANG");
        } else if (i % 3 === 0) {
            numbers.push("BIG");
        } else {
            numbers.push(i.toString());
        }
    }

    try {
        await fs.writeFile(`${__dirname}/output.json`, JSON.stringify(numbers));
    } catch (err) {
        console.error(err);
    }

    return numbers;
}

model();
