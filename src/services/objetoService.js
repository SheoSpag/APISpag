const Objeto = require('../database/Objeto')
const objetoService = {}


objetoService.getAllObjetcts = () => {
    const AllObjetcts = Objeto.getAllObjetcts()
    return AllObjetcts;
}

objetoService.getOneObject = (id) => {
    const OneObject = Objeto.getOneObject(id)
    return OneObject;
}

objetoService.createObject = (o) => {
    const objetoCreado = Objeto.createObject(o)

    return objetoCreado;
}

objetoService.editObject = (id, cambios) => {
    const editedObject = Objeto.editObject(id, cambios)
    return editedObject;    
}

objetoService.deleteObject = (id) => {
    const objetoEliminado = Objeto.deleteObject(id)
    return objetoEliminado;        
}

module.exports = objetoService;