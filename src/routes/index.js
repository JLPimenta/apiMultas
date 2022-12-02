const express = require('express');
const router = express.Router();

const controller = require('../controller');

router.post('/', controller.cadastrar);
router.get('/', controller.listarTodos);
router.get('/:id', controller.visualizar);

router.get('/status/:statusMulta', controller.buscarPorStatus); // pendente || paga

router.patch('/:id', controller.atualizar);
router.delete('/:id', controller.inativar);

module.exports = router;