const baseURL = process.env.API_URL;

const Objeto = {}



Objeto.getAllObjetcts = async (shape, length) => {
    console.log(baseURL);

    const AllObjetcts = await fetch(baseURL)
                                 .then(res => res.json())
                                 .then(data => console.log(data));

    return AllObjetcts;                      
}

Objeto.getObjectById = (id) => {

}

Objeto.getOneObjectByShape = (objectShape) => {

}

Objeto.createObject = (o) => {

}
Objeto.editObject = (objectId, changes) => {

}

Objeto.deleteObject = (id) => {

}

module.exports = Objeto;