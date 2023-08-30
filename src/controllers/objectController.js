const objectService = require('../services/objectService');
const objectController = {}


objectController.getAllObjects = async (req, res) => {
    const { shape, length } = req.query

    try {
        const allObjects = await objectService.getAllObjetcts( shape, length)
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

objectController.getObjectById = async (req, res) => {
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
        const Object = await objectService.getObjectById(objectId)

        if (!Object) {
            throw {
                status: 404,
                data:{
                    error: `Object with id ${id} not found`
                }
            }
        }

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

objectController.createObject = async (req, res) => {
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
            shape: body.shape,
            description: body.description,
            createdAt: new Date().toLocaleDateString(),
            updatedAt: new Date().toLocaleDateString()
        }
    
        const createdObject = await objectService.createObject(newObject)
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

objectController.editObject = async (req, res) => {
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

    if (!changes.shape || !changes.description) {
        res
         .status(400)
         .send({
            status: 'FAILED',
            data: {
                error: 'One of the following fields was not sent or is empty: shape or description '
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
        const editedObject = await objectService.editObject(objectId, changes)
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

objectController.deleteObject = async (req, res) => {
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
        const deletedObject = await objectService.deleteObject(objectId)
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