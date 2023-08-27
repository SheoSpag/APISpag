const Objeto = require('../database/Objeto')
const objetoService = {}


objetoService.getAllObjetcts = () => {
    try {
        const AllObjetcts = Objeto.getAllObjetcts()
        return AllObjetcts;
    } catch (err) {
        throw err;
    }
}

objetoService.getObjectById = (id) => {
    try {
        const OneObject = Objeto.getObjectById(id)
        return OneObject;
    } catch (err) {
        throw err
    }
}

// objetoService.getObjectByShape = (formaObjeto) => {
//     try {
//         const OneObject = Objeto.getOneObject(formaObjeto)
//         return OneObject;
//     } catch (err) {
//         throw err
//     }
// }

objetoService.createObject = (o) => {
    try {
        const objetoCreado = Objeto.createObject(o)
        return objetoCreado;
    } catch (err) {
        throw err
    }
}

objetoService.editObject = (id, cambios) => {

    try {
        const objetoEditado = Objeto.editObject(id, cambios)
        return objetoEditado;
    } catch (err) {
        throw err
    } 
}

objetoService.deleteObject = (id) => {
    try {
        const objetoEliminado = Objeto.deleteObject(id)
        return objetoEliminado; 
    } catch (err) {
        throw err
    }       
}

module.exports = objetoService;