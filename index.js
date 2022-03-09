class Retangulo{
  constructor(largura, altura){
    this.altura = largura;
    this.largura = altura;
  }  

  calcularArea(){
    return this.largura*this.altura;
  }

  area(){
          return this.calcularArea();
  }
  
}

let quadrado = new Retangulo("10", "10");
let retangulo = new Retangulo ("30", "60");
let aleatorio = new Retangulo ("10", "20");

           
console.log(quadrado.area());
console.log(retangulo.area());
console.log(aleatorio.area());

