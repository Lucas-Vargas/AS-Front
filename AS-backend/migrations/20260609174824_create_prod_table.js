/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  // Cria a tabela 'produtos'
  return knex.schema.createTable('produtos', table => {
    table.increments('id').primary(); // ID automático
    table.string('nome').notNullable(); // Nome do produto
    table.decimal('preco', 10, 2).notNullable(); // Preço do produto
    table.integer('estoque').notNullable(); // Quantidade em estoque
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  // Desfaz a criação da tabela (útil para reverter alterações)
  return knex.schema.dropTable('produtos');
};
