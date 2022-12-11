import User from "../User";

export default interface UserService {
  findAll(): Promise<User[]>;
  findById(id: number): Promise<User>;
  updateById(id: number, data: object): Promise<number>;
  deleteById(id: number): Promise<number>;
  insertUser(user: User): Promise<number>;
}
