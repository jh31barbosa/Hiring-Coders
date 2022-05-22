
let meuNome = 'JH';
let meuSobrenome = 'barbosa';
let minhaProfissao = 'fullstack developer';

//sem templatestring
console.log('Olá, eu sou' + meuNome+ '' + meuSobrenome+ 'minha profissao é:'+minhaProfissao)

//com template string
console.log(`Olá, meu nomé ${meuNome} ${meuSobrenome} e minha profissao é: ${minhaProfissao}`)

console.log(`O resultado da soma de 1 + 1 = ${1+1}`);
console.log(`o objeto json ${{chave:'valor'}}`);
let meuObjeto = {
    chave:'novo valor'
}