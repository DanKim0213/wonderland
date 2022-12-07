import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
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
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists("users").dropTableIfExists("products");
}
