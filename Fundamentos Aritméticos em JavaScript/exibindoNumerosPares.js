/* Crie um programa que leia um número e mostre os números pares até esse número, inclusive ele mesmo.*/

let numero = gets();

let par = 2;

while (par <= numero) {
  console.log(par);
  par += 2;
}