const fs = require('fs'); // File system
const path = require('path');

// create a folder
// fs.mkdir(path.join(__dirname, 'notes'), err => {
//     if (err) {
//         throw err; // or throw new Error(err)
//     }

//     console.log('The folder was created');
// });

// create a file
// fs.writeFile(
//     path.join(__dirname, 'notes', 'my_notes.txt'),
//     'Add some text',
//     err => {
//         if (err) {
//             throw new Error(err);
//         }

//         console.log('The file was created');
//     }
// );

// update file
// fs.appendFile(
//     path.join(__dirname, 'notes', 'my_notes.txt'),
//     ' // add additional text',
//     err => {
//         if (err) {
//             throw new Error(err);
//         }

//         console.log('The file was updated');
//     }
// );

// read files
// fs.readFile(
//     path.join(__dirname, 'notes', 'my_notes.txt'),
//     'utf-8', // 2 variant
//     (err, data) => {
//         if (err) {
//             throw new Error(err);
//         }

//         // console.log('The text from file', Buffer.from(data).toString()); // 1 variant
//         console.log('The text from file', data); // 2 variant
//     }
// );

// rename file
fs.rename(
    path.join(__dirname, 'notes', 'my_notes.txt'),
    path.join(__dirname, 'notes', 'notes.txt'),
    err => {
        if (err) {
            throw new Error(err);
        }

        console.log('The file was renamed');
    }
)