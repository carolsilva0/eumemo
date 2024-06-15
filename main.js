const botoes = document.querySelectorAll(".botao");

for(leti=0;i <botoes.length;i++){
botoes[i].onlick = function(){

for(let  j=0;j<botoes.length;j++){
botoes[j].classList.remove("ativo");
}

botoes[i].classList.add("ativo");
}
}
