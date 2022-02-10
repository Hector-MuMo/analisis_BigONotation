function foo(array) {
  let sum = 0; //1-constante
  let product = 1; //1-constante
  for (let i = 0; i < array.length; i++) {
    sum += array[i]; //n-lineal
  } //n-lineal
  for (let i = 0; i < array.length; i++) {
    product *= array[i]; //n-lineal
  } //n-lineal
  console.log(`${sum}, ${product}`); //1-constante
}

//¿Cuál es la complejidad de tiempo?
//O(3 + 4n) -> O(n) --- se eliminan las constantes y quitan terminos no dominantes; las n se suman ya que son diferentes ejecuciones de operaciones
