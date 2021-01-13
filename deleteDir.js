const fs = require("fs");

fs.rmdir("nuevoDir/",(error) => {
  if (error) {
    console.error("error: ", error);
    return;
  }
  console.log("Directorio eliminado exitosamente");
});

