const express = require('express')
const router = express.Router()

router.get("/", (req, res) => {
    res.send("<h1>Obtenemos todos los objetos</h1>")
})

router.get("/:idObjeto", (req, res) => {
    res.send("<h1>Obtenemos un objeto</h1>")
})

router.post("/", (req, res) => {
    res.send("<h1>Creamos un objeto</h1>")
})

router.patch("/:idObjeto", (req, res) => {
    res.send("<h1>Editando un objeto</h1>")
} )

router.delete("/:idObjeto", (req, res) => {
    res.send("<h1>Eliminando un objeto</h1>")
})

module.exports = router;