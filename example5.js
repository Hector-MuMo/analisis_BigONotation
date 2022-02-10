function printUnorderedPairs(arrayA, arrayB) {
  for (let i = 0; i < arrayA.length; i++) {
    //n-lineal
    for (let j = 0; j < arrayB.length; j++) {
      //k-lineal
      for (let k = 0; k < 100000; k++) {
        //1-constante
        console.log(`${arrayA[i]}, ${arrayB[j]}`); //n-lineal
      }
    }
  }
}

//¿Cuál es la complejidad de tiempo?
//O(n*n*k+1) -> O(1+k*n^2) -> O(n^2) --- se quitan terminos no dominantes
