const fs = require("fs");


fs.appendFile("creado.txt", "Agregando data desde node", "utf8", (error) => {
    if (error) {
      console.error("error: ", error);
      return;
    }
    console.log("Data agregada exitosamente");
  });