import * as dotenv from "dotenv";
import Knex from "knex";
import knexConfig from "../../knexfile";
import { Model } from "objection";
import User from "../../src/user/model/User";
import Cloth from "../../src/cloth/model/Cloth";

dotenv.config();
// Initialize knex.
const knex = Knex(
  process.env.NODE_ENV === "production"
    ? knexConfig.production
    : knexConfig.development
);

describe("User model in User folder", () => {
  beforeAll(() => {
    Model.knex(knex);
  });
  afterAll(() => {
    knex.destroy();
  });

  test("get a user", async () => {
    const aPerson = await User.query().findById(1);
    expect(aPerson?.age).toBe(1);
    expect(aPerson).toBeInstanceOf(User);
  });

  test("get clothes of a user ", async () => {
    const clothes = await User.relatedQuery("clothes").for(1);
    expect(clothes).toEqual([
      {
        id: 1,
        imgPath: "public/img/users/1/user1_1.png",
        name: "t-shirt",
        category: "TOP",
        texture: "leather",
        hexCode: "#FFFFFF",
        season: "ALL",
        ownerId: 1,
      },
      {
        id: 2,
        imgPath: "public/img/users/1/user1_2.png",
        name: "sky blue pants",
        category: "PANTS",
        texture: "wool",
        hexCode: "#FFFFFF",
        season: "ALL",
        ownerId: 1,
      },
    ]);
  });

  test("insert a user", async () => {
    const aUser = {
      email: "anonymous@gmail.com",
      password: "anonymous",
      gender: "FEMALE",
      name: "name anonymous",
      birth: new Date(),
      address: JSON.stringify({
        street: "용이동 402호",
        city: "경기도 평택시",
        zipCode: "18114",
      }),
    };

    const anonymous = await User.query().insert(aUser);
    expect(anonymous).toBeInstanceOf(User);
    expect(anonymous?.name).toBe("name anonymouse");
  });
});
