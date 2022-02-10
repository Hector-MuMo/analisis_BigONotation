function printUnorderedPairs(array) {
  for (let i = 0; i < array.length; i++) {
    //n-lineal
    for (let j = i + 1; j < array.length; j++) {
      //n-lineal
      console.log(`${array[i]}, ${array[j]}`); //n-lineal
    }
  }
}

//¿Cuál es la complejidad de tiempo?
//O(n + n*n ) -> O(n^2) --- Al ser un ciclo anidado se multiplica la complejidad
