import { JSONSchema, Model } from "objection";

export default class Brand extends Model {
  id!: number;
  name!: string;
  website!: string;

  static tableName = "brands";

  static jsonSchema: JSONSchema = {
    type: "object",
    required: ["name", "website"],

    properties: {
      id: { type: "integer" },
      name: { type: "string", minLength: 1, maxLength: 100 },
      website: { type: "string", minLength: 1, maxLength: 100 },
    },
  };
}
