import UserServiceImpl from "../model/service/UserServiceImpl";

export default class UserController {
  private userService;

  constructor() {
    this.userService = UserServiceImpl.instance;
  }
}
