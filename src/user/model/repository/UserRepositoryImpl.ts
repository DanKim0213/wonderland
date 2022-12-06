import User from "../User";
import UserRepository from "./UserRepository";

export default class UserRepositoryImpl implements UserRepository {
  getAll(): User[] {
    throw new Error("Method not implemented.");
  }
}
