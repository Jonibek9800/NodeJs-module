const fs = require("fs/promises");
const path = require("path");
// const chalk = require("chalk")

const notesPath = path.join(__dirname, "db.json")

// const notes = []
async function addNote(title) {
    // const notes = require("./db.json")
    // const notes = Buffer.from(buffer).toString("utf-8")
    const notes = await getNotes()
    // console.log(notes)
    const note = {
        title,
        id: Date.now().toString()
    }
    notes.push(note)
    await fs.writeFile(notesPath, JSON.stringify(notes))
    // console.log(chalk.green.inverse("Notes google"))
}

// addNote("test")

async function getNotes() {
    return require("./db.json")
    const notes = await fs.readFile(notesPath, {encoding: "utf-8"})
    return Array.isArray(JSON.parse(notes)) ? JSON.parse(notes) : []
}

async function setNotes(id) {
    const notes = require("./db.json")
    const newNotes = notes.filter(note => note.id !== id);
    await fs.writeFile(notesPath, JSON.stringify(newNotes))

}

async function printNotes () {
    const notes = await getNotes()

    // console.log(chalk.bgBlue("Here is the list of notes: "))
    // notes.forEach(note => {
    //     console.log(chalk.blue(note.title, note.id))
    // })
    notes.forEach(note => {
        console.log(note.id, note.title)
    })
}

module.exports = {
    addNote, printNotes, setNotes
}