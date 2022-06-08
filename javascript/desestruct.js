const pessoa = {
    nome: 'JH',
    sobrenome: 'Barbosa',
    idade:32,
    profissao: 'Developer'
};

console.log(pessoa);

/*let nome = pessoa.nome;
let sobrenome = pessoa.sobrenome;
let idade = pessoa.idade;
let profissao = pessoa.profissao;*/

//console.log(pessoa);

let {nome,sobrenome,idade,profissao} = pessoa;
console.log(nome,sobrenome,idade,profissao);