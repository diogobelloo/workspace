
function contar() {
    let ini = document.getElementById("inicio");
    let fim = document.getElementById("fim");
    let pass= document.getElementById("passo");
    let res= document.getElementById("lista");
    

    if(ini.value.length == 0 || fim.value.length == 0 || pass.value.length == 0){
     res.innerHTML = "[ERRO] Faltam dados"  
    }

    else {
        res.innerHTML = "Contando: "
        let = i = Number(ini.value)
        let = f = Number(fim.value)
        let p = Number(pass.value)

        if(p <= 0 ){
            window.alert("Erro, o passo deve ser maior que 0, considerando passo 1 ")
            p  = 1
        }

        //contagem crescente
        if( i < f){
            for (let c = i; c <= f  ; c+=p ){
            res.innerHTML += `${c}\u{1F449}- ` 
            }
        }
        //Contagem regressiva
        else {
            for (let c= i ; c>= f  ; c-=p) {
                res.innerHTML += `${c}\u{1F449}-  ` 
                }
        }
        res.innerHTML += `\u{1F3C1}` 
    }

}






