const { argv } = require('./condfig/yargs');
const porhacer = require('./por-hacer/porhacer');
const colors = require('colors');
const commands = argv._[0];

switch(commands) {
     case 'crear':
          let tarea = porhacer.crearTarea(argv.descripcion);
          console.log(tarea);
     break;
     case 'listar':
          let tareas = porhacer.listar();

          for(let t of tareas) {
               console.log("============= Tarea =============".green);
               console.log(t.descripcion);
               console.log('Estado ' + t.completado);
               console.log("============= Fin =============".green);
          }
          
     break;
     case 'actualizar':
          console.log(porhacer.actualizar(argv.descripcion, argv.completado));
     break;
     case 'borrar':
          porhacer.borrar(argv.descripcion);
     break;
     default:
          console.log('No se reconoce el comando');
}