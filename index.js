require("dotenv").config()
const express = require("express")
const expressEjsLayouts = require("express-ejs-layouts")
const ejs = require("ejs")
const path = require("path")

const app = express()

const server = {
    port: process.env.SERVER_PORT
}

// config
app.use(express.static(path.resolve(__dirname, "public")))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "src", "views"));

app.use(expressEjsLayouts)
app.set("layout", "layouts/main");

// Routes
app.get("/", (req, res) => {
    var user = {name: "Kervi Jhonata", age: 26}
    res.render("single", {title: "HypnoApp", user})
})

app.get("/test", (req, res) => {
    res.send("teste OK")
})

app.get("/home", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../public/home.html"))
})

// Server run
app.listen(server.port, () => {
    console.log(`Server running on port ${server.port}`)
})