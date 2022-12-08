import {
  JSONSchema,
  Model,
  RelationMappings,
  RelationMappingsThunk,
} from "objection";
import Cloth from "../../cloth/model/Cloth";

export default class Combination extends Model {
  id!: number;
  cloth!: Cloth;

  static tableName = "Combinations";

  static jsonSchema: JSONSchema = {
    type: "object",
    required: ["clothId"],

    properties: {
      id: { type: "integer" },
      clothId: { type: "integer" },
      parentId: { type: "integer" },
    },
  };

  static relationMappings: RelationMappings | RelationMappingsThunk = () => ({
    cloth: {
      relation: Model.BelongsToOneRelation,
      modelClass: Cloth,
      join: {
        from: "Combination.clothId",
        to: "clothes.id",
      },
    },
  });
}
