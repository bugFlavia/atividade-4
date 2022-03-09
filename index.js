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
           
console.log(quadrado.area());
console.log(retangulo.area());

