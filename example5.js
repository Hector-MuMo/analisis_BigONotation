function printUnorderedPairs(arrayA, arrayB){
  for(let i = 0; i < arrayA.length; i++){
    for(let j = 0; j < arrayB.length; j++){
      for(let k = 0; k < 100000; k++){
        console.log(`${arrayA[i]}, ${arrayB[j]}`);
      }
    }
  }
}

//¿Cuál es la complejidad de tiempo?