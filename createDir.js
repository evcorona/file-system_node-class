const fs = require("fs");

fs.mkdir("nuevoDir/", (error) => {
  if (error) {
    console.error("error: ", error);
    return;
  }
  console.log("Directorio creado exitosamente");
});

