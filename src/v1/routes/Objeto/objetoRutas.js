const express = require('express')
const router = express.Router()
const objetoController = require('../../../controllers/objetoController')

router.get("/", objetoController.getAllObjects)

router.get("/:idObjeto", objetoController.getOneObject)

router.post("/", objetoController.createObject)

router.patch("/:idObjeto", objetoController.editObject)

router.delete("/:idObjeto", objetoController.deleteObject)

module.exports = router;