// - Precisamos desenvolver um menu para um microondas super veloz, 
// onde teremos 5 opções de comida com seus respectivos tempos pré-definidos. 

// 1 - Pipoca – 10 segundos (padrão);
// 2 - Macarrão – 8 segundos (padrão);
// 3 - Carne – 15 segundos (padrão);
// 4 - Feijão – 12 segundos (padrão);
// 5 - Brigadeiro – 8 segundos (padrão); 

// - O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade. 
// Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.

// - Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
// - Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
// - Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
// - No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!".

// Tempo de preparo
let tempoPipoca  =  10 ;
let tempoMacarrao  =  8 ;
let tempoCarne  =  15 ;
let tempoFeijao  =  12 ;
let tempoBrigadeiro  =  8 ;


// Se escolhido Pipoca
function pipoca (nome, tempo) {
    this.nome = nome ;
    this.preparo = preparo ;
    this.alimento = function ( ) {
        if (this.nome  !=  "pipoca") {
    return "Prato Inexistente" ;
        } else {
    return "OK" ;
    }
};
    this.preparar  =  function  ( )  {
    if  (this.tempo >2 * tempoPipoca && this.tempo <3 * tempoPipoca) {
      return "A comida queimou !!";
    }
    if (this.tempo < tempoPipoca) {
      return "Tempo Insuficiente";
    }
    if (this.tempo >3 * tempoPipoca) {
      return "KABUM !!!";
        } else {
      return "Prato pronto. Bom apetite !!!";
    }
  } ;
}

// Fazendo pipoca
let pratoPipoca = new Pipoca ("pipoca" ,10) ;

// Criar o pedido de pipoca
function fazerPipoca ( )  {
  if (pratoPipoca.alimento ( ) == "OK" )  {
    console.log (pratoPipoca.preparar ( ) ) ;
  } else {
    console.log (pratoPipoca.alimento ( ) ) ;
  }
}

// Pedir para fazer pipoca
fazerPipoca ( ) ;


// Se escolhido Macarrao
function  macarrao (nome ,tempo) {
  this.nome = nome ;
  this.preparo = preparo ;
  this.alimento = function ( ) {
    if (this.nome  !=  "macarrão") {
        return "Prato Inexistente" ;
            } else {
        return "OK" ;
        }
    };
        this.preparar  =  function  ( )  {
        if  (this.tempo >2 * tempoMacarrao && this.tempo <3 * tempoMacarrao) {
          return "A comida queimou !!";
        }
        if (this.tempo < tempoMacarrao) {
          return "Tempo Insuficiente";
        }
        if (this.tempo >3 * tempoMacarrao) {
          return "KABUM !!!";
            } else {
          return "Prato pronto. Bom apetite !!!";
        }
      } ;
    }
    
    // Fazendo macarrão
    let pratoMacarrao = new Macarrao ("macarrão" ,10) ;
    
    // Criar o pedido de macarrão
    function fazerMacarrao ( )  {
      if (pratoMacarrao.alimento ( ) == "OK" )  {
        console.log (pratoMacarrao.preparar ( ) ) ;
      } else {
        console.log (pratoMacarrao.alimento ( ) ) ;
      }
    }
  // Pedir para fazer macarrão
fazerMacarrao ( ) ;

// Se escolhido Carne
function carne (nome ,tempo) {
    this.nome = nome ;
    this.preparo = preparo ;
    this.alimento = function ( ) {
      if (this.nome  !=  "carne") {
          return "Prato Inexistente" ;
              } else {
          return "OK" ;
          }
      };
          this.preparar  =  function  ( )  {
          if  (this.tempo >2 * tempoMacarrao && this.tempo <3 * tempoMacarrao) {
            return "A comida queimou !!";
          }
          if (this.tempo < tempoMacarrao) {
            return "Tempo Insuficiente";
          }
          if (this.tempo >3 * tempoMacarrao) {
            return "KABUM !!!";
              } else {
            return "Prato pronto. Bom apetite !!!";
          }
        } ;
      }
      
    // Fazendo carne
      let pratoCarne = new Carne ("carne" ,15) ;
      
    // Criar o pedido de carne
      function fazerCarne ( )  {
        if (pratoCarne.alimento ( ) == "OK" )  {
          console.log (pratoCarne.preparar ( ) ) ;
        } else {
          console.log (pratoCarne.alimento ( ) ) ;
        }
      }
// Pedir para fazer carne
fazerCarne( ) ;

// Se escolhido feijão
function feijao (nome ,tempo) {
    this.nome = nome ;
    this.preparo = preparo ;
    this.alimento = function ( ) {
      if (this.nome  !=  "feijão") {
          return "Prato Inexistente" ;
              } else {
          return "OK" ;
          }
      };
          this.preparar  =  function  ( )  {
          if  (this.tempo >2 * tempoFeijao && this.tempo <3 * tempoFeijao) {
            return "A comida queimou !!";
          }
          if (this.tempo < tempoFeijao) {
            return "Tempo Insuficiente";
          }
          if (this.tempo >3 * tempoFeijao) {
            return "KABUM !!!";
              } else {
            return "Prato pronto. Bom apetite !!!";
          }
        } ;
      }
      
    // Fazendo feijão
      let pratoFeijao = new Feijao ("feijão" ,12) ;
      
    // Criar o pedido de feijão
      function fazerFeijao ( )  {
        if (pratoFeijao.alimento ( ) == "OK" )  {
          console.log (pratoFeijao.preparar ( ) ) ;
        } else {
          console.log (pratoFeijao.alimento ( ) ) ;
        }
      }
// Pedir para fazer feijão
fazerFeijao( ) ;


// Se escolhido brigadeiro
function brigadeiro (nome ,tempo) {
    this.nome = nome ;
    this.preparo = preparo ;
    this.alimento = function ( ) {
      if (this.nome  !=  "brigadeiro") {
          return "Prato Inexistente" ;
              } else {
          return "OK" ;
          }
      };
          this.preparar  =  function  ( )  {
          if  (this.tempo >2 * tempoBrigadeiro && this.tempo <3 * tempoBrigadeiro) {
            return "A comida queimou !!";
          }
          if (this.tempo < tempoBrigadeiro) {
            return "Tempo Insuficiente";
          }
          if (this.tempo >3 * tempoBrigadeiro) {
            return "KABUM !!!";
              } else {
            return "Prato pronto. Bom apetite !!!";
          }
        } ;
      }
      
    // Fazendo brigadeiro
      let pratoBrigadeiro = new Brigadeiro ("brigadeiro" ,8) ;
      
    // Criar o pedido de brigadeiro
      function fazerBrigadeiro ( )  {
        if (pratoBrigadeiro.alimento ( ) == "OK" )  {
          console.log (pratoBrigadeiro.preparar ( ) ) ;
        } else {
          console.log (pratoBrigadeiro.alimento ( ) ) ;
        }
      }
// Pedir para fazer brigadeiro
fazerBrigadeiro( ) ;