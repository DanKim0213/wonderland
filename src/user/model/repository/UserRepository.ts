import User from "../User";

export default interface UserRepository {
  getAll(): User[];
}
