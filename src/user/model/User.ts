import {
  JSONSchema,
  Model,
  RelationMappings,
  RelationMappingsThunk,
} from "objection";
import Cloth from "../../cloth/model/Cloth";

export default class User extends Model {
  id!: number;
  email!: string;
  password!: string;
  gender!: string;
  name!: string;
  age!: number; // TODO: need to be calculated by birth

  clothes?: Cloth[];

  // Table name is the only required property.
  static tableName = "users";

  // Optional JSON schema. This is not the database schema! Nothing is generated
  // based on this. This is only used for validation. Whenever a model instance
  // is created it is checked against this schema. http://json-schema.org/.
  static jsonSchema: JSONSchema = {
    type: "object",
    required: ["email", "password", "gender", "name", "birth"],

    properties: {
      id: { type: "integer" },
      email: { type: "string", minLength: 1, maxLength: 100, format: "email" },
      password: { type: "string", minLength: 1, maxLength: 100 },
      gender: { enum: ["FEMALE", "MALE"] },
      name: { type: "string", minLength: 1, maxLength: 100 },
      birth: { type: "string", minLength: 1, maxLength: 100, format: "date" },

      // Properties defined as objects or arrays are
      // automatically converted to JSON strings when
      // writing to database and back to objects and arrays
      // when reading from database. To override this
      // behaviour, you can override the
      // Model.jsonAttributes property.
      address: {
        type: ["object", "null"],
        properties: {
          street: { type: "string" },
          city: { type: "string" },
          zipCode: { type: "string" },
        },
      },
    },
  };

  // This object defines the relations to other models. The relationMappings
  // property can be a thunk to prevent circular dependencies.
  static relationMappings: RelationMappings | RelationMappingsThunk = () => ({
    clothes: {
      relation: Model.HasManyRelation,
      modelClass: Cloth,
      join: {
        from: "users.id",
        to: "clothes.ownerId",
      },
    },
  });
}
