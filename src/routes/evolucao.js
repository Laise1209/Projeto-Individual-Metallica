var express = require("express");
var router = express.Router();

var evolucaoController = require("../controllers/evolucaoController");

router.get("/dadoEvolucao/", function (req, res) {
    evolucaoController.buscarEvolucao(req, res);
});

// router.get("/tempo-real/", function (req, res) {
//     evolucaoController.buscarMedidasEmTempoReal(req, res);
// })

module.exports = router;