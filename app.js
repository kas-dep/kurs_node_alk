const express = require("express");
const functions = require("./functions");
const path = require('path')
const port = 3000;
const app = express();

const x = 11;
const sample = () => 'jakiś podtytuł'

app.set("view engine", 'hbs')
app.use('/assets', express.static(path.join(__dirname, "./assets")));
app.use('/js', express.static(path.join(__dirname, "./js")));


app.get("/", function (req, res) {
  res.render("index", {
      pageTitle: '21.02.2021',
      subtitle: functions.someText,
      subsubtitle: x == 10 ? sample() : 'hello'
  })
});

app.get("/about", function (req, res) {
  res.send("Strona o mnie");
});

app.listen(port, (err) => {
  if (err) {
    return console.log(`Błąd: ${err}`);
  }
  console.log(`Strona działa a porcie ${port}`);
});
