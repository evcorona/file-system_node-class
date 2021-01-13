const fs = require("fs");

fs.readFile("creado.txt", "utf8", (error, data) => {
  if (error) {
    console.error("error: ", error);
    return;
  }
  console.log("Archivo leido exitosamente: ", data);
});


/*
- appendFile()  agrega un file
- unlink()      borra un file
- copyFile()    copia un file
- metodo para crear directorios   mkdir()
- metodo para leer directorios
- metodo para borrar directorios
- cada uno en un archivo diferente
*/