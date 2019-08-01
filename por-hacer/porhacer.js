const fs = require('fs');

let ListaTareas = [];

const guardarDB = () => {
     let data = JSON.stringify(ListaTareas);

     fs.writeFile('db/data.json', data, (err) => {
          if(err) {
               throw new Error(err);
          }
     })
}

const leerDB = () => {
     try {
          ListaTareas = require('../db/data.json');
     }catch(err) {
          ListaTareas = [];
     }
}

const listar = () => {
     leerDB();

     return ListaTareas;
}

const crearTarea = (descripcion) => {
     
     leerDB();

     let tarea = {
          descripcion,
          completado: false
     }

     ListaTareas.push(tarea);
     guardarDB();

     return tarea;
}

const actualizar =  (descripcion, completado = true) => {

     leerDB();

     let index = ListaTareas.findIndex( tarea => tarea.descripcion === descripcion);

     if( index >= 0) {
          ListaTareas[index].completado = completado;
          guardarDB();
          return true;
     } else {
          return false;
     }
}

const borrar = (descripcion) => {
     leerDB();
     
     ListaTareas = ListaTareas.filter( tarea => tarea.descripcion !== descripcion);
     guardarDB();
}

module.exports = {
     crearTarea,
     listar,
     actualizar,
     borrar
}