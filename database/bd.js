///arquivo contendo as configurações inicialização do banco de dados do navegador
//cria um banco de dados
db = openDatabase('ViraLataDb', '1.0', 'teste', 2 * 1024 * 1024);

///cria tabela pessoa para armazenar os cadastros
db.transaction(
    function (tx) { 
        tx.executeSql('CREATE TABLE PESSOA(id INTEGER PRIMARY KEY AUTOINCREMENT, nome VARCHAR, data_nascimento VARCHAR, cpf VARCHAR)')
     });

//função para salvar pessoa
function inserir_pessoa(nome, data_nascimento, cpf){
    alert('inserindo -> ' + nome);
    //chama função do banco de dados
    db.transaction(
        function(tx){
            //executa o comando para inserir as informações
            tx.executeSql('INSERT INTO PESSOA (nome, data_nascimento, cpf) VALUES(?, ?, ?)',
            //atribui os parametros
            [nome, data_nascimento, cpf],
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