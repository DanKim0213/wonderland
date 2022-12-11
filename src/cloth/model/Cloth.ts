import {
  JSONSchema,
  Model,
  RelationMappings,
  RelationMappingsThunk,
} from "objection";
import User from "../../user/model/User";

export default class Cloth extends Model {
  id!: number;
  imgPath!: string;
  name!: string;
  category!: string;
  texture!: string;
  hexCode!: string;
  season!: string;
  owner!: User;

  static tableName = "clothes";

  // static jsonSche
  static jsonSchema: JSONSchema = {
    type: "object",
    required: ["imgPath", "category", "texture", "hexCode", "season", "userId"],

    properties: {
      id: { type: "integer" },
      imgPath: { type: "string", minLength: 1, maxLength: 255 },
      name: { type: ["string", "null"] },
      category: { enum: ["JACKET", "TOP", "PANTS"] },
      texture: { type: "string", minLength: 1, maxLength: 255 },
      hexCode: { type: "string" },
      season: { enum: ["ALL", "SPRING", "SUMMER", "AUTUMN", "WINTER"] },
      userId: { type: "integer" },
    },
  };

  static relationMappings: RelationMappings | RelationMappingsThunk = () => ({
    owner: {
      relation: Model.BelongsToOneRelation,
      modelClass: User,
      join: {
        from: "clothes.userId",
        to: "users.id",
      },
    },
  });
}
