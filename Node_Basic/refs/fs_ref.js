const fs = require('fs')
const path = require('path')
//Fyle System

// fs.mkdir(path.join(__dirname, 'notes'), err => {
//     if(err) throw new Error(err)
//     console.log('Create new File')
// })

// fs.writeFile(
//     path.join(__dirname, 'notes', 'mynotes.txt'),
//     'Hello world',
//     err => {
//         if(err) throw err
//         console.log('Файл был создан')
//     }
// )

// fs.appendFile(
//     path.join(__dirname, 'notes', 'mynotes.txt'),
//     'From append file',
//     err => {
//         if(err) throw err
//         console.log('Файл был изменен')
//     }
// )

// fs.readFile(
//     path.join(__dirname,'notes', 'mynotes.txt'),
//     'utf-8',
//     (err, data) => {
//         if(err) throw err
//         console.log(data)
//         console.log('Файл был считан')
//     }
// )

// fs.mkdir(
//     path.join(__dirname, 'notesSecond'),
//     err => {
//         if(err) throw new Error(err)
//         console.log('Был создан файл notesSecond')
//     }
// )


fs.writeFile(
    path.join(__dirname, 'notesSecond', 'MyNotesSecond.txt'),
    'From append notes second',
    err => {
        if(err) throw err
        console.log('Файл был перезаписан')
    }
)

fs.rename(
    path.join(__dirname, 'notes', 'mynotes.txt'),
    path.join(__dirname,'notes', 'notes.txt'),
    err => {
        if(err)throw err
        console.log('Файл был изменен')
    }
)