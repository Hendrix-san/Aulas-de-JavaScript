let v1 = 5;
let v2 = -1;

if (v1 > v2) && (v2 > 0){
	console.log("A primeira variável é maior que a segunda e a segunda variável é um número positivo.");
}
if (v1 > v2) && (v2 < 0){
	console.log("A primeira variável é maior que a segunda e a segunda variável não é um número positivo.");
}
if (v1 < v2) || (v2 > 0){
	console.log("A primeira variável é menor que a segunda ou a segunda variável é um número positivo");
}