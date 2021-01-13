const fs = require("fs");

fs.unlink("creado.txt", (error) => {
  if (error) {
    console.error("error: ", error);
    return;
  }
  console.log("Archivo eliminado exitosamente");
});
