const opt = {
     descripcion: {
          alias: 'd',
          demand: true,
          desc: 'Descripcion de la tarea'
     }
}

const opt2 = {
     descripcion: {
          alias: 'd',
          demand: true,
     },
     completado: {
          alias: 'c',
          default: true,
     }
}
const argv = require('yargs')
.command('crear', 'Crear nueva tarea', opt)
.command('listar', 'Listar lista de tareas')
.command('actualizar', 'Actualizar lista de tareras', opt2)
.command('borrar', 'Elimina la tarea especificada', opt)
.help().argv;


module.exports = {
     argv
}