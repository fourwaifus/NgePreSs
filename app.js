const express = require("express");
const app = express();
const Port = 3000;

// aplikasi di init bang!
app.use(express.static("app"));
app.set("view engine", "ejs");
app.set("views", "./app");

//  router aplikasi
app.get("/", (req, res) => {
  res.render("doc/index.html.ejs", {"title": "Home"});
});

// app.get("/about", (req, res) => {
//   res.render("doc/index.html.ejs", {"title": "about!"})
// });

// penjalan aplikasi
app.listen(Port, () => {
  console.log(`aplikasi berjalan di ${Port}`);
});