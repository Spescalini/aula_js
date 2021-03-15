function seleciona(element){
    console.log(element.value);
}

function cli (){
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar!";
}

function redirecionar (){
    window.open("https://tecmundo.com.br");
    window.location
}

function mouseover(botn){
    botn.innerHTML = "Obrigado por passaar o mouse";
}

function voltar(botn){
    botn.innerHTML = "Passe o mouse";
}

function load(){
    alert("Página Carregada");
}
/*function soma (n1,n2){
    return n1 + n2;
}

function validaidade (idade){
   if (idade >= 18){
       validar = true
   }else {
       validar = false
   }

   return validar;
}

var idade = prompt("Qual a sua idade?");
console.log (validaidade(idade));*/



/*var d = new Date();
console.log ("Ano: "+ d.getUTCFullYear());
console.log ("Mês: " + d.getMonth());
console.log ("Dia" + d.getDay());
console.log ("Hora: " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds());*/


/*var count;
for(count=0; count <=5; count++){
    alert(count);
}*/

/*var count = 0;
while(cont < 5){
    console.log(count);
    alert(count);
    count = count++
}*/

/*var idade = prompt("Qual é a sua idade?");
if (idade >= 18){
    alert ("Maior de Idade");
}else{
    alert ("Menor de Idade");
}*/

/*var frutas = [{nome: "Maçã", cor: "Vermelho", price: "R$ 6,99", unidade: "KG"}, {nome: "Uva", cor: "Roxa", price: "R$ 12,99", unidade: "KG"}]
console.log(frutas);
alert(frutas[0].price);*/

/*var fruta = {nome: "Maçã", cor: "Vermelho", price: "R$ 6,99", unidade: "KG"};
console.log(fruta);
alert(fruta.price);*/

/*var nome ="Sérgio Pescalini";
var n1 = 28;
var n2 = 10;
var frase = "Japão é o melhor time deo mundo"
//alert("Bem Vindo" + nome);
//alert(idade+idade2);
console.log(nome);
console.log(n1*n2);
console.log(frase.replace("Japão", "Brasil"));
console.log(frase.toLowerCase());*/

/*var lista = ["Maça", "Pêra", "Laranja"];
lista.push("Uva");
console.log(lista.toString());
console.log(lista.join(" || "));*/