// Gerado com IA (Copilot Chat) usando o prompt:
// "Crie testes unitários em Jest para a função calculateTotalWithDiscount,
// cobrindo cenários com e sem desconto e entradas inválidas."

const { calculateTotalWithDiscount } = require('../src/order');

describe('calculateTotalWithDiscount', () => {
  test('calcula o total sem desconto', () => {
    const items = [{ price: 10, quantity: 2 }];
    expect(calculateTotalWithDiscount(items)).toBe(20);
  });

  test('aplica desconto corretamente', () => {
    const items = [{ price: 100, quantity: 1 }];
    expect(calculateTotalWithDiscount(items, 10)).toBe(90);
  });

  test('lança erro para entrada inválida', () => {
    expect(() => calculateTotalWithDiscount(null)).toThrow();
  });
});

