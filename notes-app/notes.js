const fs = require('fs');
const chalk = require('chalk');


// Function to add a new note
const addNote = (title, body) => {
    // Load existing notes from the file
    const notes = loadNotes();
    
    // Check for duplicate note titles
    const duplicateNote = notes.find((note) => note.title === title);

    // If no duplicate note found, add the new note
    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        });
        // Save the updated notes to the file
        saveNotes(notes);
        console.log(chalk.green.inverse('New note added!'));
    } else {
        console.log(chalk.red.inverse('Note title taken!'));
    }
}

// Function to remove a note
const removeNote = (title) => {
    // Load existing notes from the file
    const notes = loadNotes();
    // Filter out the note with the specified title
    const notesToKeep = notes.filter((note) => note.title !== title);

    // If a note was removed, save the updated notes to the file
    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('Note removed!'));
        saveNotes(notesToKeep);
    } else {
        console.log(chalk.red.inverse('No note found!'));
    }
}

// Function to list all notes
const listNotes = () => {
    // Load existing notes from the file
    const notes = loadNotes();
    console.log(chalk.inverse('Your notes'));
    // Display each note title
    notes.forEach((note) => {
        console.log(note.title);
    });
}

// Function to read a specific note
const readNote = (title) => {
    // Load existing notes from the file
    const notes = loadNotes();
    // Find the note with the specified title
    const note = notes.find((note) => note.title === title);

    // If the note is found, display its title and body
    if (note) {
        console.log(chalk.inverse(note.title));
        console.log(note.body);
    } else {
        console.log(chalk.red.inverse('Note not found!'));
    }
}

// Function to save notes to the file
const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

// Function to load notes from the file
const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
}

// Export all functions for use in other files
module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}