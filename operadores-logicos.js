let num1=10;
let num2=15;
let num3=15;
let num4="15";

//comparação simples -> compara dois valores, e devolvem true or false
console.log(num1==num2); //Igualdade -> false
console.log(10!=15);//Desigualdade->true

//comparação estrita -> compara o valore o tipo de dado também

console.log(num1===num2);//igualdade estrita -> false
console.log(num2===num3);//igualdade estrita-> true
console.log(num2===num4);//igualdade estrita-> false
console.log(num1 !=num2);//igualdade estrita ->true

//operadores Relacionais
console.log(num1<num2);//true
console.log(num1>=num2);//false
console.log(num3>=num4);//true
console.log(num3<=num1);//false

//operadores de comparação sempre retornarão um booleano, true or false
console.log("OPERADORES LÓGICOS");
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
