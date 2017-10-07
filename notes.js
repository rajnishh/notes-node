const fs = require('fs');

var fetchNotes = () => {
  try{
    var notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch(e){
return [];
  }
};

var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
  var notes = fetchNotes();
  var note = {
    title,
    body
  };

 var duplicateNotes = notes.filter((note) => note.title === title);

if(duplicateNotes.length ===0){
  notes.push(note);
  saveNotes(notes);
  return note;
}

}

var getAll = () => {
  return fetchNotes();
}
var readNote = (title) => {
  // console.log('Read note ', title);
  var fetchedNotes = fetchNotes();
  var returnedNotes = fetchedNotes.filter((note) => note.title === title);
  return returnedNotes[0];
}
var deleteNote = (title) => {
  console.log('Deleting note ', title);
  var notes = fetchNotes();
  var filteredNote = notes.filter((note) => note.title !== title);
  saveNotes(filteredNote);
  return filteredNote.length !== notes.length;
}

var logNote = (note) =>{
  debugger;
  console.log('---');
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
}

module.exports =  {
  addNote,
  getAll,
  readNote,
  deleteNote,
  logNote
}
