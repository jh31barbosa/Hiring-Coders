//Incluindo uma biblioteca
/*const http = require('http');
const queryString = require('query-string');
const url = require('url');
const fs = require('fs')

//Definição de endereço / URL
const hostname = '127.0.0.1'; // localhost
const port = 3000;

// Implementação da regra de negocios
const server = http.createServer((req, res) => {

  let resposta;
  const urlparse = url.parse(req.url, true);

  //Receber informações do usuario
  const params = queryString.parse(urlparse.search);


// Criar um usuario - Atualizar um usuario
if(urlparse.pathname == '/criar-atualizar-usuario' ) {

    //Salvar as informações
  fs.writeFile('users/'+ params.id + '.txt',JSON.stringify(params), function (err) {
    if (err) throw err;
    console.log('Saved!');
    resposta = 'Usuario criado/atualizado com sucesso';

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(resposta);

  });
  
}
//Selecionar um usuario
else if(urlparse.pathname == '/selecionar-usuario'){
  fs.readFile('users/' + params.id + '.txt', function(err, data) {
    resposta = data;

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(resposta);
  });
}

//Remover um usuario
else if(urlparse.pathname == '/remover-usuario'){
  fs.unlink('users/' + params.id + '.txt', function (err) {
    if (err) throw err;
    console.log('File deleted!');
    
    resposta = err ? 'Usuario nao encontrado' : 'Usuario removido';
    
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(resposta);
  });
}

});

// Execução
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
*/
const obj = { a: 1 } 

obj.a += 3 

console.log(obj.a) 





//http://127.0.0.1:3000/criar-atualizar-usuario?nome=josebarbosa&idade=32&id=1
//http://127.0.0.1:3000/criar-atualizar-usuario?nome=joseb.m&idade=42&id=1
//http://127.0.0.1:3000/selecionar-usuario?id=1
//http://127.0.0.1:3000/remover-usuario?id=1
