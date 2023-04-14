// Variáveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

// Variáveis do Oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;

let colidiu = false;

function mostraRaquete(x, y) {
  rect(x, y, raqueteComprimento, raqueteAltura);
}

function movimentaMinhaRaquete() {
  if(keyIsDown(UP_ARROW)) {
    if(podeMoverCima(yRaquete)) {
      yRaquete -= 10;
    }
  }

  
  if(keyIsDown(DOWN_ARROW)) {
    if(podeMoverBaixo(yRaquete)) {
      yRaquete += 10;
    }
  }
}

function verificaColisaoRaquete(x, y) {
  colidiu = 
  collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
  if(colidiu) {
     velocidadeXBolinha *= -1;
    raquetada.play();
  }
}

function movimentaRaqueteOponente() {
  if(keyIsDown(87)) {
    if(podeMoverCima(yRaqueteOponente)) {
      yRaqueteOponente -= 10;
    }
  }
  
  if(keyIsDown(83)) {
    if(podeMoverBaixo(yRaqueteOponente)) {
      yRaqueteOponente += 10; 
    }
  }
}

function podeMoverBaixo(yRaquete, yRaqueteOponente) {
  if(yRaquete < 301) {
    return yRaquete < 301;
  }
  if(yRaqueteOponente < 301) {
    return yRaqueteOponente < 301;
  }
}

function podeMoverCima(yRaquete, yRaqueteOponente) {
  if(yRaquete > 1) {
    return yRaquete > 1;
  }
  if(yRaqueteOponente > 1) {
    return yRaqueteOponente > 1;
  }
}