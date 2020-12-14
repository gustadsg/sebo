exports.up = function (knex) {
  return knex.schema.createTable("book", function (table) {
    table.increments("book_id").primary().unique().notNullable();
    table.string("title").notNullable();
    table.string("image_path");
    table.string("description").defaultTo("livro sem descrição");
    table.string("author").notNullable();
    table.integer("sale").defaultTo(0).notNullable();
    table.integer("quantity").defaultTo(1).notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("book");
};
