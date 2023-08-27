const e = require('express');
const objetoService = require('../services/objetoService');
const { v4: uuid } = require('uuid')
const objetoController = {}


objetoController.getAllObjects = (req, res) => {
    try {
        const allObjects = objetoService.getAllObjetcts()

        if (allObjects.length == 0) {
            res
            .status(200)
            .send({
                status: 'OK',
                data:{
                    message: 'Actualmente no hay objetos'
                }
            })
        }
        res
        .status(200)
        .send({
            status: 'OK',
            data: allObjects
        })

    } catch (error) {
        res
        .status(error?.error.status || 500)
        .send({ status: 'FAILED', data: { error: error?.message || error}})

    }
}

objetoController.getObjectById = (req, res) => {
    const { idObjeto } = req.params
    if( !idObjeto ){
        res
        .status(400)
        .send({
            status: 'FAILED',
            message: {
                error: 'El siguiente campo no fue enviado o esta vacio: idObjeto'
            }
        })
    }
    
    try {
        const Object = objetoService.getObjectById(idObjeto)
        res
        .status(200)
        .send({
            status: 'OK',
            data: Object
        })
    } catch (error) {
        res
        .status(error?.status || 500)
        .send(error?.data || error) 
    }
}

// objetoController.getObjectByShape = (req, res) => {
//     const { formaObjeto } = req.params
//     if( !formaObjeto ){
//         res.status(400).send({status: 'FAILED', message: {
//             error: 'El siguente parametro no fue enviado o esta vacio: formaObjeto'
//         }})
//     }
//     const Object = objetoService.getObjectByShape(formaObjeto)
//     res.send({status: 'OK', data: Object})
// }

objetoController.createObject = (req, res) => {
    const { body } = req
    if (
        !body.forma ||
        !body.descripcion
    ) {
        res.status(400).send({
            status: 'FAILED',
            data: {
                error: `Alguno de los siguientes paramtros no fue enviado o esta vacio: forma o descripcion`
            }
        })
    }

    try {
        const newObject = {
            id: uuid(),
            forma: body.forma,
            descripcion: body.descripcion,
            createdAt: new Date().toLocaleDateString(),
            updatedAt: new Date().toLocaleDateString()
        }
    
        const createdObject = objetoService.createObject(newObject)
        res
        .status(201)
        .send({
            status: 'OK',
            data:createdObject
        })
    } catch (error) {
        res
        .status(error?.status || 500)
        .send(error?.data || error)
    }

}

objetoController.editObject = (req, res) => {
    const idObjeto = req.params.idObjeto
    const cambios  = req.body

    if (!idObjeto || !cambios) {
        res
        .status(400)
        .send({
            satus: 'FAILED',
            data: {
                error: 'Uno de los siguientes parametros no se envio o esta vacio: idObjeto o cambios'
            }
        })
    }

    try {
        const editedObject = objetoService.editObject(idObjeto, cambios)
        res
        .status(200)
        .send({
            status: 'OK',
            data: editedObject
        })
    } catch (error) {
        res
        .status(error?.status || 500)
        .send(error?.data || error)
    }
} 

objetoController.deleteObject = (req, res) => {
    const idObjeto = req.params.idObjeto

    if (!idObjeto) {
        res
        .statu(400)
        .send({
            satus: 'FAILED',
            data: {
                error: 'El siguiente parametro no se envio o esta vacio: idObjeto'
            }
        })
    }

    try {
        const deletedObject = objetoService.deleteObject(idObjeto)
        res
        .status(200)
        .send({
            status: 'Ok',
            data: deletedObject
        })
    } catch (error) {
        res
        .status(error?.status || 500)
        .send(error?.data || error)
    }
}

module.exports = objetoController