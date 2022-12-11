import UserRepositoryImpl from "../repository/UserRepositoryImpl";
import User from "../User";
import UserService from "./UserService";

export default class UserServiceImpl implements UserService {
  private static _instance: UserService = new UserServiceImpl();
  private userRepo;

  private constructor() {
    // singleton pattern
    this.userRepo = UserRepositoryImpl.instance;
  }

  public static get instance() {
    return this._instance;
  }

  async findAll(): Promise<User[]> {
    return this.userRepo.findAll();
  }
  async findById(id: number): Promise<User> {
    return this.userRepo.findById(id);
  }
  async updateById(id: number, data: object): Promise<number> {
    return this.userRepo.updateById(id, data);
  }
  async deleteById(id: number): Promise<number> {
    return this.userRepo.deleteById(id);
  }
  async insertUser(user: User): Promise<number> {
    return this.userRepo.insertUser(user);
  }
}
