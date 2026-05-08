const express = require("express")
const path = require("path")

class App {
    constructor() {
        this.server = express()
        this.config()
    }

    config() {
        this.server.use(express.json({extended: true}))
        this.server.use(express.static(path.resolve(__dirname, "../../public")))
    }

    middlewares() {
        
    }

    routes() {
        this.server.use()
    }
}

export default new App().server