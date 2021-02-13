var idade = 80
if(idade < 16){
    console.log('Não vota');
} else{
   if(idade < 18 || idade > 67){ //Aqui posso colocar tbm (idade >= 16 && idade < 18), mas pra simplicar, como o if anterior já diz que menor que 16 não vota, já está implícito que nesse novo if será maior ou igual a 16.
       console.log('Voto Opcional');
   }else{
       console.log('Voto obrigatório');
   }
}