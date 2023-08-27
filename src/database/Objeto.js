const DB = require('./db.json')
const util = require('./utils')

const Objeto = {}

Objeto.getAllObjetcts = () => {
    return DB.objetos;
}

Objeto.getObjectById = (id) => {

    const indexObject = DB.objetos.findIndex((e) => e.id == id)

    if (!(indexObject > -1)) {
        throw {
            status: 404,
            data: {
                error: `Object id: ${id} not found`
            }
        }
    }

    const objetoBuscado = DB.objetos.filter(e => e.id == id)

    return objetoBuscado;
}

// Objeto.getOneObjectByShape = (formaObjeto) => {

//     const indexObject = DB.objetos.findIndex((e) => e.forma == formaObjeto)

//     if (!(indexObject > -1)) {
//         throw {
//             status: 404,
//             data: {
//                 error: `Object de forma: ${formaObjeto} not found`
//             }
//         }
//     }

//     const objetoBuscado = DB.objetos[indexObject]

//     return objetoBuscado;
// }

Objeto.createObject = (o) => {
    const indexObject = DB.objetos.findIndex((e) => e.forma ==  o.forma)
    if (indexObject > -1) {
        throw {
            status: 404,
            data: {
                error: `Object with the name ${o.forma} already exist`
            }
        }
    }

    DB.objetos.push(o)
    util.saveToDatabase(DB)
    return o

}
Objeto.editObject = (id, cambios) => {
    const indexObject = DB.objetos.findIndex(e => e.id === id)

    if (!(indexObject > -1)) {
        throw {
            status: 404,
            data:{
                error: `Object id: ${id} not found`
            }
          };
    }

    const objetoEditado = {
        ...DB.objetos[indexObject],
        ...cambios,
        updatedAt: new Date().toLocaleDateString()
    }

    DB.objetos[indexObject] = objetoEditado;
    util.saveToDatabase(DB);

    return objetoEditado;
}

Objeto.deleteObject = (id) => {
    const indexObject = DB.objetos.findIndex(e => e.id === id)

    if (!(indexObject > -1)) {
        throw {
            status: 404,
            data:{
                error: `Object id: ${id} not found`
            }
          };
    }
    
    const objetoEliminado = DB.objetos.splice(indexObject, 1)
    util.saveToDatabase(DB)
    return objetoEliminado;
}

module.exports = Objeto;