function reverse(array) {
  for (let i = 0; i < array.length / 2; i++) {
    //n-lineal
    let other = array.length - i - 1; //n-lineal
    let temp = array[i]; //n-lineal
    array[i] = array[other]; //n-lineal
    array[other] = temp; //n-lineal
  }
}

//¿Cuál es la complejidad de tiempo?
//O(5n) -> O(n) --- se retiran las constantes
