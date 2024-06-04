var database = require("../database/config");

function buscarEvolucao(idUsuario) {

    var instrucao = `SELECT nome, qtdRespostasCorretas AS pontuacao FROM usuario 
                        JOIN respostasQuiz ON idUsuario = fkUsuario 
                        WHERE idUsuario = ${idUsuario};`;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// function buscarMedidasEmTempoReal(idAquario) {

//     var instrucaoSql = ``;

//     console.log("Executando a instrução SQL: \n" + instrucaoSql);
//     return database.executar(instrucaoSql);
// }

module.exports = {
    buscarEvolucao,
    // buscarMedidasEmTempoReal
}