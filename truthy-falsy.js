// Todos são verdadeiros quando utilizados comparação fraca ==
console.log(100 == '100');
console.log(100 == [100]);

// Todos são falsos quando utilizamos o operador de igualdade restrita
console.log(100 === '100');
console.log(100 === [100]);

var produtoAtivo = false

if(!produtoAtivo){
    console.log('Esse produto não está ativo')
}