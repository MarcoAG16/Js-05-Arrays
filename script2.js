// Arreglo con las posiciones iniciales de los corredores
let posiciones = ["Roberto", "Andrea", "Jorge", "Ramiro", "Sofía"];


// Jorge adelanta a Roberto
[posiciones[0], posiciones[2]] = [posiciones[2], posiciones[0]];
//Ramiro adelanta a Jorge
[posiciones[2], posiciones[3]] = [posiciones[3], posiciones[2]];
// Roberto se lesiona y sale de la carrera
posiciones.shift(); 
[posiciones[1], posiciones[2]] = [posiciones[2], posiciones[1]];
// José reemplaza al quinto lugar
posiciones[4] = "José"; 

// Imprimir las posiciones finales 
console.log("Posiciones finales después de 3 vueltas:", posiciones);