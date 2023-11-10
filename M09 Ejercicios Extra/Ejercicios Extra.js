/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:

   let array = Object.entries(objeto);
   return array;

}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:

   //creo el objeto vacio y recorro el string con un bucle for ... of
   let objeto = {};

   for(let letra of string) {
      if(objeto[letra]) {
         objeto[letra]++;
      }
      else {
         objeto[letra] = 1;
      }
   }
   
   //Uso Object.keys() para obtener un array con las claves del objeto
   //Uso sort() para ordenar alfabeticamente

   let claves = Object.keys(objeto);
   claves.sort();

   //creo un objetoOrdenado

   let objetoOrdenado = {};

   //recorro el array de claves con un bucle for ... of

   for(let clave of claves) {
      objetoOrdenado[clave] = objeto[clave];
   }

   //retorno el objetoOrdenado

   return objetoOrdenado;

}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:

   //creo una variable para mayusculas y otra para minusculas y recorro el string con un bucle for .. of

   let mayusculas  = '';
   let minusculas = '';

   for(let letra of string) {
      if(letra === letra.toUpperCase()){
         mayusculas += letra;
      }
      else{
         minusculas += letra;
      }
   }
   //concatenamos las mayusculas y las minusculas
   let stringArreglado = mayusculas + minusculas;
   //retornamos el stringArreglado
   return stringArreglado;

}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:

   //usamos el metodo split para dividir la frase en un array de palabras
   let palabras = frase.split(' ');

   //creamos un array para guardar las palabras invertidas

   let invertidas = [];

   //recorrer el array de palabras con un bucle for ... of y dividir cada palabra en un array de letras

   for(let palabra of palabras){
      let letras = palabra.split('')
      letras.reverse();

   //usar join() para unir las letras de cada palabra

   let invertida = letras.join('');

   //se usa push para poner cada palabra invertida en un array de palabras invertidas

   invertidas.push(invertida);
   }

   let resultado = invertidas.join(' ');

   return resultado;

}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   let string = numero.toString();
   let arrayNumeros = string.split('');

   let numeroInvertido = '';

   for(let i = arrayNumeros.length - 1; i >= 0; i--) {
      numeroInvertido += arrayNumeros[i];
   }

   let invertido = Number(numeroInvertido);

   if (invertido === numero) {
      return 'Es capicua'
   } else {
      return 'No es capicua'
   }
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:

   //Hacer un array de letras dividiendo el string y un array vacio
   let arrayLetras = string.split('');
   let arrayFinal = [];
   //recorrer cada letra del array para eliminar las letras a b c
   for(let letra of arrayLetras){
      if (letra !== 'a' && letra !== 'b' && letra !== 'c') {
         arrayFinal.push(letra);
      }
   } 

   let stringSinAbc = arrayFinal.join('');

   return stringSinAbc;    

}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:

   let arrayOrdenado = arrayOfStrings.sort((a, b) => a.length - b.length);
   return arrayOrdenado;

}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:

   let arrayComun = array1.filter((Element) => array2.includes(Element));

   return arrayComun;

}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
