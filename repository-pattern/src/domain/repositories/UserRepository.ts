import { User } from "../entities/User";

export interface UserRepository {
  getUserById(id: string): Promise<User | null>;
  saveUser(user: User): Promise<User | null>;
}
