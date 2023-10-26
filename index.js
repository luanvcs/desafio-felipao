//Aqui eu defini nome e valor para as minhas variaveis
let nomeDoHeroi = "Ungido do Senhor";
let experiencia = 9.500;  //Aqui é necessario a utilização do ponto na númeração para funcionar

//Aqui foi necessario atribuir mais uma variavel para ser utilizada na estrutura 
let nivelDoHeroi;

//Para utilização da estrutura de repetição foi utilizado if, else if, else mais as portas lógicas
if (experiencia < 1.000) {
    nivelDoHeroi = "Ferro";
} else if (experiencia >= 1.001 && experiencia <= 2.000) {
    nivelDoHeroi = "Bronze";
} else if (experiencia >= 2.001 && experiencia <= 5.000) {
    nivelDoHeroi = "Prata";
} else if (experiencia >= 6.001 && experiencia <= 7.000) {
    nivelDoHeroi = "Ouro";
} else if (experiencia >= 7.001 && experiencia <= 8.000) {
    nivelDoHeroi = "Platina";
} else if (experiencia >= 8.001 && experiencia <= 9.000) {
    nivelDoHeroi = "Ascendente";
} else if (experiencia >= 9.001 && experiencia <= 10.000) {
    nivelDoHeroi = "Imortal";
} else {
    nivelDoHeroi = "Radiante";
}

console.log("O Herói de nome " + nomeDoHeroi + " está no nível de "+ nivelDoHeroi);