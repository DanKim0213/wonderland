import User from "../User";

export default interface UserService {
  findAll(): User[];
}
