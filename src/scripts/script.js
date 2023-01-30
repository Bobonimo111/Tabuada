
function main(){
    const select = document.querySelector("select#resultado");
    var numero = document.querySelector("input#entrada")
    limpar_options()
    for(x in n = taboada(numero.value)){
        add_options(n[x])
    }
    select.setAttribute("size",11)

}

function add_options(valor){
    const select = document.querySelector("select#resultado");
    var option = new Option(valor,valor);
    select.add(option)

}
function limpar_options(){
    const select = document.querySelector("select#resultado");
    for(i = 0; i < select.options.length;i++){
        select.options[i] = null;
    }
}
function taboada(valor){
    let numeros = []
    for(x = 0;x <= 10; x++){
        let mult = x * valor
        calc = `${x} X ${valor} = ${mult}`
        numeros.push(calc)

    }
    return numeros;
}