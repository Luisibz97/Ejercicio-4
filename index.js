const nombre = 'Luis'

const apellido = 'Ibañez'

const estudiante = `${nombre} ${apellido}`

const estudianteMayus = estudiante.toUpperCase()

const estudianteMinus = estudiante.toLowerCase()

const numeroDeLetrasEstudiante = estudiante.length

const ultimaLetraEstudiante = estudiante.charAt(0)

const primeraLetraEstudiante = estudiante.charAt(estudiante.length-1)

const eliminarEspacios = estudiante.replace(' ', '')

const verificacion = estudiante.includes(nombre)

// logs

console.log(estudiante);

console.log(estudianteMayus);

console.log(estudianteMinus);

console.log(numeroDeLetrasEstudiante);

console.log(ultimaLetraEstudiante);

console.log(primeraLetraEstudiante);

console.log(eliminarEspacios);

console.log(verificacion);