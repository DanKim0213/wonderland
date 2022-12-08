import {
  JSONSchema,
  Model,
  RelationMappings,
  RelationMappingsThunk,
} from "objection";
import Brand from "../../brand/model/Brand";

export default class Product extends Model {
  id!: number;
  code!: string;
  price!: number;
  name!: string;
  release!: Date;
  brand!: Brand;

  static tableName = "products";

  static jsonSchema: JSONSchema = {
    type: "object",
    required: ["code", "price", "name", "brandId"],

    properties: {
      id: { type: "integer" },
      code: { type: "string", minLength: 1, maxLength: 100 },
      price: { type: "integer" },
      name: { type: "string", minLength: 1, maxLength: 255 },
      release: { type: "string", format: "date" },
    },
  };

  static relationMappings: RelationMappings | RelationMappingsThunk = () => ({
    brand: {
      relation: Model.BelongsToOneRelation,
      modelClass: Brand,

      join: {
        from: "products.brandId",
        to: "brands.id",
      },
    },
  });
}
