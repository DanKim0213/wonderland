import User from "../User";
import UserRepository from "./UserRepository";

export default class UserRepositoryImpl implements UserRepository {
  private static _instance: UserRepository = new UserRepositoryImpl();

  private constructor() {
    // singleton pattern
  }

  public static get instance() {
    return this._instance;
  }
  async findAll(): Promise<User[]> {
    return await User.query();
  }
  async findById(id: number): Promise<User> {
    const user = await User.query().findById(id);
    if (!user) throw new Error("no user found");
    return user;
  }
  async updateById(id: number, data: object): Promise<number> {
    const numUpdated = await User.query().findById(id).patch(data);
    if (numUpdated !== 1) throw new Error("no user updated");
    return numUpdated;
  }
  async deleteById(id: number): Promise<number> {
    const numDeleted = await User.query().deleteById(id);
    if (numDeleted !== 1) throw new Error("no user deleted");
    return numDeleted;
  }
  async insertUser(user: User): Promise<number> {
    const newUser = await User.query().insert(user);
    return newUser.id;
  }
}
