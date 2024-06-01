/**
 *? Напиши клас Notes який управляє колекцією нотаток у
 *? властивості items.
 *? Додай класу статичний метод Priority,
 *? який буде повертати об'єкт із пріоритетами.
 *? Нотатка - це об'єкт із властивостями text і priority.
 *? Додай методи addNote(note), removeNote(text)
 *? updatePriority(text, newPriority)
 */

class Notes {
  static Priority() {
    return { HIGHT: "hight", LOW: "low" };
  }
  constructor() {
    this.items = [];
  }
  addNote(note) {
    this.items.push(note);
  }
  removeNote(noteName) {
    this.items = this.items.filter((note) => noteName !== note.text);
  }
    updatePriority(text, newPriority) {
        const findElement = this.items.find(note => text === note.text);
        if (!findElement) return;
        findElement.priority = newPriority;
    }
    
}






const note1 = new Notes();
note1.addNote({ text: "Note1", priority: Notes.Priority().LOW });
note1.addNote({ text: "Note2", priority: Notes.Priority().LOW });
note1.addNote({ text: "Note3", priority: Notes.Priority().LOW });
note1.removeNote("Note1");
note1.updatePriority("Note4", Notes.Priority().HIGHT);
console.log(note1);