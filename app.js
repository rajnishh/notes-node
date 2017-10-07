
const notes = require('./notes');
const _ = require('lodash');
const yargs = require('yargs');
const fs = require('fs');

const argv = yargs.argv;

let command = argv._[0];
if(command === 'add'){
  var note = notes.addNote(argv.title, argv.body);
  if(note){
    console.log('Note created');
    notes.logNote(note);
  }else{
    console.log('Note title taken');
  }
}
else if(command === 'list'){
    var allNotes = notes.getAll();
    console.log(`Prinitng ${allNotes.length} note(s).`);
    allNotes.forEach((note) => notes.logNote(note));
    //console.log(JSON.stringify(allNotes));
}else if(command === 'read'){
  var note = notes.readNote(argv.title);
  if(note){
    console.log('Note found');
    notes.logNote(note);
  }else{
    console.log('Note not found');
  }
} else if(command === 'remove'){
  var noteRemoved = notes.deleteNote(argv.title);
  var message =  noteRemoved ? 'Note was removed' : 'No note found';
  console.log(message);
}
else {
  console.log('Command not recognized');
}
