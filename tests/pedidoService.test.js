
const pedidoService = require('../src/services/pedidoService');

describe('Gerenciamento de pedidos', () => {
  test('deve cadastrar um pedido válido', () => {
    const pedido = pedidoService.criar({
      cliente: 'Maria Silva',
      tipo: 'entrega',
      valor: 100,
      prioridade: 'normal'
    });

    expect(pedido.id).toBeDefined();
    expect(pedido.cliente).toBe('Maria Silva');
    expect(pedido.status).toBe('recebido');
  });

  test('deve rejeitar cliente vazio', () => {
    expect(() => pedidoService.criar({
      cliente: '   ',
      tipo: 'entrega',
      valor: 100,
      prioridade: 'normal'
    })).toThrow('O cliente é obrigatório.');
  });

  test('deve rejeitar valor menor ou igual a zero', () => {
    expect(() => pedidoService.criar({
      cliente: 'Maria Silva',
      tipo: 'entrega',
      valor: 0,
      prioridade: 'normal'
    })).toThrow('O valor deve ser um número maior que zero.');
  });

  test('deve rejeitar identificador inexistente', () => {
    expect(pedidoService.buscarPorId(999999)).toBeUndefined();
  });
});
