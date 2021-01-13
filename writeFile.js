/*
Comandos terminal
mkdir file-system
npm init
touch writeFile.js
code .
*/

const fs = require("fs");

fs.writeFile("creado.txt", "Hola desde node :D", "utf8", (error) => {
  if (error) {
    console.error("error: ", error);
    return;
  }
  console.log("Archivo escrito exitosamente");
});
