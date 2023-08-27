const express = require('express')
const apicache = require("apicache");

const router = express.Router()
const cache = apicache.middleware;

const objectController = require('../../../controllers/objectController')

router.get("/", cache("3 minutes"),objectController.getAllObjects)

router.get("/:objectId", objectController.getObjectById)

router.get("/:shapeObject/byShape", objectController.getObjectByShape)

router.post("/", objectController.createObject)

router.patch("/:objectId", objectController.editObject)

router.delete("/:objectId", objectController.deleteObject)

module.exports = router;