var database = require("../database/config");

function insertQuiz(fkUsuario, qtdRespostasCorretas){
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSqlQuiz = `
        INSERT INTO usuario (fkUsuario, qtdRespostasCorretas) VALUES ('${sessionStorage.ID_USUARIO}', '${questionsCorrect}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSqlQuiz);
    return database.executar(instrucaoSqlQuiz);
}