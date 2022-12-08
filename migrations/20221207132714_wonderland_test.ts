import { Knex } from "knex";

// TODO: how about creating a tag table for indexing
export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .createTable("users", function (table) {
      table.increments("id");
      table.string("email", 100).unique().notNullable();
      table.string("password", 100).notNullable();
      table.enum("gender", ["FEMALE", "MALE"]);
      table.string("name", 100).notNullable();
      table.date("birth").notNullable();
      table.string("address");
      table.integer("postCode").unsigned();
    })
    .createTable("clothes", function (table) {
      table.increments("id");
      table.string("imgPath", 255).notNullable();
      table.string("name", 100);
      table.enum("category", ["JACKET", "TOP", "PANTS", "DRESS"]);
      table.string("texture", 100).notNullable();
      table.string("hexCode", 10).notNullable();
      table.enum("season", ["ALL", "SPRING", "SUMMER", "AUTUMN", "WINTER"]);
      table.integer("userId").unsigned().notNullable();

      table.foreign("userId").references("id").inTable("users");
    })
    .createTable("combinations", function (table) {
      // A "top" cloth could be a parent id.
      table.increments("id");
      table.integer("clothId").unsigned().notNullable();
      table.integer("parentId").unsigned(); // self-reference to "top" cloth

      table.foreign("clothId").references("id").inTable("clothes");
    })
    .createTable("combinations_users", function (table) {
      // a clothes-set to a user
      table.integer("combinationId").unsigned().notNullable();
      table.integer("userId").unsigned().notNullable();
      table.boolean("bookmark").notNullable();
      table.string("tag", 255); // e.g. "spring", "cute", "festival"

      table.primary(["combinationId", "userId"]);
      table.foreign("combinationId").references("id").inTable("combinations");
      table.foreign("userId").references("id").inTable("users");
    })
    .createTable("brands", function (table) {
      table.increments("id");
      table.string("name").notNullable();
      table.string("website", 100).notNullable();
    })
    .createTable("products", function (table) {
      table.increments("id");
      table.string("code").notNullable();
      table.integer("price").notNullable();
      table.string("name", 100).notNullable();
      table.date("release");
      table.integer("brandId").unsigned();

      table.foreign("brandId").references("id").inTable("brands");
    })
    .createTable("combinations_brands", function (table) {
      // It would be good for a relational table to have its own attributes that only show in "relationship".
      // Otherwise, if no attribute is shown for their relationship, it is good to go with a foreign key.
      table.primary(["combinationId", "brandId"]);
      table.integer("combinationId").unsigned().notNullable();
      table.integer("brandId").unsigned().notNullable();
      table.string("tag", 255);
    });
}

export async function down(knex: Knex): Promise<void> {
  // required to firstly drop the tables which have foreign keys
  return knex.schema
    .dropTableIfExists("combinations_users")
    .dropTableIfExists("combinations_brands")
    .dropTableIfExists("combinations")
    .dropTableIfExists("clothes")
    .dropTableIfExists("users")
    .dropTableIfExists("products")
    .dropTableIfExists("brands");
}
