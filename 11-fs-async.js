//async
const {readFileSync, writeFileSync, readFile, writeFile} = require('fs')

readFile('./content/first.txt', 'utf8', (err,result)=> {
    if(err) {
        console.log(err);
        return null;
    }
	console.log(result);
    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result) => {
        //Read the second file
        const second = result;
    writeFile('./content/result-async.txt', `The result is : ${first}, ${second}`, (err, result) => {
        if (err) {
            console.log(err);
            return null;
        }
        console.log(result);
    })
    })
})
