import { UserService } from "../../application/services/UserService";
import { User } from "../../domain/entities/User";

export class UserController {
  constructor(private readonly userService: UserService) {}

  async run(req: any, res: any): Promise<User> {
    try {
      const { id } = req.params;
      const user = await this.userService.getUserByID(id);
      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}
