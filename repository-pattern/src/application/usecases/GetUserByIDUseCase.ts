import { User } from "../../domain/entities/User";
import { UserRepository } from "../../domain/repositories/UserRepository";

export class GetUserByIDUseCase {
  //   private readonly userRepository: UserRepository;
  //   constructor(userRepository: UserRepository) {
  //     this.userRepository = userRepository;
  //   } // Hacer esto es como hacer lo siguiente:
  constructor(private readonly userRepository: UserRepository) {}

  async execute(id: string): Promise<User | null> {
    const user = await this.userRepository.getUserById(id);
    return user ?? null;
  }
}
