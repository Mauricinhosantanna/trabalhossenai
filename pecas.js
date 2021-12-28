var listadepeca = ["filtro de ar","motor","amortecedor"]
if (listadepeca.length < 10){
    console.log("é possivel cadastrar mais peças")
} else {
    console.log("não tem mais espaço na lista")
}

let peso = 50;
if(peso<100){
    console.log("a peça deve pesar no minimo 100g")
} else{
    console.log("A peça possui peso adequado")
}
let nomePeca = "disco de freio"
if (nomePeca.length>3){
    console.log("Nome de peça esta adequado para o cadastro!")
}else if (nomePeca.length ==0){
console.log("O nome da peça não pode ser vazio")
}else{
    console.log("o nome deve ter mais de 3 caracteres, digite um nome adequado")
}