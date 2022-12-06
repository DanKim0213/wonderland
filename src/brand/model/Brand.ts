import { Model } from "objection";

export default class Brand extends Model {
  id!: number;
  name!: string;
}
