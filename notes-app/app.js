// Import the chalk module for styling console output
const chalk = require('chalk');

// Import the yargs module for command-line arguments parsing
const yargs = require('yargs');

// Import the notes module
const notes = require('./notes.js');

// Customize yargs version
yargs.version('1.1.0');

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true, // The option is required
            type: 'string' // The option expects a string value
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        // Call the addNote function from the notes module with title and body arguments
        notes.addNote(argv.title, argv.body);
    }
});

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        // Call the removeNote function from the notes module with title argument
        notes.removeNote(argv.title);
    }
});

// Create list command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler() {
        // Call the listNotes function from the notes module
        notes.listNotes();
    }
});

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        // Call the readNote function from the notes module with title argument
        notes.readNote(argv.title);
    }
});

// Parse the command-line arguments
yargs.parse();
