
const pedidoService = require('../services/pedidoService');

function criar(req, res) {
  try {
    const pedido = pedidoService.criar(req.body);
    return res.status(201).json(pedido);
  } catch (erro) {
    return res.status(400).json({ erro: erro.message });
  }
}

function listar(req, res) {
  return res.status(200).json(pedidoService.listar());
}

function buscarPorId(req, res) {
  const pedido = pedidoService.buscarPorId(req.params.id);

  if (!pedido) {
    return res.status(404).json({ erro: 'Pedido não encontrado.' });
  }

  return res.status(200).json(pedido);
}

function atualizarStatus(req, res) {
  try {
    const pedido = pedidoService.atualizarStatus(
      req.params.id,
      req.body.status
    );

    if (!pedido) {
      return res.status(404).json({ erro: 'Pedido não encontrado.' });
    }

    return res.status(200).json(pedido);
  } catch (erro) {
    return res.status(400).json({ erro: erro.message });
  }
}

module.exports = {
  criar,
  listar,
  buscarPorId,
  atualizarStatus
};
