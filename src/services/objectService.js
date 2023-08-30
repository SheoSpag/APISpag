const Object = require('../database/Object')
const objectService = {}


objectService.getAllObjetcts = (shape, length) => {
    try {
        const allObjetcts = Object.getAllObjects(shape, length)
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