// Construtora conta Bancaria.
function  contaBanco ( numero, saldo, nomeDotitular ) {
    this.numero = numero;
    this.saldo = saldo;
    this.nomeDotitular = nomeDotitular;

    // Metodo para depositos
    this.deposito  =  function (valor)  {
        this.saldo + = valor;
        console.log ( "Depósito realizado com sucesso! \n Novo saldo: R$" this.saldo.toFixed (2)}\n`)
    };
    
    // Metodo para saques
    this.sacar  =  função ( valor )  {
        if ( this . saldo < valor ) {
            console . log ( `Saldo insuficiênte \ nSeu saldo atual é: R $ { this . saldo } \ n` )
        }  else  {
            isso . saldo - = valor ;
            console . log ( `Saque realizado com sucesso! \ nNovo saldo: R $ { this . saldo . toFixed ( 2 ) } \ n` ) ;
        }
    }
}

// Instanciando objeto contaBancaria
let  conta1  =  nova  contaBanco ( 123 ,  10000 ,  'José da Silva' ) ;

// Deposito
conta1 . depositar ( 2500 ) ;

// Tentativa de saque com valor acima do saldo.
conta1 . sacar ( 2600000 ) ;