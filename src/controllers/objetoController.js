const e = require('express');
const objetoService = require('../services/objetoService');
const { all } = require('../v1/routes/Objeto/objetoRutas');
const objetoController = {}


objetoController.getAllObjects = (req, res) => {
    const allObjects = objetoService.getAllObjetcts()
    res.send({status: 'OK', data: allObjects})
}

objetoController.getOneObject = (req, res) => {
    const { idObjeto } = req.params
    const Object = objetoService.getOneObject(idObjeto)
    res.send({status: 'OK', data: Object})
}

objetoController.createObject = (req, res) => {
    const { body } = req
    if (
        !body.forma ||
        !body.descripcion
    ) {
        return;
    }

    const newObject = {
        forma: body.forma,
        descripcion: body.descripcion
    }

    const createdObject = objetoService.createObject(newObject)

    res.send({status: 'OK', data:createdObject})
}

objetoController.editObject = (req, res) => {
    const idObjeto = req.params.idObjeto
    const cambios  = req.body

    if (!idObjeto || !cambios) {
        return;
    }

    const editedObject = objetoService.editObject(idObjeto, cambios)
    res.send({status: 'OK', data: editedObject})
} 

objetoController.deleteObject = (req, res) => {
    const idObjeto = req.params.idObjeto

    const deletedObject = objetoService.deleteObject(idObjeto)
    res.send({status: 'Ok', data: deletedObject})
}

module.exports = objetoController