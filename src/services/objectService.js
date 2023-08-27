const Object = require('../database/Object')
const objectService = {}


objectService.getAllObjetcts = () => {
    try {
        const allObjetcts = Object.getAllObjetcts()
        return allObjetcts;
    } catch (err) {
        throw err;
    }
}

objectService.getObjectById = (id) => {
    try {
        const oneObject = Object.getObjectById(id)
        return oneObject;
    } catch (err) {
        throw err
    }
}

objectService.getObjectByShape = (shapeObject) => {
    try {
        const oneObject = Object.getOneObjectByShape(shapeObject)
        return oneObject;
    } catch (err) {
        throw err
    }
}

objectService.createObject = (o) => {
    try {
        const createdObject = Object.createObject(o)
        return createdObject;
    } catch (err) {
        throw err
    }
}

objectService.editObject = (id, cambios) => {


    try {
        const editedObject = Object.editObject(id, cambios)
        return editedObject;
    } catch (err) {
        throw err
    } 
}

objectService.deleteObject = (id) => {
    try {
        const eliminatedObject = Object.deleteObject(id)
        return eliminatedObject; 
    } catch (err) {
        throw err
    }       
}

module.exports = objectService;