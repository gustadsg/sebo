
exports.up = function(knex) {
  return knex.schema.createTable('wishlist', function(table){
      table.increments('wish_id').primary().notNullable();
      table.string('user_id').notNullable();
      table.foreign('user_id').references('user_id').inTable('user').onDelete('cascade').onUpdate('cascade');
      table.string('book_id').notNullable();
      table.foreign('book_id').references('book_id').inTable('book').onDelete('cascade').onUpdate('cascade');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('wishlist');
};
