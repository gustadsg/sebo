// criação da tabela
exports.up = function(knex) {
  return knex.schema.createTable('user', function(table){
      //table fields:
      table.string('user_id').primary().notNullable();
      table.string('name').notNullable();
      table.string('email').unique().notNullable();
      table.string('password').notNullable();
      table.boolean('admin').notNullable();
  });
};
// o que acontece se alguem quiser desfazer essa migration
exports.down = function(knex) {
  return knex.schema.dropTable('user');
};
