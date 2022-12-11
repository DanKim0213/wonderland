import {
  AjvValidator,
  Model,
  RelationMappings,
  RelationMappingsThunk,
} from "objection";
import Cloth from "../../cloth/model/Cloth";
import addFormats from "ajv-formats";

export default class User extends Model {
  id!: number;
  email!: string;
  password!: string;
  gender!: string;
  name!: string;
  birth!: string;

  clothes?: Cloth[];

  // static-virtualattributes
  // the diff between method and getter is that method is considered as Function while getter as an attribute
  static get virtualAttributes() {
    return ["age"];
  }

  get age() {
    return new Date().getFullYear() - Number(this.birth.substring(0, 4)) + 1;
  }

  // Table name is the only required property.
  static tableName = "users";

  // enable ajv formats to  validate the date field when inserting in database
  static createValidator() {
    return new AjvValidator({
      onCreateAjv: (ajv) => {
        addFormats(ajv);
      },
      options: {
        allErrors: true,
        validateSchema: true,
        ownProperties: true,
      },
    });
  }

  // Optional JSON schema. This is not the database schema! Nothing is generated
  // based on this. This is only used for validation. Whenever a model instance
  // is created it is checked against this schema. http://json-schema.org/.
  static get jsonSchema() {
    return {
      type: "object",
      required: ["email", "password", "gender", "name", "birth"],

      properties: {
        id: { type: "integer" },
        email: { type: "string", format: "email" },
        password: { type: "string", minLength: 1, maxLength: 100 },
        gender: { enum: ["FEMALE", "MALE"] },
        name: { type: "string", minLength: 1, maxLength: 100 },
        birth: { type: "string", format: "date" },

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
  }

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
