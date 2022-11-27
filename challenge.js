/* 
  si utilizáis algún import en vuestra solución, recordad que hay que indicarle a node 
  que estamos utilizando módulos. Para ello, debemos incluir el fichero package.json que 
  veis en este repositorio. En caso de que no os funcione, contactadme por discord.
*/

const students = [{
    age: 32,
    examScores: [],
    gender: 'male',
    name: 'edu'
  },
  {
    age: 21,
    examScores: [],
    gender: 'female',
    name: 'silvia'
  },
  {
    age: 24,
    examScores: [],
    gender: 'female',
    name: 'cecilia'
  },
  {
    age: 25,
    examScores: [],
    gender: 'female',
    name: 'luisa'
  },
  {
    age: 20,
    examScores: [],
    gender: 'female',
    name: 'juan'
  }
    ]
  
  const availablemalenames = ['pepe', 'juan', 'victor', 'Leo', 'francisco', 'carlos'];
  const availablefemalenames = ['cecilia', 'ana', 'luisa', 'silvia', 'isabel', 'virginia'];
  const availablegenders = ['male', 'female'];
  const generomasculino = ['male']
  const generofemenino = ['female']

  
  // punto 1. mostrar en formato de tabla todos los alumnos // 
  console.log('1.Imprime formato tabla de students:')
  console.table (students)

  // punto 2. mostrar por consola la cantidad de alumnos en clase //
  console.log ('2.Cantidad de alumnos en la clase:')
  console.log(students.length)

  //punto 3. mostrar por consola todos los nombres de los alumnos//
  console.log('3.Se muestra todos los nombres de los alumnos:')
  students.find(object => {
    console.log(object.name);
  })

  //punto 4. eliminar el ultimo alumno de la clase //

  students.length = students.length - 1
  
  console.log('4.Se elimina el ultimo alumno de la clase')
  console.log (students)

  //punto 5. eliminar un alumnos aleatoriamente de la clase//

  console.log('5.Se elimina un alumno de manera aleatoria. La posicion a eliminar es:')

  const posiciones = [0,1,2,3,4];
  
  const pos_aleatorio = Math.floor(Math.random() * posiciones.length);
  const pos_aleatorios = posiciones[pos_aleatorio];

  console.log(pos_aleatorios)

  removedstudents = students.splice(pos_aleatorios,1)

  console.log(students)
  
  // punto 6. mostrar por consola todos los datos de alumnas//
  const alumnas = students.filter(student => student.gender == 'female')
  console.log ('6.Datos de alumnas:')  
  console.log (alumnas)

  //punto 7. mostrar por consola el numero de chicos y chicas que hay en clase//
  console.log ('7.Numero de chicos/as en la clase:')
  console.log(students.length)

  //punto 8. mostrar true o false por consola si todos los alumnos de la clase son chicas//
  
  let booleano;
  if (students.includes({gender:'female'})) {booleano ='true'}
  else {booleano ='false'}

  console.log('8. Mostrar booleano (T/F) si todos los alumnos son chicas')
  console.log(booleano)

  //punto 9. mostrar por consola los nombres de los alumnso que tengan entre 20 y 25 años//
  
  const rango = {
    bajo: 20,
    alto: 25
  }
  
  const age = students.filter(function(student){
    return student.age >= this.bajo && student.age <= this.alto;
  },rango)
  console.log ('9. Alumnos entre 20 y 25 años:')
  console.log(age)

  //punto 10. añadir un alumno nuevo con los datos.. //
  
  const names = ['pepe', 'juan', 'victor', 'Leo', 'francisco', 'carlos','cecilia', 'ana', 'luisa', 'silvia', 'isabel', 'virginia'];
  
  const aleatorio = Math.floor(Math.random() * names.length);
  const valeatorio = names[aleatorio];
  
  
  let genero;
  if (availablemalenames.includes (valeatorio)){ genero = 'male'}
  else 
  {genero ='female'}


  students.unshift({
    age: 20,
    examScores: [],
    gender: genero ,
    name: valeatorio
  })
  console.log ('10.Nuevo alumno añadido de manera aletoria:')
  console.log (valeatorio)
  console.log(students)


  //punto 11. Mostrar por consola el nombre de la persona mas joven //
 function joven(students) {
    const edad = []
    students.forEach(object => {
        edad.push(object.age);
    });

    const masjoven = edad.sort();
    const imasjoven = masjoven[0];
    students.forEach(object => {
        if(object.age == imasjoven) {
            console.log ("11.La persona mas joven es:")
            console.log(object.name)
        }
    })
 }

 joven(students)


  //punto 12. mostrar por consola la edad media de todos los alumnos //
  
  let edades = [32,29,24,25,20]
  let sum = edades.reduce((previous,current)=> current += previous)
  let avg = sum/edades.length
  console.log ('12. La edad media de los alumnos es:')
  console.log(avg)

  //punto 13. Mostrar por consola la edad media de las chicas de la clase//
  let mujer_edades = [21,24,25,20]
  let suma = mujer_edades.reduce((previous,current)=> current += previous)
  let avgr = suma/mujer_edades.length
  console.log ('12. La edad media de las mujeres es:')
  console.log(avg)


  //punto 14. Añadir nueva nota a los alumnos. por cada alumno de la clase, tendremos que calcular una nota de forma aleatoria entre 0 y 10 y añadirla a su listado de notas//

  const notas = [1,2,3,4,5,6,7,8,9,10];
  
  const notas_aleatorio = Math.floor(Math.random() * notas.length);
  const notas_aleatorias = notas[notas_aleatorio];

  console.log('14.Se añade notas aletorias para cada alumno')

  students.unshift({
    age: 20,
    examScores: notas_aleatorias,
    gender: genero ,
    name: valeatorio
  },
  {
    age: 32,
    examScores: notas_aleatorias,
    gender: 'male',
    name: 'edu'
  },
  {
    age: 21,
    examScores: notas_aleatorias,
    gender: 'female',
    name: 'silvia'
  },
  {
    age: 24,
    examScores: notas_aleatorias,
    gender: 'female',
    name: 'cecilia'
  },
  {
    age: 25,
    examScores: notas_aleatorias,
    gender: 'female',
    name: 'luisa'
  },
  {
    age: 20,
    examScores: notas_aleatorias,
    gender: 'female',
    name: 'juan'
  }
  )

  console.log(students)


  //punto 15. orderar el array de los alumnos alfabeticamente//

  const orden = students.sort(function(a,b){
    if(a.name < b.name) {return -1; }
    if(a.name > b.name) {return 1; }
    return 0;
  })

  console.log('14. Ordena los alumnos alfabeticamente')
  console.log(orden)