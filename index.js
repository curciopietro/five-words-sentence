const readline = require("readline");
const consola = require("consola");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askForWords() {
  rl.question("Inserisci una frase di 5 parole: ", (answer) => {
    let wordCount = answer.match(/(\w+)/g).length;
    console.log(wordCount);

    if (wordCount === 5) {
      consola.success("Ben fatto!");
      rl.close();
    } else {
      consola.error(
        `Mi dispiace, la tua frase contiene ${wordCount} parole. Ritenta!`
      );
      askForWords();
    }
    console.log(wordCount);
  });
}

askForWords();
