const express = require("express");
const app = express();
if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}
const path = require("path");
const axios = require("axios");
let port = 3000;

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

let load = [];

app.get("/", async (req, res) => {
  try {
    load = await axios.get(`${process.env.API_CALL_LINK}`);
    let source = load.data;
    res.render("main.ejs", { source });
  } catch {
    try {
      let source = load.data;
      res.render("main.ejs", { source });
    } catch {
      res.send("Some Error Occured Please Try Again Later ...");
    }
  }
});
app.get("/:rank/:name", (req, res) => {
  try {
    let { rank } = req.params;
    let currency = load.data[rank - 1];
    res.render("currency.ejs", { currency });
  } catch {
    res.send("Some Error Occured Please Try Again Later ...");
  }
});

app.listen(port, () => {});
