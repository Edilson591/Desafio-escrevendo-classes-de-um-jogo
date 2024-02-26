
const heroGame = {
    type:[
      "guerreiro",
      "mago",
      "monge",
      "ninja",
    ],
    typeAttack:["espada","magia","artes marciais", "shuriken"],
  
    age:Math.floor(Math.random()*50)
  
  }
  
  
  
  class hero {
    constructor(name,idade,tipo){
      this.name = name 
      this.idade = idade 
      this.tipo = tipo
    }
    mensagemAttack(){
  
      for(let typeName in this.name){
            console.log(`o ${this.name[typeName]} atacou usando ${this.name[typeName]}`) 
    }
  }
  }
  
  const gethero = new hero(heroGame.type,heroGame.age,heroGame.typeAttack)
  
  gethero.mensagemAttack()