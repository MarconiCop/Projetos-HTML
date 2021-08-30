/*Declarar vetor*/
var vetor = [2, 5, 20, 31];
/*Imprimir todas posições do vetor */
document.write("<h1>" + vetor[0] + "</h1>"); 
document.write("<h1>" + vetor[1] + "</h1>"); 
document.write("<h1>" + vetor[2] + "</h1>"); 
document.write("<h1>" + vetor[3] + "</h1>"); 
 /*Posição quatro indefinida*/
document.write("<h1>" + vetor[4] + "</h1>");       

/*Declarar posição 4 do vetor*/
vetor[4]=200;

/*Imprimir a posição 4 do vetor*/
document.write("<h1>" + vetor[4] + "</h1>");

/*Declarar vetor 2 */
var vetor2 = [30,'B',34.21,"PontoZero",40];

/*Imprimir todo o vetor 2 através de repetição*/
for(i=0; i<vetor2.length; i++){                           
    document.write("<h1>" + vetor2[i] + "</h1>"); 
}

/*Teste de soma*/
document.write(vetor2[0] + 40);

/*Leitura de Strings concatenando*/
/*Usar parenteses na soma para não concatenar*/
document.write("<br>" + vetor2[0] + vetor2[4]);

var soma = vetor2[0] + vetor2[4];

/*Calculo realizado com sucesso*/
document.write("<br>" + soma);

/*Outra forma de declarar vetor*/
var vetor3 = [];

vetor3[0] = 20;
vetor3[1] = 200;
vetor3[2] = "texto";

/*Imprimir todo o vetor 3 através de repetição*/
for(i=0; i<vetor3.length; i++){                           
    document.write("<h1>" + vetor3[i] + "</h1>"); 
}

/*Outra forma de declarar vetor*/
var vetor4 = new Array("João", 30, 1.81, "Maria");
vetor4[4] = "José";

/*Imprimir todas posições do vetor 4*/
document.write("<h1>" + vetor4[0] + "</h1>"); 
document.write("<h1>" + vetor4[1] + "</h1>"); 
document.write("<h1>" + vetor4[2] + "</h1>"); 
document.write("<h1>" + vetor4[3] + "</h1>"); 
document.write("<h1>" + vetor4[4] + "</h1>"); 
