// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?

let botaoAtualizar = document.getElementById('atualizar-saldo') as HTMLButtonElement;
let botaoLimpar = document.getElementById('limpar-saldo') as HTMLButtonElement;
let somaInput = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo') as HTMLSpanElement;
let array:number[] = []

function somarAoSaldo(soma : number) : void {
    array.push(soma)
    let resultado = array.reduce((acumulador, atual) => acumulador + atual);
    campoSaldo.innerHTML = `${resultado}`;
}

function limparSaldo() : void{
    campoSaldo.innerHTML = `0`;
}

botaoAtualizar.addEventListener('click', function () {
    somarAoSaldo(Number(somaInput.value));
});

botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});

/**
    <h4>Valor a ser adicionado: <input id="soma"> </h4>
    <button id="atualizar-saldo">Atualizar saldo</button>
    <button id="limpar-saldo">Limpar seu saldo</button>
    <h1>"Seu saldo é: " <span id="campo-saldo"></span></h1>
 */