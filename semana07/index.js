class Produto {
    nome;
    preco;
    quantidade;
  
    constructor(valorNome, valorPreco, valorQuantidade){
      this.nome = valorNome
      this.preco = valorPreco
      this.quantidade = valorQuantidade
    }
  
    Vender(quantidadeVendida){
      if(quantidadeVendida > this.quantidade){
        console.log("Estoque insuficiente!")
        console.log(`Existe apenas ${this.quantidade} unidades disponíveis`)
        return
      }
        
      this.quantidade -= quantidadeVendida
    }
  
    Repor(quantidadeReposta){
      this.quantidade += quantidadeReposta
    }
  
    MostrarEstoque(){
      console.log(`O produto ${this.nome} custa R$ ${this.preco}\n e possui ${this.quantidade} unidades em estoque!`)
    }
  
    AtualizarPreco(novoValor){
      this.preco = novoValor
    }
  }
  
  class Pessoa {
    nome;
    idade;
    profissao;
    
    constructor(nome, idade, profissao){
      this.nome = nome
      this.idade = idade
      this.profissao = profissao
    }
  }
  class Cliente extends Pessoa {
    telefone;
    email;
    clienteDesde;
  
    constructor(nome, idade, profissao, telefone, email, clienteDesde){
      super(nome, idade, profissao)
      this.telefone = telefone
      this.email = email
      this.clienteDesde = clienteDesde
    }
  }
  
  
  const cliente = new Cliente("Vinícius", 29, "TI", "777776677", "email@email.com", "2010-05-23")
  console.log(cliente)
  
  
  
  const caneta = new Produto("Caneta", 2, 5)
  caneta.Vender(5)
  caneta.Repor(21)
  caneta.Vender(15)
  caneta.AtualizarPreco(2.5)
  caneta.MostrarEstoque()