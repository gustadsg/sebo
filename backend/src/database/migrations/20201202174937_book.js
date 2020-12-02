exports.up = function (knex) {
  return knex.schema.createTable("book", function (table) {
    table.increments("book_id").primary().unique().notNullable();
    table.string("title").notNullable();
    table.string("image_path");
    table.string("description").defaultTo("livro sem descrição");
    table.string("author").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("book");
};
