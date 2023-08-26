const e = require('express');
const objetoService = require('../services/objetoService');
const { all } = require('../v1/routes/Objeto/objetoRutas');
const objetoController = {}


objetoController.getAllObjects = (req, res) => {
    const allObjects = objetoService.getAllObjetcts()

    if (!allObjects) {
        res.status()
    }
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
        res.status(400).send({
            status: 'FAILED',
            data: {
                error: "Uno de los siguientes datos esta faltando o esta vacio: forma o descripcion."
            }
        })
    }

    const newObject = {
        forma: body.forma,
        descripcion: body.descripcion
    }

    const createdObject = objetoService.createObject(newObject)

    res.status(201).send({status: 'OK', data:createdObject})
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