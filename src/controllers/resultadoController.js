var resultadoModel = require("../models/resultadoModel");

function registrarDados(req, res){
    var qtdRespostasCorretas = req.body.scoreServer
    var fkUsuario = req.params.fkUsuario
    // var idRespostasQuiz = req.body.quizServer

    // console.log(`Pontos aqui` + pontos)
    resultadoModel.registrarDados(fkUsuario, qtdRespostasCorretas)
    .then(
        function (resultado) {
            res.status(201).send({})
        }
    )
}

module.exports = {
    registrarDados
}