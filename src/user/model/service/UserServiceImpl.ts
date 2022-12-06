import User from "../User";
import UserService from "./UserService";

export default class UserServiceImpl implements UserService {
  findAll(): User[] {
    throw new Error("Method not implemented.");
  }
}
