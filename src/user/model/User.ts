import { Model } from "objection";

export default class User extends Model {
  id!: number;
  name!: string;
  age!: number;

  // clothes?: Cloth[];
  // brands?: Brand[];

  // Table name is the only required property.
  static tableName = "users";

  // Optional JSON schema. This is not the database schema! Nothing is generated
  // based on this. This is only used for validation. Whenever a model instance
  // is created it is checked against this schema. http://json-schema.org/.
  static jsonSchema = {
    type: "object",
    required: ["name", "age"],

    properties: {
      id: { type: "integer" },
      name: { type: "string", minLength: 1, maxLength: 255 },
      age: { type: "number" },
    },
  };

  // This object defines the relations to other models. The relationMappings
  // property can be a thunk to prevent circular dependencies.
  // static relationMappings = () => ({
  //   clothes: {
  //     relation: Model.HasManyRelation,
  //     modelClass: Cloth,
  //     join: {
  //       from: "users.id",
  //       to: "clothes.ownerId",
  //     },
  //   },

  //   brands: {
  //     relation: Model.ManyToManyRelation,
  //     modelClass: Brand,
  //     join: {
  //       from: "users.id",
  //       through: {
  //         from: "users_brands.userId",
  //         to: "users_brands.brandId",
  //       },
  //       to: "brands.id",
  //     },
  //   },
  // });
}
