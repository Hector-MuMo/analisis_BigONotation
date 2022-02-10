function printUnorderedPairs(arrayA, arrayB) {
  for (let i = 0; i < arrayA.length; i++) {
    //n-lineal
    for (let j = 0; j < arrayB.length; j++) {
      //k-lineal
      if (arrayA[i] < arrayB[j]) {
        console.log(`${arrayA[i]}, ${arrayB[j]}`); //nk-lineal
      }
    }
  }
}

//¿Cuál es la complejidad de tiempo?
//O(n*n*k) -> O(k*n^2) -> O(n^2) --- se quitan terminos no dominantes
