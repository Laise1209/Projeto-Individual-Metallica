var database = require("../database/config");

function buscarUltimasMedidasGlobal(limite_linhas) {

    var instrucaoSql = `SELECT nome, max(qtdRespostasCorretas) AS pontuacao FROM usuario 
                    JOIN respostasQuiz ON idUsuario = fkUsuario 
                    GROUP BY idUsuario`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// function buscarMedidasEmTempoReal(idAquario) {

//     var instrucaoSql = ``;

//     console.log("Executando a instrução SQL: \n" + instrucaoSql);
//     return database.executar(instrucaoSql);
// }

module.exports = {
    buscarUltimasMedidasGlobal,
    // buscarMedidasEmTempoReal
}
