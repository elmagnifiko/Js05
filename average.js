function average() {
  const notes = [20, 12, 8, 9];
    let somme = 0;
    for (let i = 0; i < notes.length; i++) {
      somme += notes[i];
    }
    const moyenne = somme / notes.length;
    return moyenne;
  }
  
  console.log(average());

  module.exports = average;