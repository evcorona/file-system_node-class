const fs = require("fs");

fs.readdir("nuevoDir/", "utf8",(error,files) => {
  if (error) {
    console.error("error: ", error);
    return;
  }
  console.log("Directorio leido exitosamente: ", files);
});

