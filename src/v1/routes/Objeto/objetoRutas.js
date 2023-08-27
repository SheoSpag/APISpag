const express = require('express')
const router = express.Router()
const objectController = require('../../../controllers/objectController')

router.get("/", objectController.getAllObjects)

router.get("/:objectId", objectController.getObjectById)

//router.get("/shapeObject", objetoController.getObjectByShape)

router.post("/", objectController.createObject)

router.patch("/:objectId", objectController.editObject)

router.delete("/:objectId", objectController.deleteObject)

module.exports = router;