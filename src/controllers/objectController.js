const objectService = require('../services/objectService');
const { v4: uuid } = require('uuid')
const objectController = {}


objectController.getAllObjects = (req, res) => {
    try {
        const allObjects = objectService.getAllObjetcts()
        if (allObjects == 0) {
            res
            .status(200)
            .send({
                status: 'OK',
                data:{
                    message: 'Currently there are no objects'
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
        .status(error?.status || 500)
        .send({
            status: 'FAILED',
            data: { 
                error: error?.message || error
            }
        })
    }
}

objectController.getObjectById = (req, res) => {
    const { objectId } = req.params
    if( !objectId ){
        res
        .status(400)
        .send({
            status: 'FAILED',
            message: {
                error: 'The following field was not sent or is empty: idObject'
            }
        })
    }
    
    try {
        const Object = objectService.getObjectById(objectId)
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

objectController.getObjectByShape = (req, res) => {
    const { shapeObject } = req.params
    if( !shapeObject ){
        res
         .status(400)
         .send({
             status: 'FAILED', 
             message: {
                 error: 'The following field was not sent or is empty: shapeObject'
             }
         })
    }
    const Object = objectService.getObjectByShape(shapeObject)
    res.send({status: 'OK', data: Object})
}

objectController.createObject = (req, res) => {
    const { body } = req
    if (
        !body.shape ||
        !body.description
    ) {
        res.status(400).send({
            status: 'FAILED',
            data: {
                error: `At least one of the following parameters was not sent or is empty: shape or description`
            }
        })
    }

    try {
        const newObject = {
            id: uuid(),
            shape: body.shape,
            description: body.description,
            createdAt: new Date().toLocaleDateString(),
            updatedAt: new Date().toLocaleDateString()
        }
    
        const createdObject = objectService.createObject(newObject)
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

objectController.editObject = (req, res) => {
    const { objectId } = req.params
    const changes = req.body

    if (!objectId) {
        res
        .status(400)
        .send({
            status: 'FAILED',
            data: {
                error: 'The following field was not sent or is empty: idObject'
            }
        })
    }

    if (!changes) {
        res
        .status(400)
        .send({
            satus: 'FAILED',
            data: {
                error: 'At least one of the following parameters was not sent or is empty: shape or description'
            }
        })
    }

    try {
        const editedObject = objectService.editObject(objectId, changes)
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

objectController.deleteObject = (req, res) => {
    const {objectId} = req.params

    if (!objectId) {
        res
        .statu(400)
        .send({
            satus: 'FAILED',
            data: {
                error: 'The following field was not sent or is empty: idObject'
            }
        })
    }

    try {
        const deletedObject = objectService.deleteObject(objectId)
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

module.exports = objectController