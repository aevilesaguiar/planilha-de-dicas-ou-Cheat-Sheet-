/* ==========================
ATRIBUIÇÃO
========================== */

// O operador "=" serve para atribuir o valor 40 a uma variável chamada "idade"

let idade = 40;

/* ==========================
ARITMÉTICOS
========================== */

// Nos permitem fazer operações matemáticas

console.log(10 + 15); //---> Soma
console.log(10 - 15); //---> Subtração
console.log(10 * 15); //---> Multiplicação
console.log(10 / 15); //---> Divisão
//console.log(15++ );   //---> Incremento de um em um: 15 + 1
//console.log(15--  );  //---> Decremento de um em um: 15 - 1
console.log(15 % 5 ); //---> Módulo. O resto obtido da divisão de 15 por 5: 0
console.log(15 % 2 ); //---> Módulo. O resto obtido da divisão de 15 por 2: 1

/* ==========================
COMPARAÇÃO SIMPLES
========================== */
console.log(num1==num2); //Igualdade -> false
console.log(10!=15);//Desigualdade->true
//comparação simples -> compara dois valores, e devolvem true or false



/* ==========================
COMPARAÇÃO ESTRITA
========================== */


console.log(num1===num2);//igualdade estrita -> false
console.log(num2===num3);//igualdade estrita-> true
console.log(num2===num4);//igualdade estrita-> false
console.log(num1 !=num2);//igualdade estrita ->true



/* ==========================
OPERADORES RELACIONAIS
========================== */

console.log(num1<num2);//true
console.log(num1>=num2);//false
console.log(num3>=num4);//true
console.log(num3<=num1);//false


//operadores de comparação sempre retornarão um booleano, true or false


/* ==========================
LÓGICOS
========================== */

//operadores logicos permitem combinar valores booleanos, o resultado também retorna um booleano
//&&->AND
//||-> OR
// !->NOT

console.log((num1<num2)|| (num3<num4));//true
console.log((num1<num2) && (num3>=num4));//true
console.log((10>15)&&(10!=20));//false
console.log((12%4==0) && (12!=24));//true
console.log(!true); //false
console.log(!false); //true
console.log(!(20>15));//false

//assim como operadores de comparação, os operadores lógicos sempre retornarão um booleano, ou seja true or false, como resultado

// Permitem combinar valores booleanos e seu resultado ao mesmo tempo, também é um booleano
