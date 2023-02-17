const notes = [20, 12, 8, 9];
function average(notes) {
    let somme = 0;
    for (let i = 0; i < notes.length; i++) {
      somme += notes[i];
    }
    const moyenne = somme / notes.length;
    return moyenne;
  }
  
  console.log(average(notes));  
module.exports = average;
