const express = require("express");
const app = express();

app.listen(3000);

app.get("/", (request, response) => {
  response.send("Hhello world!!");

  console.log(response);
});

app.get("/date", (request, response) => {
  response.send(`Today date is ${new Date()}`);
});

app.get("/file", (request, response) => {
  response.sendFile("./page.html", { root: __dirname });
});
