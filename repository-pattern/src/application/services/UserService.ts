import { User } from "../../domain/entities/User";
import { UserRepository } from "../../domain/repositories/UserRepository";
import { GetUserByIDUseCase } from "../usecases/GetUserByIDUseCase";
import { SaveUserUseCase } from "../usecases/SaveUserUseCase";

export class UserService {
  private readonly getUserByIDUseCase: GetUserByIDUseCase;
  private readonly saveUserUseCase: SaveUserUseCase;

  constructor(userRepository: UserRepository) {
    this.getUserByIDUseCase = new GetUserByIDUseCase(userRepository);
    this.saveUserUseCase = new SaveUserUseCase(userRepository);
  }

  async getUserByID(id: string): Promise<User | null> {
    return this.getUserByIDUseCase.execute(id);
  }

  async saveUser(user: User): Promise<User | null> {
    return this.saveUserUseCase.execute(user);
  }
}
