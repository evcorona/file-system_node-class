const fs = require("fs");

fs.copyFile("creado.txt", "copiado.txt", (error) => {
  if (error) {
    console.error("error: ", error);
    return;
  }
  console.log("Archivo copiado exitosamente");
});

