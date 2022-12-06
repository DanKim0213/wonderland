import { Model } from "objection";
import Brand from "../brand/Brand";

export default class Product extends Model {
  id!: number;
  name!: string;
  regDate!: Date;
  brand!: Brand;

  static tableName = "products";

  static jsonSchema = {
    type: "object",
    required: ["name"],

    properties: {
      id: { type: "integer" },
      name: { type: "string", minLength: 1, maxLength: 255 },
      regDate: { type: "string", format: "date" },
    },
  };

  static relationMappings = () => ({
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
