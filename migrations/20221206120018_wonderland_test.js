/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("users", function (table) {
      table.increments("id");
      table.string("name", 255).notNullable();
      table.integer("age").notNullable();
    })
    .createTable("products", function (table) {
      table.increments("id");
      table.integer("price").notNullable();
      table.string("name", 10000).notNullable();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("users").dropTableIfExists("products");
};
