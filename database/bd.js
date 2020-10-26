///arquivo contendo as configurações inicialização do banco de dados do navegador
//cria um banco de dados
db = openDatabase('ViraLataDb', '1.0', 'teste', 2 * 1024 * 1024);

///cria tabela pessoa para armazenar os cadastros
db.transaction(
    function (tx) { 
        tx.executeSql('CREATE TABLE PESSOAs(id INTEGER PRIMARY KEY AUTOINCREMENT, nome VARCHAR, data VARCHAR, cpf VARCHAR, rg VARCHAR, telefone VARCHAR, cep VARCHAR, rua VARCHAR, bairro VARCHAR, estado VARCHAR, email VARCHAR, genero VARCHAR)')
     });

//função para salvar pessoa
function inserir_pessoa(nome, data, cpf, rg, tel, rua, bairro, estado, email, genero){
    alert('inserindo -> ' + nome);
    //chama função do banco de dados
    db.transaction(
        function(tx){
            //executa o comando para inserir as informações
            tx.executeSql('INSERT INTO PESSOAs (nome, data_nascimento, cpf, rg, tel, cep, rua, bairro, estado, email, genero) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
            //atribui os parametros
            [nome, data, cpf, rg, tel, rua, bairro, estado, email, genero],
            //caso der certo chama a função sucesso,
            sucesso,
            //se não chama a função de erro
            error)
        });
    
}

//exemplo de select (como fazer para consultar os dados)    
//db.transaction(function(tx){tx.executeSql('SELECT * from teste',[],function(transaction, result){console.log(result)})})

//função sucesso
function sucesso() {
    alert("Registro inserido com sucesso")
};

//função erro
function error() {
    alert("Erro ao inserir registro")
};