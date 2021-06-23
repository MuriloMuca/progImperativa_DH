// Crie uma função construtora chamada Restaurante, que receba como parâmetros o nome do restaurante e o cardápio (que será um array de strings).
// Após isso chame a função entrada () dentro do objeto, que irá trazer uma mensagem de boas-vindas, informando o nome do restaurante, e o cardápio.

function  Restaurante ( nomeRestaurante ,  cardapio )  {
    this . nomeRestaurante  =  nomeRestaurante ;
    this . cardapio  =  cardapio ;
  } ;
  
  // Para criar um objeto com uma função construtora acima, deve-se usar uma palavra-chave new e chamar a função passando os parâmetros esperados.
  // let meuRestaurante = novo Restaurante ('Pizza Planet', ['marguerita', 'portuguesa', 'pepperoni', 'napolitana']);
  
  // Cria um objeto com duas propriedades e um método que retorna uma mensagem de boas-vindas:
  let  meuRestaurante  =  {
    nomeRestaurante : 'Restaurante Copo Sujo' ,
    cardapio : [ 'marguerita' ,  'mojito' ,  'caipirinha' ,  ' rabo de galo' ] ,
    boasvindas : function  ( )  {
      return  'Seja bem-vindo ao '  +  this . nomeRestaurante  +  ', aqui está o nosso cardápio de hoje:'  +  this . cardapio ;
    }
  }
  
  // Invocando o método do objeto meuRestaurante: 
  console . log ( meuRestaurante . boasvindas ( ) )