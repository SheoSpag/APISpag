const DB = require('./db.json')
const util = require('./utils')

const Objeto = {}

Objeto.getAllObjetcts = () => {
    return DB.objects;
}

Objeto.getObjectById = (id) => {

    const indexObject = DB.objects.findIndex((e) => e.id == id)

    if (!(indexObject > -1)) {
        throw {
            status: 404,
            data: {
                error: `Object id: ${id} not found`
            }
        }
    }

    const objetoBuscado = DB.objects.filter(e => e.id == id)

    return objetoBuscado;
}

Objeto.getOneObjectByShape = (objectShape) => {

    const indexObject = DB.objects.findIndex((e) => e.shape == objectShape)

    if (!(indexObject > -1)) {
        throw {
            status: 404,
            data: {
                error: `Object of shape: ${objectShape} not found`
            }
        }
    }

    const serchedObject = DB.objects[indexObject]

    return serchedObject;
}

Objeto.createObject = (o) => {
    const indexObject = DB.objects.findIndex((e) => e.shape ==  o.shape)
    if (indexObject > -1) {
        throw {
            status: 404,
            data: {
                error: `Object with the name ${o.shape} already exist`
            }
        }
    }

    DB.objects.push(o)
    util.saveToDatabase(DB)
    return o

}
Objeto.editObject = (objectId, changes) => {
    const indexObject = DB.objects.findIndex(e => e.id === objectId)

    if (!(indexObject > -1)) {
        throw {
            status: 404,
            data:{
                error: `Object id: ${id} not found`
            }
          };
    }

    const editedObject = {
        ...DB.objects[indexObject],
        ...changes,
        updatedAt: new Date().toLocaleDateString()
    }

    DB.objects[indexObject] = editedObject;
    util.saveToDatabase(DB);

    return editedObject;
}

Objeto.deleteObject = (id) => {
    const indexObject = DB.objects.findIndex(e => e.id === id)

    if (!(indexObject > -1)) {
        throw {
            status: 404,
            data:{
                error: `Object id: ${id} not found`
            }
          };
    }
    
    const eliminatedObject = DB.objects.splice(indexObject, 1)
    util.saveToDatabase(DB)
    return eliminatedObject;
}

module.exports = Objeto;