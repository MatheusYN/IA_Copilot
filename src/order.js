// Gerado com IA (Copilot Chat) usando o prompt:
// "Crie uma função em JavaScript que calcula o total de um pedido a partir de uma lista de itens,
// aplicando um desconto percentual opcional e validando entradas inválidas."

function calculateTotalWithDiscount(items, discountPercent = 0) {
  if (!Array.isArray(items)) {
    throw new Error('Items must be an array');
  }

  const subtotal = items.reduce((total, item) => {
    if (typeof item.price !== 'number' || typeof item.quantity !== 'number') {
      throw new Error('Invalid item format');
    }
    return total + item.price * item.quantity;
  }, 0);

  const discount = subtotal * (discountPercent / 100);
  return Number((subtotal - discount).toFixed(2));
}

module.exports = { calculateTotalWithDiscount };


