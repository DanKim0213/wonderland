import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("combinations_users").del();
  await knex("combinations").del();
  await knex("clothes").del();
  await knex("users").del();
  await knex("products").del();
  await knex("brands").del();

  // Inserts seed entries
  await knex("users").insert([
    {
      id: 1,
      email: "test1@gmail.com",
      password: "test1",
      gender: "FEMALE",
      name: "name test 1",
      birth: new Date(),
      address: JSON.stringify({
        street: "용이동 402호",
        city: "경기도 평택시",
        zipCode: "18114",
      }),
    },
    {
      id: 2,
      email: "test2@gmail.com",
      password: "test2",
      gender: "MALE",
      name: "name test 2",
      birth: new Date(),
    },
  ]);
  await knex("clothes").insert([
    {
      id: 1,
      imgPath: "public/img/users/1/user1_1.png",
      name: "t-shirt",
      category: "TOP",
      texture: "leather",
      hexCode: "#FFFFFF",
      season: "all",
      userId: 1,
    },
    {
      id: 2,
      imgPath: "public/img/users/1/user1_2.png",
      name: "sky blue pants",
      category: "PANTS",
      texture: "wool",
      hexCode: "#FFFFFF",
      season: "all",
      userId: 1,
    },
  ]);
  await knex("combinations").insert([
    {
      id: 1,
      clothId: 1,
    },
    {
      id: 2,
      clothId: 2,
      parentId: 1,
    },
  ]);
  await knex("combinations_users").insert([
    {
      combinationId: 1,
      userId: 1,
      bookmark: false,
    },
  ]);
  await knex("brands").insert([
    {
      id: 1,
      name: "buru n judy",
      website: "https://burunjudy.com",
    },
    {
      id: 2,
      name: "8 seconds",
      website:
        "https://www.ssfshop.com/8Seconds/main?brandShopNo=BDMA07A01&brndShopId=8SBSS",
    },
  ]);
}
