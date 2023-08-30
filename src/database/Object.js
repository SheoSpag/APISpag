const objectSchema = require('../models/ObjectSchema')

const Objeto = {}

Objeto.getAllObjects = async (shape, length) => {

    var allObjects = await objectSchema.find()
        .then()
        .catch((e) => {
            throw {
                satus: 500,
                data: {
                    error: e
                }
            }
        })

    if (shape) {
        allObjects = allObjects.filter((e) => e.shape.toLowerCase().includes(shape.toLowerCase()));
    }

    if (length) {
        allObjects = allObjects.slice(0, length)
    }

    return allObjects;

}


Objeto.getObjectById = async (id) => {
    var searchedObject;

    await objectSchema
        .findById(id)
        .then((data) => searchedObject = data)
        .catch((e) => {
            throw {
                satus: 500,
                data: {
                    error: e.message
                }
            }
        })

    return searchedObject;
}


Objeto.createObject = async (o) => {
    const object = objectSchema(o)

    object
        .save()
        .then()
        .catch((e) => {
            throw {
                status: 500,
                data: {
                    error: e.message
                }
            }
        })

    return object;

}

Objeto.editObject = async (objectId, changes) => {
    const { shape, description } = changes
    await objectSchema
        .updateOne({ _id: objectId }, { $set: { shape, description } })
        .then()
        .catch((e) => {
            throw {
                status: 500,
                data: {
                    error: e.message
                } 
            }
        })

        const editedObject = await objectSchema
                                        .findById(objectId)
                                        .then()
                                        .catch((e) => {
                                            throw {
                                                status: 500,
                                                data: {
                                                    error: e.message
                                                }
                                            }
                                        })
       
    return editedObject;
}

Objeto.deleteObject = async (objectId) => {
    try {
        const deletedObject = await objectSchema.findByIdAndDelete(objectId);
        if (!deletedObject) {
            throw {
                status: 404,
                data: {
                    error: `Object with id ${objectId} not found`
                }
            };
        }
        return deletedObject;
    } catch (error) {
        throw {
            status: 500,
            data: {
                error: error.message
            }
        };
    }
};


module.exports = Objeto;