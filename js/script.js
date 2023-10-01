let entradaUsuario = "";
let resultadoMostrado = false;

function adicionarNatela(value) {
    if (resultadoMostrado){
        document.getElementById("display").value = "";
        resultadoMostrado = false;
    }
    entradaUsuario += value;
    document.getElementById("display").value = entradaUsuario;
}
function limparTela(){
    entradaUsuario = "";
    document.getElementById("display").value = "";
}
function calcularResultado() {
    try{
        entradaUsuario = eval(entradaUsuario);
        document.getElementById("display").value = entradaUsuario;
        resultadoMostrado = true;
    } catch (error){
        document.getElementById("display").value = "Erro";
    }
}