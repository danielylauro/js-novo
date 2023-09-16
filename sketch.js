let cor;
let contador; 

let circuloX; // horizontal
let circuloY; // vertical
//estão armazenando todos os circulos aqui

function setup() {
  createCanvas(400, 400); //width x height = largura e altura
  
  background(color(100,0,0)); //cor fundo

cor = color(random(0,255), random(0,255), random(0,255));
//padrão RGB (tons de vermelho, verde e azul que variam de 0 a 255)

  circuloX = [0,0, 0]; //todos os circulo no horizontal começarão em 0
  circuloY = [random(height), random(height), random(height)]; //todos na vertical terão um número aleatório para andar na altura
  //DESSA FORMA ECONOMIZA ESPAÇO, E TORNA O CÓDIGO MAIS LIMPO  
}

function draw() {
  
  fill(cor);

    //console.log(circuloX, length);
  
  for(let contador in circuloX){
   // console.log(contador);
    
    circle(circuloX[contador], circuloY[contador], 30);
    circuloX [contador] += random(0,3); 
    circuloY [contador] += random(-3,3); 
  
 
  if(circuloX[contador] >= width) {
    circuloX[contador] = 0;
    circuloY[contador] = random(height);
  } }

  
if (mouseIsPressed){

cor = color(random(255), random(255), random(255), random(255)); }

}