function printPairs(array) {
  for (let i = 0; i < array.length; i++) {
    //n-lineal
    for (let j = 0; j < array.length; j++) {
      console.log(`${array[i]}, ${array[j]}`);
    } //n-lineal
  }
}

//¿Cuál es la complejidad de tiempo?
//O(n*n) -> O(n^2) --- Al ser un ciclo anidado se multiplica la complejidad
