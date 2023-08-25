const DB = require('./db.json')
const util = require('./utils')
const { v4: uuid } = require('uuid')

const Objeto = {}

Objeto.getAllObjetcts = () => {
    return DB.objetos;
}

Objeto.getOneObject = (id) => {
    const objetoBuscado = DB.objetos.filter(e => e.id == id)
    return objetoBuscado;
}

Objeto.createObject = (o) => {
    const nuevoObjeto = {
        id: uuid(),
        ...o,
        createdAt: new Date().toLocaleDateString(),
        updatedAt: new Date().toLocaleDateString()
    }

    DB.objetos.push(nuevoObjeto)
    util.saveToDatabase(DB)
    return nuevoObjeto;
}

Objeto.editObject = (id, cambios) => {
    const existe = DB.objetos.findIndex(e => e.id === id)

    if (!(existe > -1)) {
        return;
    }

    const objetoEditado = {
        ...DB.objetos[existe],
        ...cambios,
        updatedAt: new Date().toLocaleDateString()
    }

    DB.objetos[existe] = objetoEditado;
    util.saveToDatabase(DB);

    return objetoEditado;
}

Objeto.deleteObject = (id) => {
    const existe = DB.objetos.findIndex((e) => e.id == id)
    console.log(id);
    if (!(existe > -1)) {
        return;
    }

    console.log(existe > -1);

    const objetoEliminado = DB.objetos.splice(existe, 1)
    util.saveToDatabase(DB)
    return objetoEliminado;
}
module.exports = Objeto;