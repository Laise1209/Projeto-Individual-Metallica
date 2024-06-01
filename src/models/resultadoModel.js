function registrarDados(fkUsuario, qtdRespostasCorretas) {
    var instrucao = `INSERT INTO respostasQuiz (fkUsuario, qtdRespostasCorretas) values ('${fkUsuario}','${qtdRespostasCorretas}')`;
    return database.executar(instrucao);
}

module.exports = {
    registrarDados
}