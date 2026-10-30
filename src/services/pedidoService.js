
let pedidos = [];
let proximoId = 1;

const tiposPermitidos = ['entrega', 'retirada'];
const prioridadesPermitidas = ['baixa', 'normal', 'alta'];
const statusPermitidos = [
  'recebido',
  'em_preparacao',
  'enviado',
  'entregue',
  'cancelado'
];

function criar(dados) {
  const { cliente, tipo, valor, prioridade } = dados;

  if (typeof cliente !== 'string' || !cliente.trim()) {
    throw new Error('O cliente é obrigatório.');
  }

  if (!tiposPermitidos.includes(tipo)) {
    throw new Error('Tipo inválido. Use entrega ou retirada.');
  }

  if (typeof valor !== 'number' || !Number.isFinite(valor) || valor <= 0) {
    throw new Error('O valor deve ser um número maior que zero.');
  }

  if (!prioridadesPermitidas.includes(prioridade)) {
    throw new Error('Prioridade inválida. Use baixa, normal ou alta.');
  }

  const pedido = {
    id: proximoId++,
    cliente: cliente.trim(),
    tipo,
    valor,
    prioridade,
    status: 'recebido'
  };

  pedidos.push(pedido);
  return pedido;
}

function listar() {
  return pedidos;
}

function buscarPorId(id) {
  return pedidos.find(pedido => pedido.id === Number(id));
}

function atualizarStatus(id, novoStatus) {
  const pedido = buscarPorId(id);

  if (!pedido) {
    return null;
  }

  if (!statusPermitidos.includes(novoStatus)) {
    throw new Error('Status inválido.');
  }

  const transicoes = {
    recebido: ['em_preparacao', 'cancelado'],
    em_preparacao: ['enviado', 'cancelado'],
    enviado: ['entregue'],
    entregue: [],
    cancelado: []
  };

  if (!transicoes[pedido.status].includes(novoStatus)) {
    throw new Error('Transição de status não permitida.');
  }

  pedido.status = novoStatus;
  return pedido;
}

module.exports = {
  criar,
  listar,
  buscarPorId,
  atualizarStatus
};
