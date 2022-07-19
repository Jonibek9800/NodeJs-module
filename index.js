const yargs = require("yargs");
const pkg = require("./package.json")
const { addNote, printNotes, setNotes } = require("./notes.contreller")

yargs.version(pkg.version)

yargs.command({
    command: "add",
    describe: "Add new note to list",
    builder: {
        title: {
            type: "string",
            describe: "note title",
            demandOption: true
        }
    },
    handler({ title }) {
        addNote(title)
        console.log("Add Command", title)
    }
})

yargs.command({
    command: "list",
    describe: "Print all notes",
    async handler() {
        // const notes = await getNotes()
        console.log("Here is the list of notes:");
        await printNotes();
    }
})

yargs.command({
    command: "remove",
    describe: "Remove note by id",
    async handler() {
        console.log("Remove note");
        await setNotes("1658153512071")
    }
})

yargs.parse();
