const fs    =   require('fs')
const chalk =   require('chalk')

const getNotes = () => {
    return "Your Notes..."
}

const addNote = (title, body) => {
    const notes = loadNotesFile()
    // array.filter() creates an array with the found array objects with the condition
    // so if title matches > it will create an array with that array objects in duplicateNotes(usually 1)
    const duplicateNotes = notes.filter((note) => note.title === title)

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green('"' + title + '"' + ' note added :)'))
    } else {
        console.log(chalk.red('"' + title + '"' + ' title is taken :('))
    }
}

const removeNote = (title) => {
    const notes = loadNotesFile()
    // array.filter() creates an array with the found array objects with the condition
    // so if title doesn't matches > it will create an array with that array objects in notesToKeep(usually all but without the one that is being deleted)
    const notesToKeep = notes.filter((note) => note.title !== title)

    if (notes.length > notesToKeep.length) {
        saveNotes(notesToKeep)
        console.log(chalk.green('"' + title + '"' + ' removed :)'))
    } else {
        console.log(chalk.red('"' + title + '"' + ' note not found :('))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotesFile = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch(e) {
        return []
    }
}

module.exports = {
    getNotes:   getNotes,
    addNote:    addNote,
    removeNote: removeNote
}