//create requirements for storage of notes
//util coming from node modules
const util = require('util');
const fs = require('fs');

//api used for creating unique ID is UUID V-4 https://www.uuidtools.com/api/generate/v4
const { v4: uuidv4 } = require('uuid');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

//what file needs to do
class Store {
    read() {
        return readFile('db/db.json')
    }

    write(note) {
        return writeFile('db/db.json', JSON.stringify(note));
    }

    getNotes() {
        return this.read().then((notes) => {
            let parsedNotes;
            
            try {
                parsedNotes = [].concat(JSON.parse(notes));
            } catch (err) {
                parsedNotes = [];
            }

            return parsedNotes;
        });
    }


    //requiremnts to add note
    addNote(note) {
        const { title, text } = note;

        //adding the unique id to the note
        const newNote = { title, text, id: uuidv4() };

        return this.getNotes().then((notes) => [...notes, newNote])
            .then((update) => this.write(update)).then(() => newNote);
    }

    removeNote(id) {
        return this.getNotes().then((notes) => notes.filter((note) => note.id !== id))
            .then((findNotes) => this.write(findNotes));
    }
}
module.exports = new Store();