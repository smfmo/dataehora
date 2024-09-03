let operacao = '';

function setOperacao(op){
    operacao = op;

}
function calcular(){
    let n1 = parseFloat(document.getElementById('num1').value);
    let n2 = parseFloat(document.getElementById('num2').value);
    let resultado;
    switch(operacao){
        case '+':
            resultado = n1 + n2
            break;
        case '-':
            resultado = n1 - n2
            break;
        case '/':
            if(n2 !== 0){
                resultado = n1 / n2
            }else{
                resultado = 'erro! nao é possivel dividir por 0'
            }
            break;
        case '*':
            resultado = n1 * n2
            break;

            default:
                resultado = 'operação inválida!'
        }
        document.getElementById('demo').innerHTML = "resultado = " + resultado;
}